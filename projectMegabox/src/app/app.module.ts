import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { MainPageModule } from './components/main-page/main-page.module';
import { MyPageModule } from './components/my-page/my-page.module';
import { ComponentsModule } from './components/components.module';
import { SignUpModule } from './components/sign-up/sign-up.module';

import { AppComponent } from './app.component';
import { QuickBookingModule } from './shared/quick-booking/quick-booking.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    CoreModule,
    MainPageModule,
    MyPageModule,
    SharedModule,
    ComponentsModule,
    SignUpModule,
    QuickBookingModule,

    AppRoutingModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
