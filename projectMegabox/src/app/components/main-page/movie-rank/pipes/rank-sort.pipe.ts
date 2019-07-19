import { Pipe, PipeTransform } from '@angular/core';
import { Rank } from '../models/rank.type';
import { RankMovie } from '../models/rank-movie-interface';

@Pipe({
  name: 'rankSort'
})

export class RankSortPipe implements PipeTransform {
  transform(ranks: RankMovie[], rankState: Rank) {

    // 배열 함수 선언 => 상영예정작 ? 내림차순 : 오름차순
    function compare(key: string) {
      return function (a: RankMovie, b: RankMovie) {
        if (rankState === '상영예정작') return a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0);
        else return a[key] < b[key] ? 1 : (a[key] > b[key] ? -1 : 0);
      }
    }

    const openDate = new Date();

    // 상영예정작: 현재 날짜 기준 releaseDate가 높은 영화 오름차순
    // 최신개봉작: 현재 날짜 기준 releaseDate가 낮은 영화 내림차순
    // 박스오피스: reservationRate 기준 내림차순
    if (rankState === '상영예정작') { 
      return ranks.sort(compare('releaseDate')).filter(({releaseDate})=>{ 
        return new Date(releaseDate) > openDate }); 
      }
    else if (rankState === '최신개봉작') { 
      return ranks.sort(compare('releaseDate')).filter(({releaseDate})=>{ 
        return new Date(releaseDate) <= openDate }); 
      }
    else return ranks.sort(compare('reservationRate'));
  }

}
