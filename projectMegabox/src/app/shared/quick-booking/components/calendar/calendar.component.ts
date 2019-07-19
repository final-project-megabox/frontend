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
    this.quickBookingService.calThisMonth();
    this.quickBookingService.splitDay();
  }
  
  activeToday(day: string) {
    this.quickBookingService.activeToday = day !== undefined ? day : null;
  }

  checkDayActive(day: string, elem?: HTMLUListElement) {
    this.quickBookingService.activeToday = day;
    
    const idx = this.quickBookingService.afterToday.findIndex(item => item.fullDate === day);

    if (idx < 0) return;

    this.quickBookingService.dayTableLocation = idx * -68;

    this.quickBookingService.dayTable.style.transform = `translateX(${this.quickBookingService.dayTableLocation}px)`;
  }

  checkBeforeToday(day: string) {
    return +(day + '').slice(4).slice(0, 1) <= +this.quickBookingService.today.slice(4).slice(0,1) && +(day + '').slice(4) < +this.quickBookingService.today.slice(4);
  }
}
