import { Component, OnInit, Input } from '@angular/core';

import { RootService } from 'src/app/core/service/root.service';
import { MovieDetailService } from '../service/movie-detail.service';
import { QuickBookingService } from 'src/app/shared/quick-booking/service/quick-booking.service';

import { MovieDetail, RankStar } from '../models/rank-movie-interface';
import { Movies } from 'src/app/shared/quick-booking/models/movies.interface';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input() detailMovie: MovieDetail;

  movies: Movies[];
  
  rankMovie = this.rankService.movies;
  selectMovie = this.rankService.selectMovie;
  
  tipClick = false;

  RankStars: RankStar[];

  constructor(
    private movieDetailService: MovieDetailService,
    private rootService: RootService,
    private rankService: QuickBookingService
  ) { }

  ngOnInit() {
    this.RankStars = [
      { id: 0, rankStar: 'star0', starContent: '괜히 봤어요', selected: false },
      { id: 1, rankStar: 'star1', starContent: '기대하진 말아요', selected: false },
      { id: 2, rankStar: 'star2', starContent: '무난했어요', selected: false },
      { id: 3, rankStar: 'star3', starContent: '기대해도 좋아요!', selected: false },
      { id: 4, rankStar: 'star4', starContent: '너무 멋진 영화였어요!', selected: false }
    ]
  }
  
  ngOnChanges() {
  }
  
  closeDetail() {
    this.movieDetailService.detailModalState = false;
  }

  descending(key: string) {
    return function(a: Movies, b: Movies) {
      return a[key] < b[key] ? 1 : (a[key] > b[key] ? -1 : 0);
    }
  }

  ratingNow(detailMovie) {
    return this.rankMovie.sort(this.descending('booking_rate')).findIndex(i => i['booking_rate'] === detailMovie['booking_rate'])+1;
  }

  reservationMovie(detailSelect) {
    this.rankService.selectMovie = [detailSelect];
    this.rootService.quickBookingModalState = true;
  }

  toolTip() {
    this.tipClick = !this.tipClick;
  }

  myWishMovie(rankmovie: Movies) {
    // console.log(rankmovie);
  }

}
