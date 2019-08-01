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

    // 백엔드에서 받을 데이터, 보낼 데이터
    this.preferTheaterService.choieces = [
      { id: 0, theater: this.preferTheaterService.theaterChoiceOne,  region: this.preferTheaterService.regionChoiceOne},
      { id: 1, theater: this.preferTheaterService.theaterChoiceTwo, region: this.preferTheaterService.regionChoiceTwo },
      { id: 2, theater: this.preferTheaterService.theaterChoiceThree,  region: this.preferTheaterService.regionChoiceThree }
    ]
  }

  choosenRegion(regionValue, regionId) {
    this.preferTheaterService.preferRegionChoices = [...this.preferTheaterService.preferRegionChoices, { id: regionId, value: regionValue}];
    return this.preferTheaterService.preferRegionChoices.forEach(region => {
      if(+region.id === 0) { this.preferTheaterService.preferOneState = region.value }
      if(+region.id === 1) { this.preferTheaterService.preferTwoState = region.value }
      if(+region.id === 2) { this.preferTheaterService.preferThreeState = region.value }
    });
  }

  choosenTheater(theaterValue, theaterId) {
    this.preferTheaterService.preferTheaterChoices = [...this.preferTheaterService.preferTheaterChoices, { id: theaterId, value: theaterValue}];
    return this.preferTheaterService.preferTheaterChoices.forEach(theater => {
      if(+theater.id === 0) { this.preferTheaterService.theaterOneState = theater.value }
      if(+theater.id === 1) { this.preferTheaterService.theaterTwoState = theater.value }
      if(+theater.id === 2) { this.preferTheaterService.theaterThreeState = theater.value }
    });
  }

  // 뷰를 구현하기 위한 데이터
  getFreferTheater() {
    return this.preferTheaterService.ChoosedTheater = [
      { id: 0, theater: '영화관선택', region: '지역선택' },
      { id: 1, theater: '강남', region: '서울' }, 
      { id: 2, theater: '신촌', region: '서울' }, 
      { id: 3, theater: '코엑스', region: '서울' }, 
      { id: 4, theater: '고양스타필드', region: '경기' }, 
      { id: 5, theater: '해운대(장산)', region: '부산' }
    ]
  }

  // 등록 버튼 클릭 시
  confirm() {
    // 선호 영화관 모달창 닫기
    this.preferTheaterService.preferState = false

    this.preferTheaterService.regionChoiceOne = this.preferTheaterService.preferOneState;
    this.preferTheaterService.regionChoiceTwo = this.preferTheaterService.preferTwoState;
    this.preferTheaterService.regionChoiceThree = this.preferTheaterService.preferThreeState;

    this.preferTheaterService.theaterChoiceOne = this.preferTheaterService.theaterOneState;
    this.preferTheaterService.theaterChoiceTwo = this.preferTheaterService.theaterTwoState;
    this.preferTheaterService.theaterChoiceThree = this.preferTheaterService.theaterThreeState;

    this.preferTheaterService.choieces = [
      { id: 0, theater: this.preferTheaterService.theaterChoiceOne,  region: this.preferTheaterService.regionChoiceOne},
      { id: 1, theater: this.preferTheaterService.theaterChoiceTwo, region: this.preferTheaterService.regionChoiceTwo },
      { id: 2, theater: this.preferTheaterService.theaterChoiceThree,  region: this.preferTheaterService.regionChoiceThree }
    ]
  }
}
