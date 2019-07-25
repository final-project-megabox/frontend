import { Component, OnInit } from '@angular/core';

import { QuickBookingService } from '../../service/quick-booking.service';

import { regions } from '../../models/regions.type';

@Component({
  selector: 'app-theater-modal',
  templateUrl: './theater-modal.component.html',
  styleUrls: ['./theater-modal.component.scss']
})
export class TheaterModalComponent implements OnInit {

  constructor(private bookingService: QuickBookingService) {}

  ngOnInit() {
    this.bookingService.detailRegions = this.getTheaters().map(theater => {
      return this.bookingService.transmitTheaters.some(select => theater.name === select) ? {...theater, selected: true} : theater;
    });
  }

  depthOneState: regions = '선호 영화관';

  selectRegions: regions[] = ['선호 영화관','서울', '경기', '부산'];

  hoverRegion: string;

  getTheaters() {
    return this.bookingService.detailRegions = [
      { id: 0, name: '강남', city: '서울', selected: false}, 
      { id: 1, name: '신촌', city: '서울', selected: false}, 
      { id: 2, name: '코엑스', city: '서울', selected: false}, 
      { id: 3, name: '고양스타필드', city: '경기', selected: false }, 
      { id: 4, name: '해운대(장산)', city: '부산', selected: false }
    ]
  }

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

  deleteTheater(deleteArea: string) {
    this.bookingService.selectTheaters = this.bookingService.selectTheaters.filter(theater => theater !== deleteArea);
    this.bookingService.detailRegions = this.bookingService.detailRegions.map(region => {
      return region.name === deleteArea ? {...region, selected: false} : region
    })
  }

  hoverArea(detailArea: string) {
    this.hoverRegion = detailArea;
  }

  confirmSelect() {
    this.bookingService.theaterModalState = false;
    this.bookingService.transmitTheaters = this.bookingService.selectTheaters;
    console.log(this.bookingService.transmitTheaters);
  }

  cancelSelect() {
    this.bookingService.theaterModalState = false;

    console.log(!this.bookingService.transmitTheaters.length);

    if(!this.bookingService.transmitTheaters.length)
    {
      this.bookingService.selectTheaters = [];
      // this.bookingService.transmitTheaters = [];
      this.bookingService.detailRegions = this.bookingService.detailRegions.map(region => ({ ...region, selected: false}));
    }
    // if(this.bookingService.detailRegions.filter(region => {region.selected === true}).length)
    // {
    //   this.bookingService.selectTheaters = [];
    //   this.bookingService.detailRegions = this.bookingService.detailRegions.map(region => ({ ...region, selected: false}));
    // }
  }
}
