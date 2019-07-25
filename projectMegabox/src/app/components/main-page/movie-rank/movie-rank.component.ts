import { Component, OnInit } from '@angular/core';
import { Rank, RankStar } from '../movie-rank/models/rank.type';
import { RankMovie, RankStarContent } from './models/rank-movie-interface';
import { MovieRankService } from './service/movie-rank.service';

@Component({
  selector: 'app-movie-rank',
  templateUrl: './movie-rank.component.html',
  styleUrls: ['./movie-rank.component.scss']
})
export class MovieRankComponent implements OnInit {
  constructor(private rankService: MovieRankService) { }
  
  Ranks: Rank[] = ['박스오피스', '최신개봉작', '상영예정작'];
  rankState: Rank = '박스오피스';

  RankMovies: RankMovie[] = [];

  RankStars: RankStar[] = ['star1', 'star2', 'star3', 'star4', 'star5'];
  starState: RankStar;
  RankStarContents: RankStarContent[];


  ngOnInit() {
    this.getRanking()
    
    this.RankStarContents = [
      { id: 0, starContent: '평점을 입력해주세요'},
      { id: 1, starContent: '괜히 봤어요'},
      { id: 2, starContent: '기대하진 말아요'},
      { id: 3, starContent: '무난했어요'},
      { id: 4, starContent: '기대해도 좋아요!'},
      { id: 5, starContent: '너무 멋진 영화였어요!'}
    ]
    
  }
  
  getRanking()  {
    this.rankService.getAll()
    .subscribe(allMovies => this.rankService.RankMovies = allMovies.map(movie => {
      if(movie.age === 0) return {...movie, age:'age-all'}
      if(movie.age === 1) return {...movie, age:'age-12'}
      if(movie.age === 2) return {...movie, age:'age-15'}
      if(movie.age === 3) return {...movie, age:'age-19'}
    }));
  }
  // RankStar와 RankStarContent를 인터페이스로 만들어서 호버하면 이미지와 콘텐츠가 같이 보이게 해보쟈... 홧팅...

}
