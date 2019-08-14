import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { PreferTheatersComponent } from './prefer-theaters/prefer-theaters.component';
import { SuccessComponent } from './success/success.component';
import { RequiredLoginComponent } from './required-login/required-login.component';

import { PreferTheaterFilterPipe } from './prefer-theaters/pipes/prefer-theater-filter.pipe';
import { SeatModule } from './quick-booking/components/seat-selection-modal/seat.module';
import { DeletePreferComponent } from './prefer-theaters/delete-prefer/delete-prefer.component';
import { ModalStyleDirective } from './directives/modal-style.directive';

@NgModule({
  declarations: [
    SidebarComponent,
    NotFoundComponent,
    LoginModalComponent,
    PreferTheatersComponent,
    SuccessComponent,
    RequiredLoginComponent,
    PreferTheaterFilterPipe,
    DeletePreferComponent,
    ModalStyleDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SeatModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    NotFoundComponent,
    LoginModalComponent,
    PreferTheatersComponent,
    SuccessComponent,
    RequiredLoginComponent,
    ModalStyleDirective
  ]
})
export class SharedModule { }
