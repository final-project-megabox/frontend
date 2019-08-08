import { Component, OnInit } from '@angular/core';
import { RootService } from 'src/app/core/service/root.service';

@Component({
  selector: 'duplicate-alert',
  templateUrl: './duplicate-alert.component.html',
  styleUrls: ['./duplicate-alert.component.scss']
})
export class DuplicateAlertComponent implements OnInit {

  constructor(public root: RootService) { }

  ngOnInit() {
  }

}
