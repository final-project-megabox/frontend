import { Component, OnInit } from '@angular/core';

interface Days {
  date: string;
  day: number;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  date = new Date();
  year = this.date.getFullYear();
  _month = this.date.getMonth();
  today = `${this.date.getFullYear()}${this.date.getMonth()}${this.date.getDate()}`;
  afterToday = [];

  thisDays: Days[];

  weeks = [[], [], [], [], [], []];
  constructor() { }


  ngOnInit() {
    this.calDay();
    this.splitDay();
  }

  // this.month = a
  set month(value: number) {
    this.weeks = [[], [], [], [], [], []];
    this._month = value;
    this.calDay();
    this.splitDay();
  }

  // a = this.month
  get month() {
    return this._month;
  }

  calDay() {
    let lastDay = new Date(this.year, this.month + 1, 0).getDate();

    let thisDays = [];

    for (let i = 1; i <= lastDay; i++) {
      let thisDate = new Date(this.year, this.month, i);

      thisDays = thisDays.length ? [...thisDays, { day: thisDate.getDate(), date: this.translate(thisDate.getDay()), fullDay: `${thisDate.getFullYear()}${thisDate.getMonth()}${thisDate.getDate()}` }] : thisDays = [{ day: thisDate.getDate(), date: this.translate(thisDate.getDay()), fullDay: `${thisDate.getFullYear()}${thisDate.getMonth()}${thisDate.getDate()}` }];
    }

    this.thisDays = thisDays;

    this.findToday(thisDays);
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


  prev() {
    this.month -= 1;
  }

  next() {
    this.month += 1;
  }

  findToday(days: any) {
    const today = days.findIndex(day => day.fullDay === this.today);

    this.afterToday = days.slice(today);
  }

}
