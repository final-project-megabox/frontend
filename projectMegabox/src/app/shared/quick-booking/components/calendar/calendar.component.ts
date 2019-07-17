import { Component, OnInit } from '@angular/core';
import { QuickBookingService } from '../../service/quick-booking.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  constructor(private quickBookingService: QuickBookingService) {}

  ngOnInit() {
    this.quickBookingService.calDay();
    this.quickBookingService.splitDay();
  }

  prev() {
    this.quickBookingService.month -= 1;
  }

  next() {
    this.quickBookingService.month += 1;
  }

  activeToday(day: string) {
    this.quickBookingService.activeToday = day !== undefined ? day : null;
  }
}
