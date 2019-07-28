import { Component, OnInit } from '@angular/core';

import { PreferTheatersService } from './prefer-theaters.service';

@Component({
  selector: 'prefer-theaters',
  templateUrl: './prefer-theaters.component.html',
  styleUrls: ['./prefer-theaters.component.scss']
})
export class PreferTheatersComponent implements OnInit {

  constructor(private preferTheaterService: PreferTheatersService) { }

  ngOnInit() {
  }

  regionChoice(selected){
    console.log(selected);
  }

}
