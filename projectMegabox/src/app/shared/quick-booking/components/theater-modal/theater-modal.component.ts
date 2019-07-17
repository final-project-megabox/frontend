import { Component, OnInit } from '@angular/core';

import { QuickBookingService } from '../../service/quick-booking.service';

type regions = '선호 영화관' | '서울' | '경기' | '부산' ;

@Component({
  selector: 'app-theater-modal',
  templateUrl: './theater-modal.component.html',
  styleUrls: ['./theater-modal.component.scss']
})
export class TheaterModalComponent implements OnInit {

  constructor(private bookingService: QuickBookingService) { }

  ngOnInit() {
  }

  depthOneState: regions = '선호 영화관';

  selectRegions: regions[] = ['선호 영화관','서울', '경기', '부산'];

  hoverRegion: string;

  detailRegions = [
    { id: 0, name: '강남', city: '서울' }, 
    { id: 1, name: '신촌', city: '서울' }, 
    { id: 2, name: '코엑스', city: '서울' }, 
    { id: 3, name: '고양스타필드', city: '경기' }, 
    { id: 4, name: '해운대(장산)', city: '부산' }, 
  ];
  
  // navItems = [
  //   {
  //     id: 0,
  //     name: '서울',
  //     region: ['강남', '신촌', '코엑스'],
  //     map: 'url'
  //   },
  //   {
  //     id: 1,
  //     name: '경기',
  //     region: ['고양스타필드'],
  //     map: 'url'
  //   },
  //   {
  //     id: 2,
  //     name: '부산',
  //     region: ['해운대(장산)'],
  //     map: 'url'
  //   },
  //   ['강남', '신촌', '코엑스', '고양스타필드', '해운대(장산)' ]
  // ]

  enter(area: string) {
    this.hoverRegion = area;
  }
}
