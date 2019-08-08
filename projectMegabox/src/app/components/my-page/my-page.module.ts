import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './../../app-routing.module';

import { MyPageComponent } from './my-page.component';
import { MypageMoviestoryComponent } from './mypage-moviestory/mypage-moviestory.component';
import { MypageBookingComponent } from './mypage-booking/mypage-booking.component';
import { MypageNaviComponent } from './mypage-navi/mypage-navi.component';
import { MypageMainComponent } from './mypage-main/mypage-main.component';
import { MypageModifyComponent } from './mypage-modify/mypage-modify.component';




@NgModule({
  declarations: [
    MyPageComponent,
    MypageMainComponent,
    MypageNaviComponent,
    MypageBookingComponent,
    MypageMoviestoryComponent,
    MypageModifyComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],

})
export class MyPageModule { }
