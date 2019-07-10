import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss']
})
export class MovieModalComponent implements OnInit {
  movies = [
    {id: 1, age:'age-12', name: '스파이더맨: 파 프롬 홈', reservationRate: '50', releaseDate: '2019-07-03'
    ,posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/9F/B762F4-F7EE-48BB-B54F-F9000DCCA155.medium.jpg'
    },
    {id: 2, age:'age-all', name: '라이온킹', reservationRate: '30', releaseDate: '2019-06-30' 
    ,posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/07/996B6C-3897-4580-B419-36B37F7FB043.medium.jpg'
    },
    {id: 3, age:'age-all', name: '알라딘', reservationRate: '30', releaseDate: '2019-06-30' 
    ,posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/BC/F3BD5B-0A1A-4D98-A22E-3743EEDBF403.medium.jpg'
    },
    {id: 4, age:'age-all', name: '토이스토리 4', reservationRate: '30', releaseDate: '2019-06-30' 
    ,posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/08/2A0450-B477-4367-A065-85236F25C540.medium.jpg'
    },
    {id: 5, age:'age-15', name: '기생충', reservationRate: '70', releaseDate: '2019-07-05'
    , posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/07/F2B772-860E-4A3B-873C-F9E1C8C47966.medium.jpg'
    },
    {id: 6, age:'age-19', name: '존 윅 3: 파라벨룸', reservationRate: '20', releaseDate: '2019-07-01'
    , posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/F9/FA465F-5589-4C68-A188-F50DE69F97B0.medium.jpg'  
    },
    {id: 7, age:'age-15', name: '기방도령', reservationRate: '70', releaseDate: '2019-07-05'
    , posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/89/E48867-C962-41A8-A796-63544421A8A7.medium.jpg'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  // generateId() {
  //   return  this.movies.length ? Math.max(...this.movies.map(({ id })=> id)) + 1 : 1;
  // }
  // http://image2.megabox.co.kr/mop/poster/2019/9F/B762F4-F7EE-48BB-B54F-F9000DCCA155.medium.jpg
  // http://image2.megabox.co.kr/mop/poster/2019/07/996B6C-3897-4580-B419-36B37F7FB043.medium.jpg
  // http://image2.megabox.co.kr/mop/poster/2019/07/F2B772-860E-4A3B-873C-F9E1C8C47966.medium.jpg
  // http://image2.megabox.co.kr/mop/poster/2019/F9/FA465F-5589-4C68-A188-F50DE69F97B0.medium.jpg
}
