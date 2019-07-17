import { Component, OnInit } from '@angular/core';
import { Rank } from '../movie-rank/models/rank.type';

interface RankMovie {
  id: number,
  age: string,
  title: string,
  reservationRate: number,
  releaseDate: string,
  url: string
}

@Component({
  selector: 'app-movie-rank',
  templateUrl: './movie-rank.component.html',
  styleUrls: ['./movie-rank.component.scss']
})
export class MovieRankComponent implements OnInit {
  
  Ranks: Rank[] = ['박스오피스', '최신개봉작', '상영예정작'];
  rankState: Rank = '박스오피스';

  RankMovies: RankMovie[];

  constructor() { }

  ngOnInit() {
    this.RankMovies = [
      { id: 1, age: 'age-all', title: '알라딘', reservationRate: 30, releaseDate: '2019-05-23', url: 'http://image2.megabox.co.kr/mop/poster/2019/BC/F3BD5B-0A1A-4D98-A22E-3743EEDBF403.large.jpg' },
      { id: 2, age: 'age-all', title: '라이온 킹', reservationRate: 70, releaseDate: '2019-07-17', url: 'http://image2.megabox.co.kr/mop/poster/2019/07/996B6C-3897-4580-B419-36B37F7FB043.large.jpg' },
      { id: 3, age: 'age-12', title: '스파이더맨: 파 프롬 홈', reservationRate: 50, releaseDate: '2019-07-02', url: 'http://image2.megabox.co.kr/mop/poster/2019/9F/B762F4-F7EE-48BB-B54F-F9000DCCA155.large.jpg' },
      { id: 4, age: 'age-15', title: '기방도령', reservationRate: 60, releaseDate: '2019-07-10', url: 'http://image2.megabox.co.kr/mop/poster/2019/89/E48867-C962-41A8-A796-63544421A8A7.large.jpg' },
      { id: 5, age: 'age-all', title: '나랏말싸미', reservationRate: 20, releaseDate: '2019-07-24', url: 'http://image2.megabox.co.kr/mop/poster/2019/F5/A1A99E-025A-4874-B479-1597994D94A8.large.jpg' },
      { id: 6, age: 'age-19', title: '존 윅 3: 파라벨룸', reservationRate: 40, releaseDate: '2019-06-26', url: 'http://image2.megabox.co.kr/mop/poster/2019/F9/FA465F-5589-4C68-A188-F50DE69F97B0.large.jpg' }
    ]
  }

}
