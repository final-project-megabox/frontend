import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/service/auth.service';
import { RootService } from 'src/app/core/service/root.service';
import { PreferTheatersService } from '../prefer-theaters/services/prefer-theaters.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

interface UserInfoo {
  birthDate: string,
  email: string,
  getPreferList: [{}],
  name: string,
  last_login: string,
  phoneNumber: string,
  preferTheater: [],
  mileage: number
}

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  userRegion=[];
  userInfo:UserInfoo = {birthDate: '', email: '', getPreferList: [{}], name: '', last_login: '', phoneNumber: '', preferTheater:[], mileage: 0 };

  constructor(public authService: AuthService, public rootService: RootService, public http: HttpClient, public preferTheaterService: PreferTheatersService) { }

  ngOnInit() {
    this.preferTheaterService.preferTheaterUpDated.subscribe(detect=> {
      this.userRegion = detect.filter(theater => theater['theater'] !== '영화관선택');
    });

    this.getUserInfo();
  }
 
  logout() {
    if(!localStorage.getItem('id')) {
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      this.authService.loginState = false;
      window.location.reload();
    } else {
      localStorage.removeItem('token');
      this.authService.loginState = false;
      window.location.reload();
    }
  }

  getUserInfo() {
    const TOKEN = `JWT ${localStorage.getItem('token')}`;
    const headers = new HttpHeaders().set('Authorization', TOKEN);

    this.http.get<UserInfoo>('http://megabox.hellocoding.shop//accounts/showMyInfo/', { headers })
      .subscribe(info => {
        this.userInfo = info
        this.userRegion = info.preferTheater.filter(prefer => prefer['theater'] !== '영화관선택');
      },
      errors => {
        
      });
  }
}
