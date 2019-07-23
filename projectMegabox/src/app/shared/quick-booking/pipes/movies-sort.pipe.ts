import { Pipe, PipeTransform } from '@angular/core';
import { SortItem } from '../models/sortItem.type';


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

      if (sortState === '가나다순') { return movies.sort(compare('title')); }
      else if(sortState === '개봉일순') { return movies.sort(compare('release_date'));}
      else return movies.sort(compare('booking_rate'));
    }
  }

