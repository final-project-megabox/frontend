import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferTheatersService {

  constructor() { }

  preferState = false;

  preferOneState = '지역선택';
  preferTwoState = '지역선택';
  preferThreeState = '지역선택';

  ChoosedTheater = [
    { id: 0, name: '강남', city: '서울', selected: false}, 
    { id: 1, name: '신촌', city: '서울', selected: false}, 
    { id: 2, name: '코엑스', city: '서울', selected: false}, 
    { id: 3, name: '고양스타필드', city: '경기', selected: false }, 
    { id: 4, name: '해운대(장산)', city: '부산', selected: false }
  ];
}
