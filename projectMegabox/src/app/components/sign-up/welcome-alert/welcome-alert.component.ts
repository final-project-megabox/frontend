import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RootService } from 'src/app/core/service/root.service';

@Component({
  selector: 'welcome-alert',
  templateUrl: './welcome-alert.component.html',
  styleUrls: ['./welcome-alert.component.scss']
})
export class WelcomeAlertComponent implements OnInit {

  constructor(public root: RootService) { }

  ngOnInit() {}
}
