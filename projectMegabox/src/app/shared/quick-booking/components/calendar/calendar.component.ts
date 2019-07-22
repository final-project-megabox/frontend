import { Component, OnInit } from '@angular/core';
import { QuickBookingService } from '../../service/quick-booking.service';
import { CalendarService } from '../../service/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  constructor(private quickBookingService: QuickBookingService, private calendarService: CalendarService){}
  
  ngOnInit() {
  }
  
  activeToday(day: string) {
    this.calendarService.activeToday = day !== undefined ? day : null;
  }

  checkBeforeToday(day: string) {
    return +(day + '').slice(4).slice(0, 1) <= +this.calendarService.today.slice(4).slice(0,1) && +(day + '').slice(4) < +this.calendarService.today.slice(4);
  }
}
