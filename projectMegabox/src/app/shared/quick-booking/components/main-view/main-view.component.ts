import { Component, OnInit } from '@angular/core';
import { QuickBookingService } from '../../service/quick-booking.service';
import { RootService } from '../../../../core/service/root.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})

export class MainViewComponent implements OnInit {
  timeTable = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  currentTime: number;
  
  today: string;
  

  constructor(
    private quickBookingService: QuickBookingService,
    private rootService: RootService
  ) {}
  
  ngOnInit() {
    this.currentTime = new Date().getHours();
    this.today = this.quickBookingService.today
  }


  nextTime(ulTime: HTMLUListElement) {
    if (this.quickBookingService.timeTableLocation === -616) return;

    this.quickBookingService.timeTableLocation -= 44;
    ulTime.style.transform = `translateX(${this.quickBookingService.timeTableLocation}px)`;
  }

  prevTime(ulTime: HTMLUListElement) {
    if (this.quickBookingService.timeTableLocation === 0) return;

    this.quickBookingService.timeTableLocation += 44;
    ulTime.style.transform = `translateX(${this.quickBookingService.timeTableLocation}px)`;
  }


  nextDay(ulTime: HTMLUListElement) {
    if (this.quickBookingService.dayTableLocation === -(this.quickBookingService.afterToday.length - 5) * 68) return;

    this.quickBookingService.dayTableLocation -= 68;
    ulTime.style.transform = `translateX(${this.quickBookingService.dayTableLocation}px)`;
  }

  prevDay(ulTime: HTMLUListElement) {
    if (this.quickBookingService.dayTableLocation === 0) return;

    this.quickBookingService.dayTableLocation += 68;
    ulTime.style.transform = `translateX(${this.quickBookingService.dayTableLocation}px)`;
  }

  checkDayActive(day: string, elem?: HTMLUListElement) {
    this.quickBookingService.activeToday = day;
    
    if (this.quickBookingService.today === day) return;

    const idx = this.quickBookingService.afterToday.findIndex(item => item.fullDate === day);
    this.quickBookingService.dayTableLocation = idx * -68;

    elem.style.transform = `translateX(${this.quickBookingService.dayTableLocation}px)`;
  }
}
