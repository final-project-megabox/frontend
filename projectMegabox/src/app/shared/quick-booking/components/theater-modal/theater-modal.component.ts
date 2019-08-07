import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';

import { QuickBookingService } from '../../service/quick-booking.service';
import { PreferTheatersService } from 'src/app/shared/prefer-theaters/services/prefer-theaters.service';

import { regions } from '../../models/regions.type';

@Component({
  selector: 'app-theater-modal',
  templateUrl: './theater-modal.component.html',
  styleUrls: ['./theater-modal.component.scss']
})
export class TheaterModalComponent implements OnInit {

  constructor(public bookingService: QuickBookingService, public preferTheaterService: PreferTheatersService) {}

  ngOnInit() {
    this.getTheaters();

    // this.getPrefer();

    this.getTheaterName();
  }

  depthOneState: regions = '선호 영화관';

  selectRegions: regions[] = ['선호 영화관','서울', '경기', '부산/대구/경상'];

  hoverRegion: string;

  // testArray;

  // 선호 영화관
  // getPrefer() {
  //   this.testArray = this.preferTheaterService.choieces.filter(({ theater }) => theater !=='영화관선택');
  //   console.log(this.testArray);
  //   this.bookingService.transmitTheaters = [...this.testArray.map(({ theater }) => theater)];
  //   console.log(this.bookingService.transmitTheaters);
  // }

  // 모든 지역 정보가 들어있는 데이터
  getTheaters() {
     this.bookingService.getDetailRegions()
     .subscribe(theaters => {
      this.bookingService.detailRegions = theaters.map(theater => {
          return this.bookingService.transmitTheaters.some(select => theater.theater === select) ? {...theater, selected: true} : theater;
      })});
  }

  // 극장 title을 삭제하고 취소 버튼을 누른 후 다시 들어와도 title이 보이게 하기 위한 함수
  getTheaterName() {
    this.bookingService.selectTheaters = this.bookingService.transmitTheaters.map(theater=> theater);
  }

  // 극장 선택 최대 개수를 4개로 제한, 클릭 하였을 때 배경색이 변하게 처리
  addRegion(detailArea: string, selected:boolean) {
    if(selected && this.bookingService.selectTheaters.length < 4) {
      this.bookingService.selectTheaters = [...this.bookingService.selectTheaters, detailArea];
    } else if(!selected || this.bookingService.selectTheaters.length < 4) {
      this.bookingService.selectTheaters = this.bookingService.selectTheaters.filter(theater => theater !== detailArea);
    } else {
      this.bookingService.detailRegions = this.bookingService.detailRegions.map(region => {
        return region.theater === detailArea ? {...region, selected: false} : region
      })
      this.bookingService.alertModalState = true;
    }
  }

  // 극장 title 삭제 하였을 때 극장 리스트와 연동 처리
  deleteTheater(deleteArea: string) {
    this.bookingService.selectTheaters = this.bookingService.selectTheaters.filter(theater => theater !== deleteArea);
    this.bookingService.detailRegions = this.bookingService.detailRegions.map(region => {
      return region.theater === deleteArea ? {...region, selected: false} : region
    })
  }

  // 지역 리스트를 호버 하였을 때 지도에 해당 위치를 표시하기 위해
  hoverArea(detailArea: string) {
    this.hoverRegion = detailArea;
  }

  // 확인 버튼을 눌렀을 때 선택한 극장을 다른 배열에 넣어줌.
  confirmSelect() {
    this.bookingService.theaterModalState = false;
    this.bookingService.transmitTheaters = this.bookingService.selectTheaters;
  }

  // 취소 버튼을 눌렀을 때
  cancelSelect() {
    this.bookingService.theaterModalState = false;
  }
}