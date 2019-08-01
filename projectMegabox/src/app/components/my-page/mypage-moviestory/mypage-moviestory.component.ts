import { HttpClient } from '@angular/common/http';
import { Userinfo } from './../../../userinfo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypage-moviestory',
  templateUrl: './mypage-moviestory.component.html',
  styleUrls: ['./mypage-moviestory.component.scss']
})
export class MypageMoviestoryComponent implements OnInit {

  userinfos: Userinfo[] = [
    // tslint:disable-next-line: max-line-length
    { email: 'immsee098@gmail.com', name: '윤해서', phone_number: '010-2605-7621', birth_date: '1995-04-22' },
  ];



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
