import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/service/auth.service';
import { RootService } from 'src/app/core/service/root.service';
import { PreferTheatersService } from '../prefer-theaters/services/prefer-theaters.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

interface UserInfo {
  birthDate: string,
  email: string,
  getPreferList: [{}],
  name: string,
  last_login: string,
  phoneNumber: string,
  preferTheater: [{}],
}

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  userEmail;
  userRegion;
  userAccessTime;
  userLastLogin;

  constructor(public authService: AuthService, public rootService: RootService, public http: HttpClient, public preferTheaterService: PreferTheatersService) { }

  ngOnInit() {
    this.getUserInfo();

    const token = `JWT ${localStorage.getItem('token')}`;
    const headers = new HttpHeaders().set('Authorization', token);

    this.http.get('http://megabox.hellocoding.shop//accounts/bookingHistory/', { headers })
      .subscribe(item => console.log(item))
    
    // this.preferTheaterService.preferTheaterUpDated.subscribe(test=> this.userRegion = test.map(theater => theater != '영화관선택' ? theater : ''));
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

    this.http.get<UserInfo>('http://megabox.hellocoding.shop//accounts/showMyInfo/', { headers })
      .subscribe(info => {
        this.userEmail = info.email;
        this.userRegion = info.preferTheater.filter(prefer => prefer['theater'] !== '영화관선택');
        this.userLastLogin = info.last_login;
      },
      errors => {
        
      });
  }
}
