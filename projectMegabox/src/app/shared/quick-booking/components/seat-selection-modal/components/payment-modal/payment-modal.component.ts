import { Component, OnInit } from '@angular/core';
import { QuickBookingService } from 'src/app/shared/quick-booking/service/quick-booking.service';
import { SeatService } from '../../service/seat.service';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent implements OnInit {

  constructor(public bookingService: QuickBookingService, public seatService: SeatService) { }

  ngOnInit() {
  }

  postMovie(schedule: number) {
    this.seatService.postMovie(schedule, this.seatService.selectSeat)
      .subscribe()
  }

  createAgeIcon(age: string) {
    if (age === "전체 관람") return "age-all hidden-text";
    if (age === "12세 관람가") return "age-12 hidden-text";
    if (age === "15세 관람가") return "age-15 hidden-text";
    if (age === "청소년 관람불가") return "age-adult hidden-text";
  }

}
