import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypage-moviestory',
  templateUrl: './mypage-moviestory.component.html',
  styleUrls: ['./mypage-moviestory.component.scss']
})
export class MypageMoviestoryComponent implements OnInit {


  mymovieTab = '보고싶어';

  constructor() { }

  ngOnInit() {
  }

  tabActive(event) {
    console.log(event);
    if (event == this.mymovieTab) { return; }

    if (event == '보고싶어') {
      this.mymovieTab = '보고싶어';
    }

    if (event == '본영화') {
      this.mymovieTab = '본영화';
    }
  }

}
