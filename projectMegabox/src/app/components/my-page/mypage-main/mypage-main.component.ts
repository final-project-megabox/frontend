<<<<<<< HEAD
import { AuthService } from 'src/app/core/service/auth.service';
import { Token } from './../../../core/models/token.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Userinfo } from './../../../userinfo';
=======
import { HttpClient } from '@angular/common/http';
>>>>>>> rmorigin/develop
import { Component, OnInit } from '@angular/core';
import { Userinfo } from '../userinfo';



@Component({
  selector: 'app-mypage-main',
  templateUrl: './mypage-main.component.html',
  styleUrls: ['./mypage-main.component.scss']
})
export class MypageMainComponent implements OnInit {
  TOKEN_NAME = 'token';
  loginState = false;

  navState = '공지사항';
  numBack: number;
  phoneNum: string;
  dataList = [];


  userinfos: Userinfo[] = [
    // tslint:disable-next-line: max-line-length
    //{ email: 'immsee098@gmail.com', name: '윤해서', birthDate: '1995-04-22', phoneNumber: '010-2605-7621', PreferTheater:'상봉', getPreferList: '어쩌고'  }
  ];



  constructor(private http: HttpClient, private auth: AuthService) {
  }

  ngOnInit() {
    this.getConfig();
    // const info = [...this.userinfos];
    // const splitNum = (info[0].phoneNumber + '').slice(4, 8);
    // console.log(splitNum)
    // const stringTonum = parseInt(splitNum);
    // this.numBack = stringTonum;

  }

  getConfig() {
    const token = `JWT ${localStorage.getItem('token')}`;

    const headers = new HttpHeaders().set('Authorization', token);

    const aa = this.http.get<Userinfo>('http://megabox.hellocoding.shop//accounts/showMyInfo/', {headers}).subscribe(
      datas => this.userinfos = [datas]
    );
    // this.phoneNumMaker();
    console.log(this.userinfos);
   }

  // phoneNumMaker() {
  //   const info = [...this.userinfos];
  //   this.phoneNum = '010-****-' + info[0].phoneNumber.slice(9, 13);
  //   // console.log(info[0].PreferTheater[1]);

  //}


  tabChange(text) {
    if (text == this.navState) { return; }
    this.navState = text;
    console.log(this.navState);
  }


}
