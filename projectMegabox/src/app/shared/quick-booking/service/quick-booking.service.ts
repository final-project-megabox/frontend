import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  _postDate =`${this.calendarService.year}-0${this.calendarService.month + ''.length === 1 ? '0' + (this.calendarService.month + 1) : this.calendarService.month + 1}-${this.calendarService.day}`;
  postTheater = '';
  postMovie = '';

  movieList = [];
  
  constructor(private http: HttpClient, private calendarService: CalendarService) { }
  
  ngOnInit() {
    
  }

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
        this.postTheater = `${this.postTheater}_${item}`;
      }
    })

    this.getMovieList();
  }

  get transmitTheaters() {
    return this._transmitTheaters;
  }

  set selectMovie(value: Movies[]) {
    this._selectMovie = value;

    this.selectMovie.forEach((item, idx) => {
      if (idx === 0) {
        this.postMovie = `&movie=${item.title}`;
      } else {
        this.postMovie = `${this.postMovie}_${item.title}`;
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
    console.log(this.postTheater, this.postDate, this.postMovie)
    if (!this.postTheater) {
      alert('극장을 선택하세요');
      return;
    }

    this.http.get<[]>(`${environment.appUrl}?date=${this.postDate}${this.postTheater}&movie=${this.postMovie}`)
      .subscribe(list => this.movieList = list);
  }
  
  getAll() {
    return this.http.get<Movies[]>(environment.appUrl);
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
}