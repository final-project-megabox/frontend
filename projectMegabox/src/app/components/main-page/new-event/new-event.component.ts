import { Component, OnInit } from '@angular/core';

import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2000, noPause: true, showIndicators: true } }
  ]
})
export class NewEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
