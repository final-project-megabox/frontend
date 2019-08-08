import { MypageModifyComponent } from './components/my-page/mypage-modify/mypage-modify.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './components/main-page/main-page.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

import { MypageMainComponent } from './components/my-page/mypage-main/mypage-main.component';
import { MypageBookingComponent } from './components/my-page/mypage-booking/mypage-booking.component';
import { MypageMoviestoryComponent } from './components/my-page/mypage-moviestory/mypage-moviestory.component';
import { MyPageComponent } from './components/my-page/my-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './core/guard/auth.guard';
import { MainViewComponent } from './shared/quick-booking/components/main-view/main-view.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: MainPageComponent,
    // children: [ { path: 'quick-booking', component: MainViewComponent } ]
  },
  { path: 'mypage', component: MypageMainComponent, canActivate: [ AuthGuard ] },
  { path: 'booking', component: MypageBookingComponent },
  { path: 'my-movie-story', component: MypageMoviestoryComponent, canActivate: [ AuthGuard ] },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'info-modify', component: MypageModifyComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
