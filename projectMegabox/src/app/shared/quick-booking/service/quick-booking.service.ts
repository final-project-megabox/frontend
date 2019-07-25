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
  selectTitle = [];

  movies:Movies[] = [];
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

  selectTheaters:string[] = [];

  detailRegions: DetailRegion[] = [
    { id: 0, name: '강남', city: '서울', selected: false}, 
    { id: 1, name: '신촌', city: '서울', selected: false}, 
    { id: 2, name: '코엑스', city: '서울', selected: false}, 
    { id: 3, name: '고양스타필드', city: '경기', selected: false }, 
    { id: 4, name: '해운대(장산)', city: '부산', selected: false }
  ];
  
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