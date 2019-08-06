import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatService } from './components/service/seat.service';

import { SeatSelectionModalComponent } from './seat-selection-modal.component';
import { SeatOneHundredThirtyComponent } from './components/seat-one-hundred-thirty/seat-one-hundred-thirty.component';

@NgModule({
  declarations: [
    SeatSelectionModalComponent,
    SeatOneHundredThirtyComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SeatSelectionModalComponent,
  ],
  providers: [
    SeatService
  ],
})
export class SeatModule { }
