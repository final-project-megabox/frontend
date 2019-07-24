import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel/carousel.component';
import { MegaboxNewsComponent } from './megabox-news/megabox-news.component';
import { MovieRankComponent } from './movie-rank/movie-rank.component';
import { NewEventComponent } from './new-event/new-event.component';
import { NoticeComponent } from './notice/notice.component';
import { MainPageComponent } from './main-page.component';
import { RankSortPipe } from './movie-rank/pipes/rank-sort.pipe';
import { RankingHoverDirective } from './movie-rank/directive/ranking-hover.directive';
import { MovieRankService } from './movie-rank/service/movie-rank.service';

@NgModule({
  declarations: [
    MainPageComponent,
    CarouselComponent,
    MegaboxNewsComponent,
    MovieRankComponent,
    NewEventComponent,
    NoticeComponent,
    RankSortPipe,
    RankingHoverDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
    MovieRankService
  ]
})
export class MainPageModule { }
