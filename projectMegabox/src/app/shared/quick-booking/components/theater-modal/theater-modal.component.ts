import { Component, OnInit } from '@angular/core';

import { QuickBookingService } from '../../service/quick-booking.service';

import { DetailRegion } from '../../models/detail-region.interface';
import { regions } from '../../models/regions.type';

@Component({
  selector: 'app-theater-modal',
  templateUrl: './theater-modal.component.html',
  styleUrls: ['./theater-modal.component.scss']
})
export class TheaterModalComponent implements OnInit {

  constructor(private bookingService: QuickBookingService) {}

  ngOnInit() {}

  depthOneState: regions = '선호 영화관';

  selectRegions: regions[] = ['선호 영화관','서울', '경기', '부산'];

  selectTheaters:string[] = [];

  hoverRegion: string;

  detailRegions: DetailRegion[] = [
    { id: 0, name: '강남', city: '서울', selected: false}, 
    { id: 1, name: '신촌', city: '서울', selected: false}, 
    { id: 2, name: '코엑스', city: '서울', selected: false}, 
    { id: 3, name: '고양스타필드', city: '경기', selected: false }, 
    { id: 4, name: '해운대(장산)', city: '부산', selected: false }
  ];

  addRegion(detailArea: string, selected:boolean) {
    if(selected && this.selectTheaters.length < 4) {
      this.selectTheaters = [...this.selectTheaters, detailArea];
    } else if(!selected || this.selectTheaters.length < 4) {
      this.selectTheaters = this.selectTheaters.filter(theater => theater !== detailArea);
    } else {
      this.detailRegions = this.detailRegions.map(region => {
        return region.name === detailArea ? {...region, selected: false} : region
      })
      alert('4개까지만 선택할 수 있습니다.');
    }
  }

  deleteTheater(deleteArea: string) {
    this.selectTheaters = this.selectTheaters.filter(theater => theater !== deleteArea);
  }

  hoverArea(detailArea: string) {
    this.hoverRegion = detailArea;
  }
}
