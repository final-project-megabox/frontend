import { Component, OnInit, Input } from '@angular/core';
import { MovieDetailService } from '../service/movie-detail.service';
import { Movies } from 'src/app/shared/quick-booking/models/movies.interface';
import { QuickBookingService } from 'src/app/shared/quick-booking/service/quick-booking.service';
import { RootService } from 'src/app/core/service/root.service';
import { MovieDetail } from '../models/rank-movie-interface';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input() detailMovie: MovieDetail;
  // rankovie: Movies[];
  rankMovie = this.rankService;

  movies: Movies[];

  tipClick = false;

  constructor(
    private movieDetailService: MovieDetailService,
    private rootService: RootService,
    private rankService: QuickBookingService
  ) { }

  ngOnInit() {
  }
  
  ngOnChanges() {
    console.log(this.detailMovie);
    
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
    console.log(rankmovie);
    return this.rankMovie.movies.sort(this.descending('booking_rate')).findIndex(i => i['booking_rate'] === rankmovie['booking_rate'])+1;
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
