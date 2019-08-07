import { Component, OnInit } from '@angular/core';
import { SeatService } from './service/seat.service';
import { QuickBookingService } from '../../service/quick-booking.service';

@Component({
  selector: 'app-seat-selection-modal',
  templateUrl: './seat-selection-modal.component.html',
  styleUrls: ['./seat-selection-modal.component.scss']
})
export class SeatSelectionModalComponent implements OnInit {

  constructor(public seatService: SeatService, public bookingService: QuickBookingService) { }

  ngOnInit() {
  }

  createAgeIcon(age: string) {
    if (age === "전체 관람") return "age-all hidden-text";
    if (age === "12세 관람가") return "age-12 hidden-text";
    if (age === "15세 관람가") return "age-15 hidden-text";
    if (age === "청소년 관람불가") return "age-adult hidden-text";
  }

  postMovie(schedule: number) {
    console.log(schedule);
    this.seatService.postMovie(schedule, this.seatService.selectSeat)
      .subscribe()
  }
}
