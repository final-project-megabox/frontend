import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './../../app-routing.module';

import { MyPageComponent } from './my-page.component';
import { MypageMoviestoryComponent } from './mypage-moviestory/mypage-moviestory.component';
import { MypageBookingComponent } from './mypage-booking/mypage-booking.component';
import { MypageNaviComponent } from './mypage-navi/mypage-navi.component';
import { MypageMainComponent } from './mypage-main/mypage-main.component';

import { MypageServiceService } from './mypage-service.service';


@NgModule({
  declarations: [
    MyPageComponent,
    MypageMainComponent,
    MypageNaviComponent,
    MypageBookingComponent,
    MypageMoviestoryComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],

  providers: [
    MypageServiceService
  ]
})
export class MyPageModule { }
