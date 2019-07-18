import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypage-booking',
  templateUrl: './mypage-booking.component.html',
  styleUrls: ['./mypage-booking.component.scss']
})
export class MypageBookingComponent implements OnInit {
  navState = '예매 내역';

  constructor() { }

  ngOnInit() {
  }

  tabActive(event) {

    const select = event;

    if (select == this.navState) { return; }

    if (select == '예매 내역') {
      this.navState = '예매 내역';
    }

    if (select == '지난 내역') {
      this.navState = '지난 내역';
    }

    if (select == '취소 내역') {
      this.navState = '취소 내역';
    }

  }



}
