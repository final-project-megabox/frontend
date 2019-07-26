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

  addPlus = [];  // 플러스버튼추가

  // 클릭할 때마다 영화 타이틀이 들어가는 배열
  selectTitle = [];

  // 서버에서 받아오는 영화 정보가 들어가 있는 배열
  movies:Movies[] = [];

  // 확인 버튼을 클릭하였을 때 선택한 영화 정보가 들어 있는 배열
  selectMovie:Movies[] = [];

  payLoad = [];

  postDate =`${this.calendarService.year}-0${this.calendarService.month + ''.length === 1 ? '0' + (this.calendarService.month + 1) : this.calendarService.month + 1}-${this.calendarService.day}`;
  postTheater = '';
  postMovie = '';

  movieList = [];
  
  constructor(private http: HttpClient, private calendarService: CalendarService) { }
  
  ngOnInit() {
    
  }

  getMovieList(theater: string, date?: string, movie?: string ) {
    this.postDate = date ? date : this.postDate;
    this.postTheater = theater ? theater : this.postTheater;
    this.postMovie = movie ? movie : this.postMovie;

    console.log(this.postDate, this.postTheater, this.postMovie);

    if (!this.postTheater) return;

    this.http.get<[]>(`${environment.appUrl}?date=${this.postDate}&theater=${this.postTheater}&movie=${this.postMovie}`)
      .subscribe(list => this.movieList = list);
  }
  
  getAll() {
    return this.http.get<Movies[]>(environment.appUrl);
  }

  // 클릭할 때마다 선택한 극장이 들어가는 배열
  selectTheaters:string[] = [];

  // 확인 버튼을 클릭할 때 선택한 극장이 들어가는 배열
  transmitTheaters:string[] = [];

  // 극장 정보가 들어가 있는 배열
  detailRegions: DetailRegion[] = [];
  
  // 선택한 영화 갯수 구해서 add 버튼추가
  addPlusButton() {
    this.addPlus = [];
    
    const leng = this.selectMovie.length;

    if (leng === 4) return;

    for (let i = 0; i < 4 - leng; i++) {
      this.addPlus = [...this.addPlus, {}];
    }
  }
}