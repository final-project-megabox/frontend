import { Component, OnInit } from '@angular/core';

import { QuickBookingService } from '../../service/quick-booking.service';
import { PreferTheatersService } from 'src/app/shared/prefer-theaters/prefer-theaters.service';

import { regions } from '../../models/regions.type';

@Component({
  selector: 'app-theater-modal',
  templateUrl: './theater-modal.component.html',
  styleUrls: ['./theater-modal.component.scss']
})
export class TheaterModalComponent implements OnInit {

  constructor(private bookingService: QuickBookingService, private preferTheaterService: PreferTheatersService) {}

  ngOnInit() {
    this.bookingService.detailRegions = this.getTheaters().map(theater => {
      return this.bookingService.transmitTheaters.some(select => theater.name === select) ? {...theater, selected: true} : theater;
    });

    this.getTheaterName();
  }

  depthOneState: regions = '선호 영화관';

  selectRegions: regions[] = ['선호 영화관','서울', '경기', '부산'];

  hoverRegion: string;

  // 모든 지역 정보가 들어있는 데이터
  getTheaters() {
    return this.bookingService.detailRegions = [
      { id: 0, name: '강남', city: '서울', selected: false}, 
      { id: 1, name: '신촌', city: '서울', selected: false}, 
      { id: 2, name: '코엑스', city: '서울', selected: false}, 
      { id: 3, name: '고양스타필드', city: '경기', selected: false }, 
      { id: 4, name: '해운대(장산)', city: '부산', selected: false }
    ]
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
        return region.name === detailArea ? {...region, selected: false} : region
      })
      this.bookingService.alertModalState = true;
    }
  }

  // 극장 title 삭제 하였을 때 극장 리스트와 연동 처리
  deleteTheater(deleteArea: string) {
    this.bookingService.selectTheaters = this.bookingService.selectTheaters.filter(theater => theater !== deleteArea);
    this.bookingService.detailRegions = this.bookingService.detailRegions.map(region => {
      return region.name === deleteArea ? {...region, selected: false} : region
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