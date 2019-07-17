import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regionsFilter'
})
export class RegionsFilterPipe implements PipeTransform {

  transform(detailRegions: any[], depthOneState: string): any {
    return detailRegions.filter(region => {
      if(depthOneState === '서울') { return region.city === '서울'}
      if(depthOneState === '경기') { return region.city === '경기'}
      if(depthOneState === '부산') { return region.city === '부산'}
      else return null;
    })
  }

}
