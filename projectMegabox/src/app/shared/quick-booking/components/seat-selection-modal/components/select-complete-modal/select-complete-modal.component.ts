import { Component, OnInit } from '@angular/core';
import { SeatService } from '../../service/seat.service';

@Component({
  selector: 'app-select-complete-modal',
  templateUrl: './select-complete-modal.component.html',
  styleUrls: ['./select-complete-modal.component.scss']
})
export class SelectCompleteModalComponent implements OnInit {

  constructor(public seatService: SeatService) { }

  ngOnInit() {
  }

}
