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

  hoverRegion: DetailRegion;

  detailRegions: DetailRegion[] = [
    { id: 0, name: '강남', city: '서울' }, 
    { id: 1, name: '신촌', city: '서울' }, 
    { id: 2, name: '코엑스', city: '서울' }, 
    { id: 3, name: '고양스타필드', city: '경기' }, 
    { id: 4, name: '해운대(장산)', city: '부산' }
  ];

  hoverArea(detailArea: DetailRegion) {
    this.hoverRegion = detailArea;
  }
}
