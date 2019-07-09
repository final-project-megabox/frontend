import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { MyPageComponent } from './main/my-page/my-page.component';
import { ScreeningScheduleComponent } from './main/screening-schedule/screening-schedule.component';
import { CarouselComponent } from './main/main-page/carousel/carousel.component';
import { MegaboxNewsComponent } from './main/main-page/megabox-news/megabox-news.component';
import { MovieRankComponent } from './main/main-page/movie-rank/movie-rank.component';
import { NewEventComponent } from './main/main-page/new-event/new-event.component';
import { NoticeComponent } from './main/main-page/notice/notice.component';
import { SidebarComponent } from './main/main-page/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainPageComponent,
    MyPageComponent,
    ScreeningScheduleComponent,
    CarouselComponent,
    MegaboxNewsComponent,
    MovieRankComponent,
    NewEventComponent,
    NoticeComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
