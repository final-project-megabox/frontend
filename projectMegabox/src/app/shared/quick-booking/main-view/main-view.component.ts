import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  movieModal: false;
  timeTable = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  currentTime: number;
  listLocation = 0;
  constructor() { }

  ngOnInit() {
    this.currentTime = new Date().getHours();
  }

  nextTime(ulTime: HTMLUListElement) {
    if (this.listLocation === -616) return;

    this.listLocation -= 44;
    ulTime.style.transform = `translateX(${this.listLocation}px)`;
  }

  prevTime(ulTime: HTMLUListElement) {
    if (this.listLocation === 0) return;

    this.listLocation += 44;
    ulTime.style.transform = `translateX(${this.listLocation}px)`;
  }
}
