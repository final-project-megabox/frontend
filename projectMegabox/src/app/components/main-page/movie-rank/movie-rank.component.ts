import { Component, OnInit } from '@angular/core';

import { Rank } from '../movie-rank/models/rank.type';
import { RankStar } from './models/rank-movie-interface';

import { RootService } from 'src/app/core/service/root.service';
import { QuickBookingService } from 'src/app/shared/quick-booking/service/quick-booking.service';
import { Movies } from 'src/app/shared/quick-booking/models/movies.interface';

@Component({
  selector: 'app-movie-rank',
  templateUrl: './movie-rank.component.html',
  styleUrls: ['./movie-rank.component.scss']
})
export class MovieRankComponent implements OnInit {
  constructor(private rankService: QuickBookingService, private rootService: RootService) { }
  
  Ranks: Rank[] = ['박스오피스', '최신개봉작', '상영예정작'];
  rankState: Rank = '박스오피스';

  RankStars: RankStar[]
  starState: number;
  commentState: number = 5;

  wishMovie: Movies[] = [];

  hoverState = false;
  starclick = false;

  ngOnInit() {
    this.getRanking()
    
    this.RankStars = [
      { id: 0, rankStar: 'star0', starContent: '괜히 봤어요'},
      { id: 1, rankStar: 'star1', starContent: '기대하진 말아요'},
      { id: 2, rankStar: 'star2', starContent: '무난했어요'},
      { id: 3, rankStar: 'star3', starContent: '기대해도 좋아요!'},
      { id: 4, rankStar: 'star4', starContent: '너무 멋진 영화였어요!'},
      { id: 5, rankStar: '', starContent: '평점을 입력해주세요'}
    ]

    
  }

  getRanking()  {
    this.rankService.getAll()
    .subscribe(rankingMovies => this.rankService.movies = rankingMovies);
  }

  selectMovie(rankmovie: Movies) {
    this.rankService.selectMovie = [rankmovie];
    this.rootService.quickBookingModalState = true;
  }

  movieState: number;
  
  hoverStar(id: number, idx:number) {
    this.starState = id;
    this.commentState = id;
    this.movieState = idx;
    this.hoverState = true;
    console.log(this.movieState); 
  }

  outStar() {
    // this.starState = 6;
    this.hoverState = false;
    
    if (this.starclick) {
      return;
    } else {
      this.starState = NaN;
    }
    // this.starState = NaN;
    // this.movieState = null;
  }

  inputStar(id: number) {
    this.starState = id;
    console.log(this.starState);
    
  }

  // hovercomment(i: number) {
  //   this.commentState = i;
  //   console.log(this.commentState);
    
  // }

  rankWish(rankmovie: Movies) {
    this.wishMovie = [rankmovie]
    // console.log(this.wishMovie);
  }

}
