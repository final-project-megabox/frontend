import { Component, OnInit } from '@angular/core';
import { SeatService } from './components/service/seat.service';

@Component({
  selector: 'app-seat-selection-modal',
  templateUrl: './seat-selection-modal.component.html',
  styleUrls: ['./seat-selection-modal.component.scss']
})
export class SeatSelectionModalComponent implements OnInit {

  constructor(private seatService: SeatService) { }

  ngOnInit() {
  }

  

}
