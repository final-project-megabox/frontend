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

  regionChoiceOne(selected) {
    this.preferTheaterService.preferOneState = selected;
  }
  
  regionChoiceTwo(selected) {
    this.preferTheaterService.preferTwoState = selected;
  }
  
  regionChoiceThree(selected) {
    this.preferTheaterService.preferThreeState = selected;
  }

  theaterChoice(theater) {
  }

}
