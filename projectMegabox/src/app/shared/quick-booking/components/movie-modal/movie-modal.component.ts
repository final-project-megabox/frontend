import { Component, OnInit } from '@angular/core';

import { QuickBookingService } from '../../service/quick-booking.service';

import { SortItem } from '../../models/sortItem.type';

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