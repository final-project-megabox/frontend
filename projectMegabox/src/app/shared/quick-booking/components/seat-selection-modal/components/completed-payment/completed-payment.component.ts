import { Component, OnInit } from '@angular/core';
import { QuickBookingService } from 'src/app/shared/quick-booking/service/quick-booking.service';
import { SeatService } from '../../service/seat.service';

@Component({
  selector: 'app-completed-payment',
  templateUrl: './completed-payment.component.html',
  styleUrls: ['./completed-payment.component.scss']
})
export class CompletedPaymentComponent implements OnInit {

  constructor(public bookingService: QuickBookingService, public seatService: SeatService) { }

  ngOnInit() {
  }

  reload() {
    window.location.reload();
  }
}
