import { Component, OnInit } from '@angular/core';
import { SeatService } from '../service/seat.service';

@Component({
  selector: 'app-seat-one-hundred-forty',
  templateUrl: './seat-one-hundred-forty.component.html',
  styleUrls: ['./seat-one-hundred-forty.component.scss']
})
export class SeatOneHundredFortyComponent implements OnInit {
  allSeat = [];
  constructor(private seatService: SeatService) { }

  ngOnInit() {
    this.createSeat();
  }

  createSeat() {
    let ascii = 65;
    let currentAsc: string;

    for(let i = 0; i < 9; i++) {
      this.allSeat = [...this.allSeat, []];

      if (i < 2) {
        for(let j = 0; j < 15; j++) {
          if (j === 0) currentAsc = String.fromCharCode(ascii);

          this.allSeat[i] = [ ...this.allSeat[i], 
            { 
              class: j === 0 ? 'title' : 'value',
              postSeat: j === 0 ? 0 : `${currentAsc}${j}`,
              seatNumber: j === 0 ? String.fromCharCode(ascii) : j 
            }
          ];
        }
        ascii += 1;
      } else {
        for(let j = 0; j < 17; j++) {
          if (j === 0) currentAsc = String.fromCharCode(ascii);

          this.allSeat[i] = [ ...this.allSeat[i], 
            { 
              class: j === 0 ? 'title' : 'value',
              postSeat: j === 0 ? 0 : `${currentAsc}${j}`,
              seatNumber: j === 0 ? String.fromCharCode(ascii) : j 
            }
          ];
        }
        ascii += 1;
      }
    }
  }

  click(value: string) {
    console.log(value)
    console.log(this.seatService.normal, this.seatService.youth, this.seatService.favor);
  }
}
