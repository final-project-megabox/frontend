import { Component, OnInit } from '@angular/core';
import { RootService } from 'src/app/core/service/root.service';
import { AuthService } from 'src/app/core/service/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public rootService: RootService, public authService: AuthService) { }

  ngOnInit() {
  }

  getUserName() {
    return localStorage.getItem('userName');
  }
}
