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

  ngOnInit() {}

  depthOneState: regions = '선호 영화관';

  selectRegions: regions[] = ['선호 영화관','서울', '경기', '부산'];

  hoverRegion: string;

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

  cancelSelect() {
    this.bookingService.theaterModalState = false;
    console.log(this.bookingService.detailRegions.filter(region => {
      region.selected === false;
    }).length);


    if(!this.bookingService.detailRegions.filter(region => {
      region.selected === false;
    }).length) {
      this.bookingService.selectTheaters = [];
    }
  }
}
