import { Component, OnInit } from '@angular/core';

import { BranchEvent } from './models/branch-event-interface';

@Component({
  selector: 'app-megabox-news',
  templateUrl: './megabox-news.component.html',
  styleUrls: ['./megabox-news.component.scss']
})
export class MegaboxNewsComponent implements OnInit {

  BranchEvents: BranchEvent[];

  constructor() { }

  ngOnInit() {
    this.BranchEvents = [
      { local: '대구광역시', branch: '대구', hashtag: '#Me플리 #플리마켓놀러와요' },
      { local: '대전광역시', branch: '대전', hashtag: '#포인트2배쌓고싶다면?' },
      { local: '부산광역시', branch: '부산대', hashtag: '#방학맞이 #저세상할인이벤트' },
    ]
  }

}
