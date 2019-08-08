import { Component, OnInit } from '@angular/core';
import { SeatService } from '../../service/seat.service';
import { QuickBookingService } from 'src/app/shared/quick-booking/service/quick-booking.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-thirty-six',
  templateUrl: './thirty-six.component.html',
  styleUrls: ['./thirty-six.component.scss']
})
export class ThirtySixComponent implements OnInit {
  allSeat = [];

  constructor(public seatService: SeatService, public bookingService: QuickBookingService) { }

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
            class: j === 0 ? 'title' : this.disableSeat(`${currentAsc}${j}`) === 'disabled' ? 'disabled' : 'value',
            postSeat: j === 0 || this.disableSeat(`${currentAsc}${j}`) === 'disabled' ? 'disabled' : `${currentAsc}${j}`,
            seatNumber: j === 0 ? String.fromCharCode(ascii) : j 
          }
        ];
      }
      ascii += 1;
    }
  }

  disableSeat(seatNumber: string) {
    let className: string;

    if (this.bookingService.selectedMovie.seat_number === null) return;

    this.bookingService.selectedMovie.seat_number.forEach(item => {
      if (item === seatNumber) className = 'disabled';
    })

    return className;
  }

  addSeat(seat: string) {
    let state = true;

    if (!this.seatService.normal && !this.seatService.youth && !this.seatService.favor) {
      return this.seatService.seatAlertState = true;
    }

    this.seatService.selectSeat.forEach(item => {
      if (item === seat) {
        state = false
        return this.seatService.selectSeat = this.seatService.selectSeat.filter(Seat => Seat !== seat)
      }
    })

    if (this.seatService.totalPeople < this.seatService.selectSeat.length + 1) {
      return this.seatService.completeAlertState = true
    }
    
    if (state) {
      this.seatService.selectSeat = [...this.seatService.selectSeat, seat];
    }
  }
}
