import { Component, OnInit, Input, Output, EventEmitter, Type } from '@angular/core';

import { SortItem } from './sortItem.type';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss']
})

export class MovieModalComponent implements OnInit {
  movies = [
    {id: 1, age: 'age-12', name: '스파이더맨: 파 프롬 홈', reservationRate: '90', releaseDate: '2019-07-03'
    ,posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/9F/B762F4-F7EE-48BB-B54F-F9000DCCA155.medium.jpg'
    },
    {id: 2, age: 'age-all', name: '라이온킹', reservationRate: '80', releaseDate: '2019-06-30' 
    ,posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/07/996B6C-3897-4580-B419-36B37F7FB043.medium.jpg'
    },
    {id: 3, age: 'age-all', name: '알라딘', reservationRate: '70', releaseDate: '2019-06-20' 
    ,posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/BC/F3BD5B-0A1A-4D98-A22E-3743EEDBF403.medium.jpg'
    },
    {id: 4, age: 'age-all', name: '토이스토리 4', reservationRate: '60', releaseDate: '2019-06-10' 
    ,posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/08/2A0450-B477-4367-A065-85236F25C540.medium.jpg'
    },
    {id: 5, age: 'age-15', name: '기생충', reservationRate: '50', releaseDate: '2019-05-30'
    , posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/07/F2B772-860E-4A3B-873C-F9E1C8C47966.medium.jpg'
    },
    {id: 6, age: 'age-19', name: '존 윅 3: 파라벨룸', reservationRate: '40', releaseDate: '2019-05-01'
    , posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/F9/FA465F-5589-4C68-A188-F50DE69F97B0.medium.jpg'  
    },
    {id: 7, age: 'age-15', name: '기방도령', reservationRate: '30', releaseDate: '2018-08-05'
    , posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/89/E48867-C962-41A8-A796-63544421A8A7.medium.jpg'
    }
  ]

  selectMoive:string[] = [];

  sortItems: SortItem[] = ['예매율순','가나다순','개봉일순'];
  sortState: SortItem = '예매율순';

  addPoster(movie: string, poster: HTMLElement) {
    if(poster.style.backgroundColor && this.selectMoive.length < 4) {
      this.selectMoive = [...this.selectMoive, movie];
      console.log(this.selectMoive);
    } else if (!poster.style.backgroundColor || this.selectMoive.length > 3) {
      this.selectMoive = this.selectMoive.filter((name) => name !== movie);
      poster.style.backgroundColor = null;
      poster.lastElementChild.setAttribute('style', 'color: null');
      console.log(this.selectMoive);
    }
    if(this.selectMoive.length === 4 && !poster.style.backgroundColor) {
      alert('4개까지만 선택할 수 있습니다.');
    }
  }

  constructor() { }

  ngOnInit() {
  }
 
  @Input() movieModal: boolean;
  @Output() cancel = new EventEmitter();
}
