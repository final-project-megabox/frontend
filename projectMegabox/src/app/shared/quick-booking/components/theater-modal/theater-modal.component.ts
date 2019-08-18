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
    this.preferTheaterService.preferTheaterUpDated.subscribe(detect=> {
      this.preferTheaterService.bowlPrefer = detect.filter(theater => theater['theater'] !== '영화관선택');
      this.bookingService.selectTheaters = [...this.preferTheaterService.bowlPrefer.map(({ theater }) => theater), ...this.bookingService.transmitTheaters];
    });
    // 서버에서 선호 영화관 데이터를 받아온다.
    this.getPrefer();

    this.pref();
    
    this.getTheaters();
    
    this.getTheaterName();
  }

  depthOneState: regions = '선호 영화관';

  selectRegions: regions[] = ['선호 영화관','서울', '경기', '부산/대구/경상'];

  hoverRegion: string;

  // 서버에서 선호 영화관 데이터를 받아오고 this.preferTheaterService.choieces 배열에 할당한다.
  getPrefer() {
    this.preferTheaterService.getAll()
    .subscribe(theaters => this.preferTheaterService.choieces = theaters['preferTheater']);
  }
  
  // 영화관 선택을 제외한 결과를 bowlPrefer에 할당하고 transmitTheaters 배열에 선호 영화관에서 극장 정보만을 할당한다.
  pref() {
    setTimeout(() => {
      this.preferTheaterService.bowlPrefer = this.preferTheaterService.choieces.filter(({ theater }) => theater !=='영화관선택');
      this.bookingService.transmitTheaters = [...this.preferTheaterService.bowlPrefer.map(({ theater }) => theater), ...this.bookingService.transmitTheaters];
      const uniqueTransmit = Array.from(new Set(this.bookingService.transmitTheaters));
      this.bookingService.transmitTheaters = uniqueTransmit;
    }); 
  }

  // 모든 지역 정보가 들어있는 데이터
  getTheaters() {
     this.bookingService.getDetailRegions()
     .subscribe(theaters => {
      this.bookingService.detailRegions = theaters.map(theater => {
          return this.bookingService.transmitTheaters.some(select => theater.theater === select) ? {...theater, selected: true} : theater;
      })});
      console.log( this.bookingService.detailRegions);
  }

  // 극장 title을 삭제하고 취소 버튼을 누른 후 다시 들어와도 title이 보이게 하기 위한 함수
  getTheaterName() {
    setTimeout(()=> {
      this.bookingService.selectTheaters = this.bookingService.transmitTheaters.map(theater=> theater);
    }, 1000);
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
      console.log( this.bookingService.detailRegions);
      this.bookingService.alertModalState = true;
    }
  }

  // 극장 title 삭제 하였을 때 극장 리스트와 연동 처리
  deleteTheater(deleteArea: string) {
    this.bookingService.selectTheaters = this.bookingService.selectTheaters.filter(theater => theater !== deleteArea);
    this.bookingService.detailRegions = this.bookingService.detailRegions.map(region => {
      return region.theater === deleteArea ? {...region, selected: false} : region
    })
    console.log( this.bookingService.detailRegions);
  }

  // 지역 리스트를 호버 하였을 때 지도에 해당 위치를 표시하기 위해
  hoverArea(detailArea: string) {
    this.hoverRegion = detailArea;
  }

  // 확인 버튼을 눌렀을 때 선택한 극장을 다른 배열에 넣어줌.
  confirmSelect() {
    this.bookingService.transmitTheaters = this.bookingService.selectTheaters;
    this.bookingService.theaterModalState = false;
  }

  // 취소 버튼을 눌렀을 때
  cancelSelect() {
    this.bookingService.theaterModalState = false;
  }
}