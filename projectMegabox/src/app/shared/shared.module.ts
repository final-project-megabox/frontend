import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { QuickBookingComponent } from './quick-booking/quick-booking.component';
import { MainViewComponent } from './quick-booking/main-view/main-view.component';
import { MovieModalComponent } from './quick-booking/main-view/movie-modal/movie-modal.component';
import { CalendarComponent } from './quick-booking/main-view/calendar/calendar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    QuickBookingComponent,
    MainViewComponent,
    MovieModalComponent,
    CalendarComponent
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
