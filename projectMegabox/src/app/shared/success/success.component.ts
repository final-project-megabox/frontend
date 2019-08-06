import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { RootService } from 'src/app/core/service/root.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Userinfo } from 'src/app/components/my-page/userinfo';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  userInfo: Userinfo;
  userRegion;

  constructor(private authService: AuthService, private rootService: RootService, private http: HttpClient) { }

  ngOnInit() {
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

    this.http.get<Userinfo>('http://megabox.hellocoding.shop//accounts/showMyInfo/', { headers })
      .subscribe(info => {
        this.userInfo = info
      },
      errors => {
        
      });
  }
}
