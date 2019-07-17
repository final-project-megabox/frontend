import { Pipe, PipeTransform } from '@angular/core';
import { Rank } from '../models/rank.type';

@Pipe({
  name: 'rankSort'
})
export class RankSortPipe implements PipeTransform {


  transform(ranks: Rank[], rankState: Rank): Rank[] {
    function compare(key: string) {
      return function (a: string, b: string) {
        // 최신개봉작: 릴리즈 데이트를 현재 날짜와 비교해 현재 날짜 이전 개봉 영화를 역순으로 배열
        // 상영예정작: 릴리즈 데이트를 현재 날짜와 비교해 현재 날짜 이후 개봉 영화를 정순으로 배열
        if (rankState === '최신개봉작') return a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0);
        else return a[key] < b[key] ? 1 : (a[key] > b[key] ? -1 : 0);
      }
    }
    if (rankState === '최신개봉작') { return ranks.sort(compare('releaseDate')); }
    else if (rankState === '상영예정작') { return ranks.sort(compare('id')); }
    else return ranks.sort(compare('reservationRate'));
  }

}
