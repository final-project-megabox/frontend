import { Pipe, PipeTransform } from '@angular/core';

import { DetailRegion } from '../models/detail-region.interface';

@Pipe({
  name: 'regionsFilter'
})
export class RegionsFilterPipe implements PipeTransform {

  transform(detailRegions: DetailRegion[], depthOneState: string): DetailRegion[] {
      return detailRegions.filter(region => {
        if(depthOneState === '서울') { return region.region === '서울'}
        if(depthOneState === '경기') { return region.region === '경기'}
        if(depthOneState === '부산/대구/경상') { return region.region === '부산/대구/경상'}
        else return null;
      })
  }
}
