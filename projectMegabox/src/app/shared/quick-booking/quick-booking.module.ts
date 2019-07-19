import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainViewComponent } from './components/main-view/main-view.component';
import { MovieModalComponent } from './components/movie-modal/movie-modal.component';
import { TheaterModalComponent } from './components/theater-modal/theater-modal.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';

import { QuickBookingService } from './service/quick-booking.service';

import { MoviesSortPipe } from './pipes/movies-sort.pipe';
import { RegionsFilterPipe } from './pipes/regions-filter.pipe';

import { PosterBackgroundDirective } from './directives/poster-background.directive';

@NgModule({
  declarations: [
    MainViewComponent,
    MovieModalComponent,
    CalendarComponent,
    TheaterModalComponent,
    AlertModalComponent,
    
    MoviesSortPipe,
    RegionsFilterPipe,
    PosterBackgroundDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MainViewComponent
  ],
  providers: [
    QuickBookingService
  ],
})
export class QuickBookingModule { }
