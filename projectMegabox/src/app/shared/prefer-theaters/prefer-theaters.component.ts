import { Component, OnInit } from '@angular/core';

import { PreferTheatersService } from './prefer-theaters.service';

@Component({
  selector: 'prefer-theaters',
  templateUrl: './prefer-theaters.component.html',
  styleUrls: ['./prefer-theaters.component.scss']
})
export class PreferTheatersComponent implements OnInit {

  constructor(private preferTheaterService: PreferTheatersService) { }
  
  ngOnInit() {
    this.getFreferTheater();
    console.log(this.preferTheaterService.choieces);
  }

  // 뷰를 구현하기 위한 데이터
  getFreferTheater() {
    return this.preferTheaterService.ChoosedTheater = [
      { id: 0, theater: '영화관선택', region: '지역선택' }, // 선택이 안되었을 때 보낼 데이터, 백엔드에 id 값을 보낸다.
      { id: 1, theater: '강남', region: '서울' }, 
      { id: 2, theater: '신촌', region: '서울' }, 
      { id: 3, theater: '코엑스', region: '서울' }, 
      { id: 4, theater: '고양스타필드', region: '경기' }, 
      { id: 5, theater: '해운대(장산)', region: '부산' }
    ]
  }

  // choieces() {
  //   return this.preferTheaterService.choieces = [
  //     { id: 0, theater: this.preferTheaterService.theaterChoiceOne,  region: this.preferTheaterService.preferOneState },
  //     { id: 1, theater: this.preferTheaterService.theaterChoiceTwo, region: this.preferTheaterService.preferTwoState },
  //     { id: 2, theater: this.preferTheaterService.theaterChoiceThree,  region: this.preferTheaterService.preferThreeState }
  //   ]
  // }

  // 선택한 지역을 state에 저장
  regionChoiceOne(selected) {
    this.preferTheaterService.preferOneState = selected;
  }
  
  regionChoiceTwo(selected) {
    this.preferTheaterService.preferTwoState = selected;
  }
  
  regionChoiceThree(selected) {
    this.preferTheaterService.preferThreeState = selected;
  }

  // 선택한 영화관을 state에 저장
  theaterChoiceOne(theater) {
    this.preferTheaterService.theaterChoiceOne = theater;
  }

  theaterChoiceTwo(theater) {
    this.preferTheaterService.theaterChoiceTwo = theater;
  }

  theaterChoiceThree(theater) {
    this.preferTheaterService.theaterChoiceThree = theater;
  }

  // 등록 버튼 클릭 시
  confirm() {
    // 선호 영화관 모달창 닫기
    this.preferTheaterService.preferState = false

    this.preferTheaterService.choieces = [
      { id: 0, theater: this.preferTheaterService.theaterChoiceOne,  region: this.preferTheaterService.preferOneState },
      { id: 1, theater: this.preferTheaterService.theaterChoiceTwo, region: this.preferTheaterService.preferTwoState },
      { id: 2, theater: this.preferTheaterService.theaterChoiceThree,  region: this.preferTheaterService.preferThreeState }
    ]

    // 배열의 length를 지정하여 설정한 길이만큼만 배열의 원소를 받을 수 있게 설정
    // this.preferTheaterService.preferRegionChoices.length = 3;
    // this.preferTheaterService.preferTheaterChoices.length = 3;

    // 선택한 지역 배열에 담기
    // this.preferTheaterService.preferRegionChoices = [this.preferTheaterService.preferOneState
    // ,this.preferTheaterService.preferTwoState, this.preferTheaterService.preferThreeState]

    // 선택한 극장 배열에 담기
    // this.preferTheaterService.preferTheaterChoices = [ this.preferTheaterService.theaterChoiceOne
    // ,this.preferTheaterService.theaterChoiceTwo, this.preferTheaterService.theaterChoiceThree ]
  }
}
