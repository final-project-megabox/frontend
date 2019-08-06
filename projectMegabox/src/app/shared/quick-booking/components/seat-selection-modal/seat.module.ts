import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatService } from './components/service/seat.service';

import { SeatSelectionModalComponent } from './seat-selection-modal.component';
import { SeatOneHundredThirtyComponent } from './components/seat-one-hundred-thirty/seat-one-hundred-thirty.component';
import { SeatOneHundredFortyComponent } from './components/seat-one-hundred-forty/seat-one-hundred-forty.component';

@NgModule({
  declarations: [
    SeatSelectionModalComponent,
    SeatOneHundredThirtyComponent,
    SeatOneHundredFortyComponent
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
