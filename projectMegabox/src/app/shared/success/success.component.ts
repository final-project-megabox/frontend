import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { RootService } from 'src/app/core/service/root.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor(private authService: AuthService, private rootService: RootService) { }

  ngOnInit() {
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
}
