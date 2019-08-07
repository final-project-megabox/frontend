import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/shared/quick-booking/models/movies.interface';
import { QuickBookingService } from 'src/app/shared/quick-booking/service/quick-booking.service';
import { RootService } from 'src/app/core/service/root.service';
import { MovieDetailService } from '../service/movie-detail.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  // rankovie: Movies[];
  rankMovies = this.rankService

  tipClick = false;

  constructor(
    public movieDetailService: MovieDetailService,
    public rootService: RootService,
    public rankService: QuickBookingService
  ) { }

  ngOnInit() {
  }
  
  closeDetail() {
    this.movieDetailService.detailModalState = false;
  }

  // openDetail() {
  //   this.movieDetailService.detailModalState = true;
  // }

  descending(key: string) {
    return function(a: Movies, b: Movies) {
      return a[key] < b[key] ? 1 : (a[key] > b[key] ? -1 : 0);
    }
  }

  ratingNow(rankmovie: Movies) {
    return this.rankService.movies.sort(this.descending('booking_rate')).findIndex(i => i['booking_rate'] === rankmovie['booking_rate'])+1;
  }

  reservationMovie(rankmovie: Movies) {
    this.rankService.selectMovie = [rankmovie];
    this.rootService.quickBookingModalState = true;
  }

  toolTip() {
    this.tipClick = !this.tipClick;
  }

  myWishMovie(rankmovie: Movies) {
    // console.log(rankmovie);
  }

}
