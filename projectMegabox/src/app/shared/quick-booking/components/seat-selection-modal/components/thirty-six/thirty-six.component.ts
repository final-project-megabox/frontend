import { Component, OnInit } from '@angular/core';
import { SeatService } from '../../service/seat.service';

@Component({
  selector: 'app-thirty-six',
  templateUrl: './thirty-six.component.html',
  styleUrls: ['./thirty-six.component.scss']
})
export class ThirtySixComponent implements OnInit {
  allSeat = [];
  constructor(public seatService: SeatService) { }

  ngOnInit() {
    this.createSeat();
  }

  createSeat() {
    let ascii = 65;
    let currentAsc: string;

    for(let i = 0; i < 4; i++) {
      this.allSeat = [...this.allSeat, []];

      for(let j = 0; j < 10; j++) {
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

  click(value: string) {
    console.log(value)
    console.log(this.seatService.normal, this.seatService.youth, this.seatService.favor);
  }
}
