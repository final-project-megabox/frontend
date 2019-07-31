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
  movies: Movies[];

  RankStars: RankStar[][];
  starState: number[];
  // commentState: number = 5;

  movieState: number[];

  wishMovie: Movies[] = [];

  success;
  failure;


  hoverState = false;
  starclick = false;

  ngOnInit() {
    this.getRanking()
    
    // this.RankStars = [
    //   { id: 0, rankStar: 'star0', starContent: '괜히 봤어요', selected: false },
    //   { id: 1, rankStar: 'star1', starContent: '기대하진 말아요', selected: false },
    //   { id: 2, rankStar: 'star2', starContent: '무난했어요', selected: false },
    //   { id: 3, rankStar: 'star3', starContent: '기대해도 좋아요!', selected: false },
    //   { id: 4, rankStar: 'star4', starContent: '너무 멋진 영화였어요!', selected: false },
    //   { id: 5, rankStar: '', starContent: '평점을 입력해주세요', selected: false }
    // ]
  }

  getRanking()  {
    this.rankService.getAll()
    .subscribe(rankingMovies => {
      this.movies = rankingMovies;

      this.RankStars = rankingMovies.map(() => ([
        { id: 0, rankStar: '', starContent: '평점을 입력해주세요', selected: false },
        { id: 1, rankStar: 'star1', starContent: '괜히 봤어요', selected: false },
        { id: 2, rankStar: 'star2', starContent: '기대하진 말아요', selected: false },
        { id: 3, rankStar: 'star3', starContent: '무난했어요', selected: false },
        { id: 4, rankStar: 'star4', starContent: '기대해도 좋아요!', selected: false },
        { id: 5, rankStar: 'star5', starContent: '너무 멋진 영화였어요!', selected: false }
      ])
      );
      this.starState = rankingMovies.map(() => 0);
      this.movieState = rankingMovies.map(() => 0);
  })
}

  selectMovie(rankmovie: Movies) {
    this.rankService.selectMovie = [rankmovie];
    this.rootService.quickBookingModalState = true;
    console.log(this.rankService.selectMovie);
  }
  
  hoverStar(id: number, idx:number, index: number) {
    this.starState[index] = id;
    // this.commentState = id;
    this.movieState[index] = idx;
    this.hoverState = true;
    // console.log(this.starState); 
  }

  chageSelect(index: number) {
    return this.RankStars[index] = this.RankStars[index].map(rankstar => rankstar.selected ? {...rankstar, selected: false} : rankstar);
  }

  rateSelect(rate: RankStar, index: number) {
    this.chageSelect(index)
    this.starState[index] = rate.id;
    this.RankStars[index] = this.RankStars[index].map(rankstar => rankstar.id === rate.id ? {...rankstar, selected: true} : rankstar);
    this.starclick = true;
    console.log("p", this.RankStars[index][this.starState[index]].starContent)
    console.log(this.starclick);
    console.log(this.starState);
    console.log(rate);
    console.log(this.RankStars);
  }

  outStar(index: number) {
    this.hoverState = false;
    console.log(this.RankStars[index]);
    // this.test = this.RankStars[index].find(({selected}) => selected).id
    // this.success = this.RankStars[index].find(({selected}) => selected);
    // this.failure = this.RankStars[index].find(({selected}) => selected === false);
    
    this.starState = this.RankStars[index].filter(({selected}) => selected === true).map(rankstar => rankstar.id);
    // 필터걸어서 맵 ㅇㅇ
    // this.starState[index] = this.RankStars[index].find(({selected}) => selected ? this.success.id : this.failure.id === 0);
    console.log(this.starState);
    
    

    // 변수에 담아서 트루일 땐 아이디를, 트루가 아닐 땐 다른 무언가를... 리턴을??
    // this.starState[index] = this.RankStars[index].find(({selected}) => selected === true).id;
    // console.log(this.test);
    // if (this.starclick) {
      // return;
    // } else {
      // this.starState = NaN;
    // }
  }

  rankWish(rankmovie: Movies) {
    this.wishMovie = [rankmovie]
  }

}
