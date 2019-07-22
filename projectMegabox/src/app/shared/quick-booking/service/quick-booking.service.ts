import { HttpClient } from '@angular/common/http';
import { Days } from '../models/days.interface';
import { environment } from 'src/environments/environment';

export class QuickBookingService {
  celendarModalState = false;
  movieModalState = false;
  theaterModalState = false;

  test = true;
  alertModalState = false;
  
  
  newDate = new Date();
  year = this.newDate.getFullYear();
  _month = this.newDate.getMonth();
  today = `${this.newDate.getFullYear()}${this.newDate.getMonth()}${this.newDate.getDate()}`;

  activeToday = this.today;
  dayTable: HTMLUListElement;
  dayTableLocation = 0;
  timeTableLocation = 0;
  afterToday = [...this.calThisMonth(), ...this.monthAfterToday()];
  
  weeks = [];
  

  thisDays: Days[];
  
  constructor(private http: HttpClient) { }
  
  ngOnInit() {}

  getAll() {
    return this.http.get(environment.appUrl);
  }


  // setter month
  set month(value: number) {
    this._month = value;
    this.calThisMonth();
    this.splitDay();
  }

  // getter month
  get month() {
    return this._month;
  }

  // 이번달 생성
  calThisMonth() {
    const lastDay = new Date(this.year, this.month + 1, 0).getDate();

    let thisDays: Days[] = [];

    for (let i = 1; i <= lastDay; i++) {
      const CurrentDate = new Date(this.year, this.month, i);
      const objDate = { 
        day: CurrentDate.getDate(), 
        date: this.dateTranslator(CurrentDate.getDay()), 
        fullDate: `${CurrentDate.getFullYear()}${CurrentDate.getMonth()}${CurrentDate.getDate()}`
      } 

      thisDays = thisDays.length ? [...thisDays, objDate] : thisDays = [objDate];
    }

    this.thisDays = thisDays;

    return this.findToday(thisDays);
  }

  // 오늘부터 한달 생성
  monthAfterToday() {
    let nextMonth = [];

    for (let i = 1; i <= 30 - this.newDate.getDate(); i++) {
      const CurrentDate = new Date(this.year, this.month + 1, i);
      const objDate = { 
        day: `${CurrentDate.getMonth()+1}/${CurrentDate.getDate()}`, 
        date: this.dateTranslator(CurrentDate.getDay()),
        fullDate: `${CurrentDate.getFullYear()}${CurrentDate.getMonth()}${CurrentDate.getDate()}`
      } 

      nextMonth = nextMonth.length ? [...nextMonth, objDate] : nextMonth = [objDate];
    }

    return nextMonth;
  }

  // 1주일단위로 자르기
  splitDay() {
    this.weeks = [];
    let firstSat = this.thisDays.findIndex(item => item.date === '토');
    let stopIdx = 0;

    for (let i = 0; i < 6; i++) {
      this.weeks = this.weeks.length ? [...this.weeks, []] : [[]];

      if (i > 0) stopIdx += 1;

      this.thisDays.some((item, idx) => {
        if (stopIdx <= firstSat && idx >= stopIdx) {
          this.weeks[i] = [...this.weeks[i], item];

          stopIdx = idx;

          return stopIdx === firstSat;
        }
      })

      firstSat += 7;
    }

    this.weeks = this.weeks.filter(item => item.length)
    
    if (this.weeks[0].length === 7) return;

    // 첫째주 빈칸 채우기
    const empty = 7 - this.weeks[0].length;

    for (let i = 0; i < empty; i++) {
      this.weeks[0] = [{}, ...this.weeks[0]]
    }
  }

  // 숫자인 요일 문자로 변환
  dateTranslator(number: number): string {
    if (number === 0) return "일";
    if (number === 1) return "월";
    if (number === 2) return "화";
    if (number === 3) return "수";
    if (number === 4) return "목";
    if (number === 5) return "금";
    if (number === 6) return "토";
  }

  findToday(days: any) {
    const today = days.findIndex(day => day.fullDate === this.today);

    return days.slice(today);
  }

  // month 증가
  increaseMonth(): void {
    if (this.month > 11) {
      this.month = 0;
      this.year = this.year + 1;
    }

    this.month = this.month + 1;
  }

  //month 감소
  decreaseMonth(): void {
    if (this.month < 0) {
      this.month = 11;
      this.year = this.year - 1;
    }
    
    this.month = this.month - 1;
  }
}
