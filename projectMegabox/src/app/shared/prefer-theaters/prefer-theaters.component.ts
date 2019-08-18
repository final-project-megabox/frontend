import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { PreferTheatersService } from './services/prefer-theaters.service';
import { QuickBookingService } from '../quick-booking/service/quick-booking.service';

@Component({
  selector: 'prefer-theaters',
  templateUrl: './prefer-theaters.component.html',
  styleUrls: ['./prefer-theaters.component.scss']
})
export class PreferTheatersComponent implements OnInit {

  constructor(public preferTheaterService: PreferTheatersService, public bookingService: QuickBookingService) { }
  
  ngOnInit() {
    // 뷰 구현을 위한 데이터 호출
    this.getFreferTheater();

    // 서버에서 받아오는 선호 영화관 데이터
    this.getAllPreferTheaters();
  
    // choices 배열의 변화를 감지
    this.preferTheaterService.preferChangeDetect();
    
  }

  // 서버에서 받아오는 선호 영화관 데이터
  getAllPreferTheaters() {
    this.preferTheaterService.getAll()
    .subscribe(theaters => {
      console.log(theaters);
      this.preferTheaterService.choieces = theaters['preferTheater'];
      theaters['preferTheater'].forEach(theaters => {
        if(theaters.id === 0) { this.preferTheaterService.preferOneState = theaters.region; this.preferTheaterService.theaterOneState = theaters.theater};
        if(theaters.id === 1) { this.preferTheaterService.preferTwoState = theaters.region; this.preferTheaterService.theaterTwoState = theaters.theater};
        if(theaters.id === 2) { this.preferTheaterService.preferThreeState = theaters.region; this.preferTheaterService.theaterThreeState = theaters.theater};
      })
    });
  }

  // change 이벤트가 발생하면 선택한 지역을 배열에 할당하고 각각의 state에 할당
  choosenRegion(regionValue, regionId) {
    this.preferTheaterService.preferRegionChoices = [...this.preferTheaterService.preferRegionChoices, { id: regionId, value: regionValue}];

    const preferId = this.preferTheaterService.preferRegionChoices.map(({id})=> id);
    const duplicate = this.preferTheaterService.preferRegionChoices.filter((content, idx ) => {
      if(idx === +preferId.lastIndexOf(content.id)) return content;
    });

    this.preferTheaterService.preferRegionChoices = duplicate;

    this.preferTheaterService.preferRegionChoices.forEach(region => {
      if(+region.id === 0) { this.preferTheaterService.preferOneState = region.value }
      if(+region.id === 1) { this.preferTheaterService.preferTwoState = region.value }
      if(+region.id === 2) { this.preferTheaterService.preferThreeState = region.value }
    });
  }

  // change 이벤트가 발생하면 선택한 영화관을 배열에 할당하고 각각의 state에 할당
  choosenTheater(theaterValue, theaterId) {
    this.preferTheaterService.preferTheaterChoices = [...this.preferTheaterService.preferTheaterChoices, { id: theaterId, value: theaterValue}];

    const preferId = this.preferTheaterService.preferTheaterChoices.map(({id})=> id);
    const duplicate = this.preferTheaterService.preferTheaterChoices.filter((content, idx ) => {
      if(idx === +preferId.lastIndexOf(content.id)) return content;
    });

    this.preferTheaterService.preferTheaterChoices = duplicate;

    this.preferTheaterService.preferTheaterChoices.forEach(theater => {
      if(+theater.id === 0) { this.preferTheaterService.theaterOneState = theater.value }
      if(+theater.id === 1) { this.preferTheaterService.theaterTwoState = theater.value }
      if(+theater.id === 2) { this.preferTheaterService.theaterThreeState = theater.value }
    });

    // 중복 검사
    // if(this.preferTheaterService.theaterOneState === '영화관선택' && this.preferTheaterService.theaterTwoState === '영화관선택' ||
    //    this.preferTheaterService.theaterOneState === '영화관선택' && this.preferTheaterService.theaterThreeState === '영화관선택' ||
    //    this.preferTheaterService.theaterTwoState === '영화관선택' && this.preferTheaterService.theaterThreeState === '영화관선택'
    // ) 
    // return

    // if(this.preferTheaterService.theaterOneState === this.preferTheaterService.theaterTwoState ||
    //    this.preferTheaterService.theaterOneState === this.preferTheaterService.theaterThreeState ||
    //    this.preferTheaterService.theaterTwoState === this.preferTheaterService.theaterThreeState
    // )
    // { alert('이미 선택하신 영화관 입니다.') }
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
    // 등록 버튼을 클릭하면 change 이벤트에의해 변경된 state를 할당한다.
    this.preferTheaterService.regionChoiceOne = this.preferTheaterService.preferOneState;
    this.preferTheaterService.regionChoiceTwo = this.preferTheaterService.preferTwoState;
    this.preferTheaterService.regionChoiceThree = this.preferTheaterService.preferThreeState;

    this.preferTheaterService.theaterChoiceOne = this.preferTheaterService.theaterOneState;
    this.preferTheaterService.theaterChoiceTwo = this.preferTheaterService.theaterTwoState;
    this.preferTheaterService.theaterChoiceThree = this.preferTheaterService.theaterThreeState;

    this.preferTheaterService.postPreferTheaters();

    this.preferTheaterService.choieces = [
      { id: 0, theater: this.preferTheaterService.theaterChoiceOne, region: this.preferTheaterService.regionChoiceOne},
      { id: 1, theater: this.preferTheaterService.theaterChoiceTwo, region: this.preferTheaterService.regionChoiceTwo},
      { id: 2, theater: this.preferTheaterService.theaterChoiceThree, region: this.preferTheaterService.regionChoiceThree}
    ]

    this.preferTheaterService.preferChangeDetect();
  
    // 선호 영화관 모달창 닫기
    this.preferTheaterService.preferState = false;
  }

  cancel() {
    this.preferTheaterService.preferChangeDetect();

    this.preferTheaterService.preferState = false;
  }

  // 순위를 보여주기 위한 자료구조
  orderNum = [
    { id: 0, rank:'1순위'},
    { id: 1, rank:'2순위'},
    { id: 2, rank:'3순위'}
  ];
}
