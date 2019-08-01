import { Component, OnInit } from '@angular/core';
import { MovieDetailService } from '../service/movie-detail.service';
import { Movies } from 'src/app/shared/quick-booking/models/movies.interface';
import { QuickBookingService } from 'src/app/shared/quick-booking/service/quick-booking.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  rankmovie: Movies[];

  constructor(
    private movieDetailService: MovieDetailService,
    private rankService: QuickBookingService
  ) { }

  ngOnInit() {
  }
  
  closeDetail(rankmovie: Movies) {
    this.movieDetailService.detailModalState = false;
    console.log(rankmovie);
  }

  openDetail() {
    this.movieDetailService.detailModalState = true;
  }

}
