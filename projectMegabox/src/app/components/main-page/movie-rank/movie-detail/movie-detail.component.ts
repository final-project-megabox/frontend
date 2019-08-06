import { Component, OnInit, Input } from '@angular/core';

import { RootService } from 'src/app/core/service/root.service';
import { MovieDetailService } from '../service/movie-detail.service';
import { QuickBookingService } from 'src/app/shared/quick-booking/service/quick-booking.service';

import { MovieDetail } from '../models/rank-movie-interface';
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

  constructor(
    private movieDetailService: MovieDetailService,
    private rootService: RootService,
    private rankService: QuickBookingService
  ) { }

  ngOnInit() {
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
