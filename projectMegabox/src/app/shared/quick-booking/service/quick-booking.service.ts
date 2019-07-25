import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movies } from '../models/movies.interface';

import { environment } from 'src/environments/environment';
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


  postDate =`${this.calendarService.year}-0${this.calendarService.month+1}-${this.calendarService.day}`;
  postTheater = '';
  postMovie = '';
  
  constructor(private http: HttpClient, private calendarService: CalendarService) { }
  
  ngOnInit() {
    
  }

  test(date?: string, theater?: string, movie?: string ) {
    this.postDate = date ? date : this.postDate;
    this.postTheater = theater ? theater : this.postTheater;
    this.postMovie = movie ? movie : this.postMovie;

    if (!this.postTheater) return;
    this.http.get(`${environment.appUrl}?date=${this.postDate}&theater=${this.postTheater}`)
      .subscribe(list => console.log(list))
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
}