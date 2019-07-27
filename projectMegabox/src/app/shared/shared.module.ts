import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { PreferTheatersComponent } from './prefer-theaters/prefer-theaters.component';

@NgModule({
  declarations: [
    SidebarComponent,
    NotFoundComponent,
    LoginModalComponent,
    PreferTheatersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    NotFoundComponent,
    LoginModalComponent,
    PreferTheatersComponent
  ]
})
export class SharedModule { }
