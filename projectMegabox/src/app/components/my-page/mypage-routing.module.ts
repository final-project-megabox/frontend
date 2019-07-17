import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MypageMoviestoryComponent } from './mypage-moviestory/mypage-moviestory.component';
import { MypageMainComponent } from './mypage-main/mypage-main.component';
import { MypageBookingComponent } from './mypage-booking/mypage-booking.component';

const routes: Routes = [
  { path: 'mypage', redirectTo: '/mypage-main', pathMatch: 'full' }, // 첫 화면을 main 페이지로 설정
  { path: 'mypage/booking', component: MypageBookingComponent, },
  { path: 'mymovie-story', component: MypageMoviestoryComponent, },
  { path: 'mypage-main', component: MypageMainComponent, }, // url 경로가 /main 일때 MainComponent를 보여준다.
  { path: '**', redirectTo: '/mypagemain', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MyPageRoutingModule { }



// const MyPageRouter: Routes = [
//   { path: '', redirectTo: '/mypagemain', pathMatch: 'full' }, // 첫 화면을 main 페이지로 설정
//   { path: 'mypagebooking', component: MypageBookingComponent, },
//   { path: 'mymoviestory', component: MypageMoviestoryComponent, },
//   { path: 'mypagemain', component: MypageMainComponent, }, // url 경로가 /main 일때 MainComponent를 보여준다.
//   { path: '**', redirectTo: '/mypagemain', pathMatch: 'full' },
// ];

// export const MyPageRouterModule = RouterModule.forRoot(MyPageRouter, {useHash: true});
