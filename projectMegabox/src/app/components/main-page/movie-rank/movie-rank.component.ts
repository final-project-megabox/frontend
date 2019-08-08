import { Component, OnInit } from '@angular/core';

import { Rank } from '../movie-rank/models/rank.type';
import { RankStar } from './models/rank-movie-interface';

import { RootService } from 'src/app/core/service/root.service';
import { QuickBookingService } from 'src/app/shared/quick-booking/service/quick-booking.service';
import { Movies } from 'src/app/shared/quick-booking/models/movies.interface';
import { MovieDetailService } from './service/movie-detail.service';


@Component({
  selector: 'app-movie-rank',
  templateUrl: './movie-rank.component.html',
  styleUrls: ['./movie-rank.component.scss']
})
export class MovieRankComponent implements OnInit {
  constructor(
    public rankService: QuickBookingService,
    public rootService: RootService,
    public movieDetailService: MovieDetailService
    ) { }
  
  Ranks: Rank[] = ['박스오피스', '최신개봉작', '상영예정작'];
  rankState: Rank = '박스오피스';
  movies: Movies[];

  RankStars: RankStar[];
  rateState: number;

  starState: number[];
  // commentState: number = 5;

  movieState: number[];

  wishMovie: Movies[] = [];

  hoverState = false;
  starclick = false;

  ngOnInit() {
    this.getRanking()
    
    this.RankStars = [
      { id: 0, rankStar: 'star0', starContent: '괜히 봤어요', selected: false },
      { id: 1, rankStar: 'star1', starContent: '기대하진 말아요', selected: false },
      { id: 2, rankStar: 'star2', starContent: '무난했어요', selected: false },
      { id: 3, rankStar: 'star3', starContent: '기대해도 좋아요!', selected: false },
      { id: 4, rankStar: 'star4', starContent: '너무 멋진 영화였어요!', selected: false }
    ]
  }

  getRanking()  {
    this.rankService.getAll()
    .subscribe(rankingMovies => {
      this.rankService.movies = rankingMovies;

      // this.RankStars = rankingMovies.map(() => ([
      //   { id: 0, rankStar: '', starContent: '평점을 입력해주세요', selected: false },
      //   { id: 1, rankStar: 'star1', starContent: '괜히 봤어요', selected: false },
      //   { id: 2, rankStar: 'star2', starContent: '기대하진 말아요', selected: false },
      //   { id: 3, rankStar: 'star3', starContent: '무난했어요', selected: false },
      //   { id: 4, rankStar: 'star4', starContent: '기대해도 좋아요!', selected: false },
      //   { id: 5, rankStar: 'star5', starContent: '너무 멋진 영화였어요!', selected: false }
      // ])
      // );
      // this.starState = rankingMovies.map(() => 0);
      // this.movieState = rankingMovies.map(() => 0);
  })
}
  detailMovie;
  selectDetail(rankmovie: Movies) {
    // this.rankService.selectMovie = [rankmovie];
    this.movieDetailService.detailModalState = true;
    // console.log(this.rankService.selectMovie);
    console.log(rankmovie.movie_id)
    
    this.movieDetailService.getDetail(rankmovie.movie_id).subscribe(res => {
      this.detailMovie = res;
      console.log(this.detailMovie);
      
    });
  }

  selectMovie(rankmovie: Movies) {
    this.rankService.selectMovie = [rankmovie];
    this.rootService.quickBookingModalState = true;
    // console.log(this.rankService.selectMovie);
  }
  
  hoverStar(id: number, idx:number, index: number) {
    this.starState[index] = id;
    this.movieState[index] = idx;
    this.hoverState = true;
  }

  chageSelect() {
    return this.RankStars = this.RankStars.map(rankstar => rankstar.selected ? {...rankstar, selected: false} : rankstar);
  }
  // chageSelect(index: number) {
  //   return this.RankStars[index] = this.RankStars[index].map(rankstar => rankstar.selected ? {...rankstar, selected: false} : rankstar);
  // }

  rateSelect(rate: RankStar, index: number) {
    this.chageSelect()
    this.starState[index] = rate.id;
    this.RankStars = this.RankStars.map(rankstar => rankstar.id === rate.id ? {...rankstar, selected: true} : rankstar);
    this.starclick = true;
    // console.log("p", this.RankStars[index][this.starState[index]].starContent)
    // console.log(this.starclick);
    // console.log(this.starState);
    // console.log(rate);
    // console.log(this.RankStars);
  }
  // rateSelect(rate: RankStar, index: number) {
  //   this.chageSelect(index)
  //   this.starState[index] = rate.id;
  //   this.RankStars[index] = this.RankStars[index].map(rankstar => rankstar.id === rate.id ? {...rankstar, selected: true} : rankstar);
  //   this.starclick = true;
  //   // console.log("p", this.RankStars[index][this.starState[index]].starContent)
  //   // console.log(this.starclick);
  //   // console.log(this.starState);
  //   // console.log(rate);
  //   // console.log(this.RankStars);
  // }

  outStar(index: number) {
    this.hoverState = false;
    // console.log(this.RankStars[index]);    
    this.starState = this.RankStars.filter(({selected}) => selected === true).map(rankstar => rankstar.id);
    // console.log(this.starState);
  }
  // outStar(index: number) {
  //   this.hoverState = false;
  //   // console.log(this.RankStars[index]);    
  //   this.starState = this.RankStars[index].filter(({selected}) => selected === true).map(rankstar => rankstar.id);
  //   // console.log(this.starState);
  // }

  rankWish(rankmovie: Movies) {
    this.wishMovie = [rankmovie]
    console.log(this.wishMovie);
    
  }

  clickStar(rankmovie, rate) {
    this.chageSelect();
    this.RankStars = this.RankStars.map(rankstar => rankstar.id === rate.id ? {...rankstar, selected: true} : rankstar);
    console.log(rankmovie);
    console.log(this.RankStars);
    
  }

  hoverRate(rankmovie, id) {
    console.log(rankmovie);
    
    console.log(id);
    
  }

}