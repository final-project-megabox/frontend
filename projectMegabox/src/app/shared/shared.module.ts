import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { QuickBookingComponent } from './quick-booking/quick-booking.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    QuickBookingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    QuickBookingComponent
  ]
})
export class SharedModule { }
