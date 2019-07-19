import { Component, OnInit } from '@angular/core';
import { QuickBookingService } from '../../service/quick-booking.service';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  constructor(private bookingService: QuickBookingService) { }

  ngOnInit() {}

}
