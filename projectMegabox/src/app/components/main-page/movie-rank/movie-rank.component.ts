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

  starState;
  // commentState: number = 5;

  movieState: number[];

  wishMovie: Movies[] = [];

  hoverState = false;
  starclick = false;

  ngOnInit() {
    this.getRanking()
    
    this.RankStars = [
      { id: 0, starRate: 1, starContent: '괜히 봤어요' },
      { id: 1, starRate: 2, starContent: '기대하진 말아요' },
      { id: 2, starRate: 3, starContent: '무난했어요' },
      { id: 3, starRate: 4, starContent: '기대해도 좋아요!' },
      { id: 4, starRate: 5, starContent: '너무 멋진 영화였어요!' }
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
    this.movieDetailService.detailModalState = true;
    this.movieDetailService.getDetail(rankmovie.movie_id).subscribe(res => {
      this.detailMovie = res;
    });
  }

  selectMovie(rankmovie: Movies) {
    this.rankService.selectMovie = [rankmovie];
    this.rootService.quickBookingModalState = true;
  }
  
  // hoverStar(id: number, idx:number, index: number) {
  //   this.starState[index] = id;
  //   this.movieState[index] = idx;
  //   this.hoverState = true;
  // }

  // chageSelect() {
  //   return this.RankStars = this.RankStars.map(rankstar => rankstar.selected ? {...rankstar, selected: false} : rankstar);
  // }
  // chageSelect(index: number) {
  //   return this.RankStars[index] = this.RankStars[index].map(rankstar => rankstar.selected ? {...rankstar, selected: false} : rankstar);
  // }


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
  
  // outStar(index: number) {
  //   this.hoverState = false;
  //   // console.log(this.RankStars[index]);    
  //   this.starState = this.RankStars[index].filter(({selected}) => selected === true).map(rankstar => rankstar.id);
  //   // console.log(this.starState);
  // }

  wishMovies;
  rankWish(rankmovie: Movies) {
    this.movieDetailService.wishMovie(rankmovie.movie_id).subscribe(res => {
      this.wishMovies = res;
    })
  }

  clickId;
  saveStar;
  clickStar(rankmovie, rate) {
    this.clickId = rankmovie.movie_id
    this.movieDetailService.getRate(this.clickId, rate.starRate).subscribe(res => {
      this.saveStar = res;
      console.log(this.saveStar);
    })
    // this.starclick = true;
    // console.log(this.starclick);
  }

  hoverRate(rankmovie, id) {
    this.starState = id;
    // console.log(this.starState);
    this.hoverState = true;
    // console.log(this.hoverState);
    // this.starclick = true;
    // console.log(this.starclick);
    // this.movieState = rankmovie;
    // console.log(this.movieState);
    
  }

  outRate(rankmovie, rate) {
    this.hoverState = false;
    // console.log(this.hoverState);
    this.starState = this.RankStars.filter(rating => rating.starRate === rate.starRate)
    // console.log(this.starState);    
  }

}