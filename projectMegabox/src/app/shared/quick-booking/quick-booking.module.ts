import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { SharedModule } from '../shared.module';

import { MainViewComponent } from './components/main-view/main-view.component';
import { MovieModalComponent } from './components/movie-modal/movie-modal.component';
import { TheaterModalComponent } from './components/theater-modal/theater-modal.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';

import { MoviesSortPipe } from './pipes/movies-sort.pipe';
import { RegionsFilterPipe } from './pipes/regions-filter.pipe';

import { PosterBackgroundDirective } from './directives/poster-background.directive';
import { CarouselDirective } from './directives/carousel.directive';
import { CalendarService } from './service/calendar.service';
import { QuickBookingService } from './service/quick-booking.service';
import { PreferTheatersComponent } from '../prefer-theaters/prefer-theaters.component';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@NgModule({
  declarations: [
    MainViewComponent,
    MovieModalComponent,
    CalendarComponent,
    TheaterModalComponent,
    AlertModalComponent,
    
    MoviesSortPipe,
    RegionsFilterPipe,
    PosterBackgroundDirective,
    CarouselDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    MainViewComponent,
    PreferTheatersComponent,
    LoginModalComponent
  ],
  providers: [
    QuickBookingService,
    CalendarService
  ],
})
export class QuickBookingModule { }
