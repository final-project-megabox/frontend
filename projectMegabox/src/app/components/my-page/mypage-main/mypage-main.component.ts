import { HttpClient } from '@angular/common/http';
import { Userinfo } from './../../../userinfo';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mypage-main',
  templateUrl: './mypage-main.component.html',
  styleUrls: ['./mypage-main.component.scss']
})
export class MypageMainComponent implements OnInit {

  navState = '공지사항';

  numBack: number;



  userinfos: Userinfo[] = [
    // tslint:disable-next-line: max-line-length
    { email: 'immsee098@gmail.com', name: '윤해서', phone_number: '010-2605-7621', birth_date: '1995-04-22' }
  ];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    const info = [...this.userinfos]
    const splitNum = (info[0].phone_number + '').slice(4, 8);
    const stringTonum = parseInt(splitNum);
    this.numBack = stringTonum;
  }

  // getConfig() {
  //   return this.http.get('')
  // }

  tabChange(text) {
    if (text == this.navState) { return; }
    this.navState = text;
    console.log(this.navState);
  }


}
