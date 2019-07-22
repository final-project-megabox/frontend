import { Component, OnInit } from '@angular/core';

import { QuickBookingService } from '../../service/quick-booking.service';

import { SortItem } from '../../models/sortItem.type';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss']
})

export class MovieModalComponent implements OnInit {
  constructor(private bookingService: QuickBookingService) { }

  ngOnInit() {
    this.getMovies();
  }
  
  // movies = [
  //   {id: 0, age: 'age-12', name: '스파이더맨: 파 프롬 홈', reservationRate: '90', releaseDate: '2019-07-03'
  //   ,posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/9F/B762F4-F7EE-48BB-B54F-F9000DCCA155.large.jpg'
  //   },
  //   {id: 1, age: 'age-all', name: '라이온킹', reservationRate: '80', releaseDate: '2019-06-30' 
  //   ,posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/07/996B6C-3897-4580-B419-36B37F7FB043.large.jpg'
  //   },
  //   {id: 2, age: 'age-all', name: '알라딘', reservationRate: '70', releaseDate: '2019-06-20' 
  //   ,posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/BC/F3BD5B-0A1A-4D98-A22E-3743EEDBF403.large.jpg'
  //   },
  //   {id: 3, age: 'age-all', name: '토이스토리 4', reservationRate: '60', releaseDate: '2019-06-10' 
  //   ,posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/08/2A0450-B477-4367-A065-85236F25C540.large.jpg'
  //   },
  //   {id: 4, age: 'age-15', name: '기생충', reservationRate: '50', releaseDate: '2019-05-30'
  //   , posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/07/F2B772-860E-4A3B-873C-F9E1C8C47966.large.jpg'
  //   },
  //   {id: 5, age: 'age-19', name: '존 윅 3: 파라벨룸', reservationRate: '40', releaseDate: '2019-05-01'
  //   , posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/F9/FA465F-5589-4C68-A188-F50DE69F97B0.large.jpg'  
  //   },
  //   {id: 6, age: 'age-15', name: '기방도령', reservationRate: '30', releaseDate: '2018-08-05'
  //   , posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/89/E48867-C962-41A8-A796-63544421A8A7.large.jpg'
  //   },
  //   {id: 7, age: 'age-15', name: '걸캅스', reservationRate: '30', releaseDate: '2018-08-05'
  //   , posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/69/34A92B-6A66-4BE5-A0B3-A4BDE4D10D41.large.jpg'
  //   },
  //   {id: 8, age: 'age-12', name: '칠드런 액트', reservationRate: '30', releaseDate: '2018-08-05'
  //   , posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/BD/8B9A17-1A31-4160-920E-5B0A88B9593E.large.jpg'
  //   },
  //   {id: 9, age: 'age-all', name: '마리아 칼라스: 세기의 디바', reservationRate: '30', releaseDate: '2018-08-05'
  //   , posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/DB/C1D446-456D-4E07-9AB0-6BB8B760A4DA.large.jpg'
  //   },
  //   {id: 10, age: 'age-all', name: '나랏말싸미', reservationRate: '30', releaseDate: '2018-08-05'
  //   , posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/F5/A1A99E-025A-4874-B479-1597994D94A8.large.jpg'
  //   },
  //   {id: 11, age: 'age-12', name: '어벤져스: 엔드게임 선택', reservationRate: '30', releaseDate: '2018-08-05'
  //   , posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/01/3EA32B-AC6E-444E-ADD8-E3D8C05193CD.large.jpg'
  //   },
  //   {id: 12, age: 'age-12', name: '행복한 라짜로', reservationRate: '30', releaseDate: '2018-08-05'
  //   , posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/8B/AD4DE6-D90F-42AA-8BA8-ECF6126CA247.large.jpg'
  //   },
  //   {id: 13, age: 'age-all', name: '이웃집 토토로', reservationRate: '30', releaseDate: '2018-08-05'
  //   , posterUrl:'http://image2.megabox.co.kr/mop/poster/2019/DF/520A19-8CA5-47B8-B0BD-82FA80029FA4.large.jpg'
  //   }
  // ]

  movies;


  getMovies()  {
    this.bookingService.getAll()
    .subscribe(allMovies => this.movies = allMovies);
    console.log(this.movies);
  }

  // 포스터 클릭 시 새롭게 만들어질 배열, 영화의 이름이 들어감.
  selectMovie:object[] = [];
  selectPoster:HTMLElement[] = [];

  sortItems: SortItem[] = ['예매율순','가나다순','개봉일순'];
  sortState: SortItem = '예매율순';

  // 포스터를 클릭 했을 때 selectMovie 배열 안에 추가하고 다시 또 클릭하면 selectMovie 배열에서 삭제 또 그에 따른 배경색 변화와 최대 4개까지 선택 가능 기능
  addPoster(movie: object ,poster: HTMLElement) {
    if(poster.style.backgroundColor && this.selectMovie.length < 4) {
      this.selectMovie = [...this.selectMovie, movie];
      this.selectPoster = [...this.selectPoster, poster];
    } 
    else if (!poster.style.backgroundColor || this.selectMovie.length > 3) {
      this.selectMovie = this.selectMovie.filter(mov => mov !== movie);
      poster.style.backgroundColor = null;
      poster.lastElementChild.setAttribute('style', 'color: null');
    }

    if(this.selectMovie.length === 4 && !poster.style.backgroundColor) {
      this.bookingService.alertModalState = true;
    }
  }

  // selectMovie 배열의 요소로 이루어진 포스터 위 글(?)의 x 버튼 클릭 시 selectMovie 배열에서 요소가 삭제되고 배경색이 변함.
  deleteMovie(selected: object) {
    this.selectMovie = this.selectMovie.filter(mov => mov !== selected);
    
    this.selectPoster.forEach(li => {
      if(+li.id === selected["movie_id"]) {
        li.style.backgroundColor = null;
        li.lastElementChild.setAttribute('style', 'color: null');
      }
    })
  }
}