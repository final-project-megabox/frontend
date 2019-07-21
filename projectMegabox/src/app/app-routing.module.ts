import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './components/main-page/main-page.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

import { MypageMainComponent } from './components/my-page/mypage-main/mypage-main.component';
import { MypageBookingComponent } from './components/my-page/mypage-booking/mypage-booking.component';
import { MypageMoviestoryComponent } from './components/my-page/mypage-moviestory/mypage-moviestory.component';
import { MyPageComponent } from './components/my-page/my-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: MainPageComponent},
  { path: 'mypage', component: MypageMainComponent,
  //   children: [
  //     { path: 'booking', component: MypageBookingComponent },
  //     { path: 'my-movie-story', component: MypageMoviestoryComponent },
  // ]
},
  { path: 'booking', component: MypageBookingComponent},
  { path: 'my-movie-story', component: MypageMoviestoryComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
