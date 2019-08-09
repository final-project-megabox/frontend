import { Component, OnInit } from '@angular/core';
import { SeatService } from '../../service/seat.service';

@Component({
  selector: 'app-alret-modal',
  templateUrl: './alret-modal.component.html',
  styleUrls: ['./alret-modal.component.scss']
})
export class AlretModalComponent implements OnInit {

  constructor(public seatService: SeatService) { }

  ngOnInit() {
  }

}
