import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from 'src/app/app-routing.module';

import { SignUpComponent } from './sign-up.component';

import { InformationBackgroundDirective } from './directives/information-background.directive';
import { ChoiceEmailDirective } from './directives/choice-email.directive';
import { PreferTheaterSelectDirective } from './directives/prefer-theater-select.directive';
import { WelcomeAlertComponent } from './welcome-alert/welcome-alert.component';

@NgModule({
  declarations: [ 
    SignUpComponent,
    InformationBackgroundDirective,
    ChoiceEmailDirective,
    PreferTheaterSelectDirective,
    WelcomeAlertComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ]
})
export class SignUpModule { }
