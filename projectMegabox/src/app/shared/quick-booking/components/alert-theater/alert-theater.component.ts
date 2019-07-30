import { Component, OnInit } from '@angular/core';
import { QuickBookingService } from '../../service/quick-booking.service';

@Component({
  selector: 'app-alert-theater',
  templateUrl: './alert-theater.component.html',
  styleUrls: ['./alert-theater.component.scss']
})
export class AlertTheaterComponent implements OnInit {

  constructor(private bookingService: QuickBookingService) { }

  ngOnInit() {
  }

}
