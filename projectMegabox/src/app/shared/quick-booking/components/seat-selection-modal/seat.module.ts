import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatService } from './service/seat.service';

import { SeatSelectionModalComponent } from './seat-selection-modal.component';
import { SeatOneHundredThirtyComponent } from './components/seat-one-hundred-thirty/seat-one-hundred-thirty.component';
import { SeatOneHundredFortyComponent } from './components/seat-one-hundred-forty/seat-one-hundred-forty.component';
import { ThirtySixComponent } from './components/thirty-six/thirty-six.component';

@NgModule({
  declarations: [
    SeatSelectionModalComponent,
    SeatOneHundredThirtyComponent,
    SeatOneHundredFortyComponent,
    ThirtySixComponent
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
