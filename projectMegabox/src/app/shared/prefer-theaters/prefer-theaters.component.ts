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

    this.getAllPreferTheaters();
  }

  getAllPreferTheaters() {
    this.preferTheaterService.getAllPreferTheaters()
    .subscribe(theaters => this.preferTheaterService.choieces = theaters['preferTheater']);
    console.log('선호영화관 모달', this.preferTheaterService.choieces);
  }

  // change 이벤트가 발생하면 선택한 지역을 배열에 할당하고 각각의 state에 할당

  choosenRegion(regionValue, regionId) {
    console.log('지역 체인지 이벤트 감지');
    // 덮어쓰게 만들어야 함.
    this.preferTheaterService.preferRegionChoices = [...this.preferTheaterService.preferRegionChoices, { id: regionId, value: regionValue}];
    this.preferTheaterService.preferRegionChoices.forEach(region => {
      if(+region.id === 0) { this.preferTheaterService.preferOneState = region.value }
      if(+region.id === 1) { this.preferTheaterService.preferTwoState = region.value }
      if(+region.id === 2) { this.preferTheaterService.preferThreeState = region.value }
    });
  }

  choosenTheater(theaterValue, theaterId) {
    console.log('영화관 체인지 이벤트 감지',theaterValue,theaterId);
    this.preferTheaterService.preferTheaterChoices = [...this.preferTheaterService.preferTheaterChoices, { id: theaterId, value: theaterValue}];
    console.log('preferTheaterChoices',this.preferTheaterService.preferTheaterChoices);
    this.preferTheaterService.preferTheaterChoices.forEach(theater => {
      if(+theater.id === 0) { this.preferTheaterService.theaterOneState = theater.value }
      if(+theater.id === 1) { this.preferTheaterService.theaterTwoState = theater.value }
      if(+theater.id === 2) { this.preferTheaterService.theaterThreeState = theater.value }
    });

    // 중복 검사
    if(this.preferTheaterService.theaterOneState === '영화관선택' && this.preferTheaterService.theaterTwoState === '영화관선택' ||
       this.preferTheaterService.theaterOneState === '영화관선택' && this.preferTheaterService.theaterThreeState === '영화관선택' ||
       this.preferTheaterService.theaterTwoState === '영화관선택' && this.preferTheaterService.theaterThreeState === '영화관선택'
    ) 
    return

    if(this.preferTheaterService.theaterOneState === this.preferTheaterService.theaterTwoState ||
       this.preferTheaterService.theaterOneState === this.preferTheaterService.theaterThreeState ||
       this.preferTheaterService.theaterTwoState === this.preferTheaterService.theaterThreeState
    )
    { alert('이미 선택하신 영화관 입니다.') }
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

    console.log(this.preferTheaterService.theaterChoiceOne);
    console.log(this.preferTheaterService.regionChoiceOne);

    this.preferTheaterService.postPreferTheaters();

    this.preferTheaterService.preferChangeDetect();
  
    // 선호 영화관 모달창 닫기
    this.preferTheaterService.preferState = false
  }

  // 순위를 보여주기 위한 자료구조
  orderNum = [
    { id: 0, rank:'1순위'},
    { id: 1, rank:'2순위'},
    { id: 2, rank:'3순위'}
  ];
}
