import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypage-main',
  templateUrl: './mypage-main.component.html',
  styleUrls: ['./mypage-main.component.scss']
})
export class MypageMainComponent implements OnInit {

  navState = '공지사항';

  constructor() { }

  ngOnInit() {
  }

  tabChange(text) {
    if (text == this.navState) { return; }
    this.navState = text;
    console.log(this.navState);
  }

}
