import { HttpClient } from '@angular/common/http';
import { Days } from '../models/days.interface';

export class QuickBookingService {
  celendarModalState = false;
  movieModalState = false;
  theaterModalState = false;
  
  
  date = new Date();
  year = this.date.getFullYear();
  _month = this.date.getMonth();
  today = `${this.date.getFullYear()}${this.date.getMonth()}${this.date.getDate()}`;
  activeToday = this.today;
  nextMonth: Days[];
  
  thisDays: Days[];
  
  weeks = [[], [], [], [], [], []];
  
  constructor(private http: HttpClient) { }
  
  ngOnInit() {}


  // this.month = a
  set month(value: number) {

    this._month = value;
    this.calDay();
    this.splitDay();
  }

  // a = this.month
  get month() {
    return this._month;
  }

  calDay() {
    this.weeks = [[], [], [], [], [], []];

    let lastDay = new Date(this.year, this.month + 1, 0).getDate();

    let thisDays = [];

    for (let i = 1; i <= 30 - this.date.getDate(); i++) {
      let thisDate = new Date(this.year, this.month + 1, i);

      this.nextMonth = thisDays.length ? [...this.nextMonth, { day: thisDate.getDate(), date: this.translate(thisDate.getDay()), fullDay: `${thisDate.getFullYear()}${thisDate.getMonth()}${thisDate.getDate()}` }] : thisDays = [{ day: thisDate.getDate(), date: this.translate(thisDate.getDay()), fullDay: `${thisDate.getFullYear()}${thisDate.getMonth()}${thisDate.getDate()}` }];
    }

    for (let i = 1; i <= lastDay; i++) {
      let thisDate = new Date(this.year, this.month, i);

      thisDays = thisDays.length ? [...thisDays, { day: thisDate.getDate(), date: this.translate(thisDate.getDay()), fullDay: `${thisDate.getFullYear()}${thisDate.getMonth()}${thisDate.getDate()}` }] : thisDays = [{ day: thisDate.getDate(), date: this.translate(thisDate.getDay()), fullDay: `${thisDate.getFullYear()}${thisDate.getMonth()}${thisDate.getDate()}` }];
    }

    this.thisDays = thisDays;

    return this.findToday(thisDays);
  }

  splitDay() {
    let firstSat = this.thisDays.findIndex(item => item.date === '토');
    let stopIdx = 0;

    for (let i = 0; i <= 5; i++) {
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

    const empty = 7 - this.weeks[0].length;

    for (let i = 0; i < empty; i++) {
      this.weeks[0] = [{}, ...this.weeks[0]]
    }

  }


  translate(number: number) {
    let date: string;

    if (number === 0) date = "일";
    if (number === 1) date = "월";
    if (number === 2) date = "화";
    if (number === 3) date = "수";
    if (number === 4) date = "목";
    if (number === 5) date = "금";
    if (number === 6) date = "토";

    return date;
  }




  findToday(days: any) {
    const today = days.findIndex(day => day.fullDay === this.today);

    return days.slice(today);
  }
}
