import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movies } from '../models/movies.interface';

import { environment } from 'src/environments/environment';
import { DetailRegion } from '../models/detail-region.interface';


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
  
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
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