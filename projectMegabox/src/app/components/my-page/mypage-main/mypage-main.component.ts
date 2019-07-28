import { Component, OnInit } from '@angular/core';


interface Userinfos {
  email: string;
  name: string;
  password: string;
  birthDate: string;
  phoneNumber: number;
  preferTheater: string;
  watchedMovie: string;
  wishMovie: string;
}

@Component({
  selector: 'app-mypage-main',
  templateUrl: './mypage-main.component.html',
  styleUrls: ['./mypage-main.component.scss']
})
export class MypageMainComponent implements OnInit {

  navState = '공지사항';

  numBack: number;


  userinfos: Userinfos[] = [
    // tslint:disable-next-line: max-line-length
    { email: 'immsee098@gmail.com', name: '윤해서', password: 'qwerty123', birthDate: '1995-04-22', phoneNumber: 26057621, preferTheater: '상봉, 코엑스', watchedMovie: '라이온킹킹킹키이킹', wishMovie: '뭐하지'},
  ];


  constructor() { }

  ngOnInit() {
    const info = [...this.userinfos]
    const splitNum = (info[0].phoneNumber + '').slice(4, 8);
    const stringTonum = parseInt(splitNum);
    this.numBack = stringTonum;
  }

  tabChange(text) {
    if (text == this.navState) { return; }
    this.navState = text;
    console.log(this.navState);
  }

  // phoneNumcut() {
  //   const info = [...this.userinfos]
  //   const splitNum = (info[0].phoneNumber + '').slice(4, 8);
  //   const stringTonum = parseInt(splitNum);
  //   this.numBack = stringTonum;
  // }


}
