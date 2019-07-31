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

@NgModule({
  declarations: [
    MainPageComponent,
    CarouselComponent,
    MegaboxNewsComponent,
    MovieRankComponent,
    NewEventComponent,
    NoticeComponent,
    RankSortPipe,
    MovieDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainPageModule { }
