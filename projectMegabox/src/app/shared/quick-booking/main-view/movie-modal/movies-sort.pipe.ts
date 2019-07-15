import { Pipe, PipeTransform, ɵisBoundToModule__POST_R3__ } from '@angular/core';

import { SortItem } from './sortItem.type';

@Pipe({
  name: 'moviesSort'
})
export class MoviesSortPipe implements PipeTransform {

  transform(movies: SortItem[], sortState: SortItem): SortItem[] {
      function compare(key: string) {
        return function (a: string, b: string) {
          if(sortState === '가나다순') return a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0);
          else return a[key] < b[key] ? 1 : (a[key] > b[key] ? -1 : 0);
        }
      }

      if (sortState === '가나다순') { return movies.sort(compare('name')); }
      else if(sortState === '개봉일순') { return movies.sort(compare('releaseDate'));}
      else return movies.sort(compare('reservationRate'));
    }
  }

