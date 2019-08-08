import { Component, OnInit } from '@angular/core';
import { RootService } from 'src/app/core/service/root.service';

@Component({
  selector: 'app-required-login',
  templateUrl: './required-login.component.html',
  styleUrls: ['./required-login.component.scss']
})
export class RequiredLoginComponent implements OnInit {
  
  constructor(public rootService: RootService) { }

  ngOnInit() {
  }


}
