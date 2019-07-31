import { Component, OnInit } from '@angular/core';
import { MovieDetailService } from '../service/movie-detail.service';
import { Movies } from 'src/app/shared/quick-booking/models/movies.interface';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  constructor(
    private movieDetailService: MovieDetailService
  ) { }

  ngOnInit() {
  }

  closeDetail(rankmovie: Movies) {
    this.movieDetailService.detailModalState = false;
    console.log(rankmovie);
  }

}
