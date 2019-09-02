import { Days } from '../models/days.interface';

export class CalendarService {
  newDate = new Date();
  year = this.newDate.getFullYear();
  _month = this.newDate.getMonth();
  day = this.newDate.getDate();
  today = `${this.year}${this.month}${this.day}`;
  
  thisDays: Days[];  // 이번달 일자
  splitThisDays = [];  // 이번달 일자 일주일로 자르기
  afterToday: Days[];
  
  activeToday = this.today;  // 캘린더, 캐러셀 활성화 비교
  dayTableX = 0;    // 일자 캐러셀 X값
  
  constructor() {
    this.createThisDays();  // 캐러셀만들기
    this.splitDay();
  }
  
  // setter month
  set month(value: number) {
    this._month = value;
    this.createThisDays();
    this.splitDay();
  }

  // getter month
  get month() {
    return this._month;
  }

  // 이번달 생성
  createThisDays() {
    const lastDay = new Date(this.year, this.month + 1, 0).getDate();

    this.thisDays = [];

    for (let i = 1; i <= lastDay; i++) {
      const CurrentDate = new Date(this.year, this.month, i);
      const month = CurrentDate.getMonth() + 1 + '';
      const date = CurrentDate.getDate() + '';

      const objDate = { 
        day: CurrentDate.getDate() + '', 
        date: this.dateTranslator(CurrentDate.getDay()), 
        fullDate: `${CurrentDate.getFullYear()}${CurrentDate.getMonth()}${CurrentDate.getDate()}`,
        postDate: `${CurrentDate.getFullYear()}-${month.length === 1 ? '0'+ month : month}-${date.length === 1 ? '0'+ date : date}`
      } 

      this.thisDays = this.thisDays.length ? [...this.thisDays, objDate] : this.thisDays = [objDate];
    }
  }

  // 1주일단위로 자르기
  splitDay() {
    this.splitThisDays = [];
    let firstSat = this.thisDays.findIndex(item => item.date === '토');
    let stopIdx = 0;

    for (let i = 0; i < 6; i++) {
      this.splitThisDays = this.splitThisDays.length ? [...this.splitThisDays, []] : [[]];

      if (i > 0) stopIdx += 1;

      this.thisDays.some((item, idx) => {
        if (stopIdx <= firstSat && idx >= stopIdx) {
          this.splitThisDays[i] = [...this.splitThisDays[i], item];

          stopIdx = idx;

          return stopIdx === firstSat;
        }
      })

      firstSat += 7;
    }

    this.splitThisDays = this.splitThisDays.filter(item => item.length)

    if (this.splitThisDays[0].length === 7) return;

    // 첫째주 빈칸 채우기
    const empty = 7 - this.splitThisDays[0].length;

    for (let i = 0; i < empty; i++) {
      this.splitThisDays[0] = [{}, ...this.splitThisDays[0]]
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

  // 캐러셀과 캘린더의 연동.
  checkDayActive(day: string) {
    this.activeToday = day;
    
    const idx = this.afterToday.findIndex(item => item.fullDate === day);

    if (idx < 0) return;

    this.dayTableX = idx * -68;
  }
}
