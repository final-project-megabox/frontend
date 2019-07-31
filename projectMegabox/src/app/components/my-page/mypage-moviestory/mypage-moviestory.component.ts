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
    { email: 'immsee098@gmail.com', name: '윤해서', password: 'qwerty123', birthDate: '1995-04-22', phoneNumber: 26057621, preferTheater: '상봉, 코엑스', watchedMovie: '라이온킹', wishMovie: '뭐하지'},
    { email: 'immsee098@gmail.com', name: '윤해서', password: 'qwerty123', birthDate: '1995-04-22', phoneNumber: 26057621, preferTheater: '상봉, 코엑스', watchedMovie: '라이온킹', wishMovie: '뭐하지'},
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
