import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Movies } from '../models/movies.interface';

import { environment } from 'src/environments/environment';
import { DetailRegion } from '../models/detail-region.interface';
import { CalendarService } from './calendar.service';


@Injectable({
  providedIn: 'root'
})
export class QuickBookingService {
  calendarModalState = false;
  movieModalState = false;
  theaterModalState = false;
  alertModalState = false;
  selectedMovies = false;
  alertTheater = false;

  addPlus = [];  // 영화 플러스 버튼 추가
  theater = [0, 1, 2, 3]; // 지역 플러스 버튼 추가

  // 클릭할 때마다 영화 타이틀이 들어가는 배열
  selectTitle = [];

  // 서버에서 받아오는 영화 정보가 들어가 있는 배열
  movies:Movies[] = [];

  // 확인 버튼을 클릭하였을 때 선택한 영화 정보가 들어 있는 배열
  _selectMovie:Movies[] = [];
  
  // 클릭할 때마다 선택한 극장이 들어가는 배열
  selectTheaters:string[] = [];

  // 확인 버튼을 클릭할 때 선택한 극장이 들어가는 배열
  _transmitTheaters:string[] = [];

  // 극장 정보가 들어가 있는 배열
  detailRegions: DetailRegion[] = [];

  payLoad = [];

  _postDate =`${this.calendarService.year}-0${this.calendarService.month + ''.length === 1 ? '0' + (this.calendarService.month + 1) : this.calendarService.month + 1}-0${this.calendarService.day + ''.length === 1 ? '0' + this.calendarService.day : this.calendarService.day}`;
  postTheater = '';
  postMovie = '';

  movieList = [];
  
  constructor(private http: HttpClient, private calendarService: CalendarService) { }
  
  ngOnInit() { }

  set postDate(value: string) {
    this._postDate = value;
    this.getMovieList();
  }

  get postDate() {
    return this._postDate;
  }
  
  set transmitTheaters(value: string[]) {
    this._transmitTheaters = value;

    if(!this.transmitTheaters.length) {
      this.postTheater = '';
      this.getMovieList();
      return;
    }

    this.transmitTheaters.forEach((item, idx) => {
      if (idx === 0) {
        this.postTheater = `&theater=${item}`;
      } else {
        this.postTheater = `${this.postTheater}&theater=${item}`;
      }
    })

    this.getMovieList();
  }

  get transmitTheaters() {
    return this._transmitTheaters;
  }

  set selectMovie(value: Movies[]) {
    this._selectMovie = value;

    if (!value.length) {
      this.postMovie = '';
      this.addPlusButton();
      this.getMovieList();
      return;
    }

    this.selectMovie.forEach((item, idx) => {
      if (idx === 0) {
        this.postMovie = `&movie=${item.title}`;
      } else {
        this.postMovie = `${this.postMovie}&movie=${item.title}`;
      }
    })
    this.addPlusButton();
    this.getMovieList();
  }

  get selectMovie() {
    return this._selectMovie;
  }

  getMovieList() {
    this.movieList = [];
    const date = new Date();

    if (!this.postTheater) {
      return;
    }

    this.http.get<Movies[]>(`http://megabox.hellocoding.shop//database/reservationScheduleList/?date=${this.postDate}${this.postTheater}${this.postMovie}`)
      .subscribe(list => this.movieList = list.filter(item => {
        if (+item.date.split('-')[2] !== date.getDate()) return +item.date.split('-')[2] !== date.getDate();
        else if (+item['start_time'].slice(0, 2) > date.getHours()) return +item['start_time'].slice(0, 2) > date.getHours();
      })
    );
  }
  
  getAll() {
    // const token = localStorage.getItem('token');
    // const headers = new HttpHeaders().set('Authorization', 'JWT ' + token);

    return this.http.get<Movies[]>('http://megabox.hellocoding.shop//database/showMovies/');
  }

  // 선택한 영화 갯수 구해서 add 버튼추가
  addPlusButton() {
    this.addPlus = [];
    
    const leng = this.selectMovie.length;

    if (leng === 4) return;

    for (let i = 0; i < 4 - leng; i++) {
      this.addPlus = [...this.addPlus, {}];
    }
  }

  // 선택한 지역 갯수 구해서 add 버튼 추가
  addTheaterButton() {
    this.theater = [0, 1, 2, 3];

    if (!this.transmitTheaters.length) return;
    for (let i = 0; i < this.transmitTheaters.length; i++) {
      this.theater = this.theater.filter(item => item !== i);
    }
  }

  // 선택한 지역 삭제
  removeTheater(theater: string) {
    this.transmitTheaters =this.transmitTheaters.filter(item => item !== theater);
    this.selectTheaters = this.selectTheaters.filter(item => item !== theater);
    this.addTheaterButton();
  }

  // 끝시간 계산
  calRunningTime(time: string, running: number) {
    const splitTime = time.split(':');
    let hour = +splitTime[0] + Math.floor(running / 60);
    let min = (+splitTime[1] + running % 60) + '';

    if (+splitTime[1] + (running % 60) >= 60) {
      hour = hour + Math.floor((+splitTime[1] + running % 60) / 60);
      min = ((+splitTime[1] + (running % 60)) % 60 + '').length === 1 ? ('0' + ((+splitTime[1] + running % 60) % 60)) : '' + (+splitTime[1] + running % 60) % 60;
    } 

    return `~ ${hour}:${min}`
  }

  // 영화 타입 가공
  movieType(type: ['', '']) {
    if(type[1]) {
      return `${type[0]}(${type[1]})`
    } else {
      return `${type[0]}`
    }
  }

  confirmTheater() {
    this.alertTheater = this.selectTheaters.length ? false : true;
  }
}