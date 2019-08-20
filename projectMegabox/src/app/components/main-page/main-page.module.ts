import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankSortPipe } from './movie-rank/pipes/rank-sort.pipe';

import { MainPageComponent } from './main-page.component';

import { CarouselComponent } from './carousel/carousel.component';
import { MegaboxNewsComponent } from './megabox-news/megabox-news.component';
import { MovieRankComponent } from './movie-rank/movie-rank.component';
import { NewEventComponent } from './new-event/new-event.component';
import { NoticeComponent } from './notice/notice.component';
import { MovieDetailComponent } from './movie-rank/movie-detail/movie-detail.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { RateActiveDirective } from './movie-rank/directive/rate-active.directive';
import { SharedModule } from 'src/app/shared/shared.module';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    MainPageComponent,
    CarouselComponent,
    MegaboxNewsComponent,
    MovieRankComponent,
    NewEventComponent,
    NoticeComponent,
    RankSortPipe,
    MovieDetailComponent,
    RateActiveDirective,
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    SwiperModule,
    SharedModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class MainPageModule { }
