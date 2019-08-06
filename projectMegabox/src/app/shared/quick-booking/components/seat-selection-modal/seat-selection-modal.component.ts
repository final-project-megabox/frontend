import { Component, OnInit } from '@angular/core';
import { SeatService } from './service/seat.service';
import { QuickBookingService } from '../../service/quick-booking.service';

@Component({
  selector: 'app-seat-selection-modal',
  templateUrl: './seat-selection-modal.component.html',
  styleUrls: ['./seat-selection-modal.component.scss']
})
export class SeatSelectionModalComponent implements OnInit {

  constructor(private seatService: SeatService, private bookingService: QuickBookingService) { }

  ngOnInit() {
  }

  

}
