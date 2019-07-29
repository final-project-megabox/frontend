import { Component, OnInit } from '@angular/core';
import { RootService } from '../../../../core/service/root.service';
import { CalendarService } from '../../service/calendar.service';
import { Days } from '../../models/days.interface';
import { QuickBookingService } from '../../service/quick-booking.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})

export class MainViewComponent implements OnInit {
  timeTable = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  timeTableX = 0;
  currentTime: number;
  afterToday: Days[];
  addPlus = [];
  

  constructor(
    private quickBookingService: QuickBookingService,
    private rootService: RootService,
    private calenderService: CalendarService,
    private http: HttpClient
  ) {}
  

  ngOnInit() {
    this.afterToday = [...this.findToday(), ...this.monthAfterToday()];
    this.currentTime = new Date().getHours(); 
    this.timeTableX = (this.currentTime - 4) * -44 < -616 ? -616 : (this.currentTime - 4) * -44;
  }



  // 오늘부터 한달 생성
  monthAfterToday() {
    let nextMonth: Days[] = [];

    for (let i = 1; i <= 30 - (30 - this.calenderService.day); i++) {
      const CurrentDate = new Date(this.calenderService.year, this.calenderService.month + 1, i);
      const month = CurrentDate.getMonth() + 1 + '';
      const date = CurrentDate.getDate() + '';

      const objDate = { 
        day: `${CurrentDate.getMonth()+1}/${CurrentDate.getDate()}`, 
        date: this.calenderService.dateTranslator(CurrentDate.getDay()),
        fullDate: `${CurrentDate.getFullYear()}${CurrentDate.getMonth()}${CurrentDate.getDate()}`,
        postDate: `${CurrentDate.getFullYear()}-${month.length === 1 ? '0'+ month : month}-${date.length === 1 ? '0'+ date : date}`
      } 

      nextMonth = nextMonth.length ? [...nextMonth, objDate] : nextMonth = [objDate];
    }

    return nextMonth;
  }

  // 오늘 후부터 생성
  findToday() {
    const days:Days[] = this.calenderService.thisDays;

    const today = days.findIndex(day => day.fullDate === this.calenderService.today);

    return days.slice(today);
  }


  timeCarouselButton(event: HTMLButtonElement) {
    if (event.className ===  "prev-time" && this.timeTableX < 0) {
      this.timeTableX += 44;
    };
    
    if (event.className ===  "next-time" && this.timeTableX > -616) {
      this.timeTableX -= 44;
    };
  }

  dayCarouselButton(event: HTMLButtonElement) {
    if (event.className ===  "prev-day" && this.calenderService.dayTableX< 0) {
      this.calenderService.dayTableX += 68;
    };
    
    if (event.className ===  "next-day" && this.calenderService.dayTableX > -(this.afterToday.length - 5) * 68) {
      this.calenderService.dayTableX -= 68;
    };
  }

  checkDayActive(day: string) {
    this.calenderService.activeToday = day;
    
    if (this.calenderService.today === day) return;

    const idx = this.afterToday.findIndex(item => item.fullDate === day);
    this.calenderService.dayTableX = idx * -68;
  }

  checkTimeActive(time: number) {
    if (time !== this.currentTime) return;

    return time === this.currentTime;
  }

  // 선택된 영화 취소버튼
  removeMovie(select) {
    const selectMovie = this.quickBookingService.selectMovie;
    const selectTitle = this.quickBookingService.selectTitle;
    
    this.quickBookingService.selectMovie = selectMovie.filter(movie => movie.movie_id !== select.movie_id);
    this.quickBookingService.selectTitle = selectTitle.filter(title => title !== select.title);
  }

  createAgeIcon(age: string) {
    if (age === "전체 관람") return "age-all hidden-text";
    if (age === "12세 관람가") return "age-12 hidden-text";
    if (age === "15세 관람가") return "age-15 hidden-text";
    if (age === "청소년 관람불가") return "age-adult hidden-text";
  }

  // 상영관 버튼
  theaterSelect() {
    
  }
}
