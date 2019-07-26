import { Component, OnInit } from '@angular/core';

import { QuickBookingService } from '../../service/quick-booking.service';

import { Movies } from '../../models/movies.interface';
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
    this.getTitle();
  }

  sortItems: SortItem[] = ['예매율순','가나다순','개봉일순'];
  sortState: SortItem = '예매율순';
  
  // 서버에서 영화 정보 데이터를 받아옴.
  getMovies() {
    this.bookingService.getAll()
    .subscribe(allMovies => {
      this.bookingService.movies = allMovies.map(movie => {
        return this.bookingService.selectMovie.some(selected => movie.movie_id === selected.movie_id) ?  {...movie, selected: true} : movie;
      })
    })
  }

  // 영화 title을 삭제하고 취소 버튼을 누른 후 다시 들어와도 title이 보이게 하기 위한 함수
  getTitle() {
    this.bookingService.selectTitle = this.bookingService.selectMovie.map(selected => selected.title);
  }

  // 포스터를 클릭 했을 때 selectMovie 배열 안에 추가하고 다시 또 클릭하면 selectMovie 배열에서 삭제 또 그에 따른 배경색 변화와 최대 4개까지 선택 가능 기능
  addPoster(movie: Movies) {
    if (movie.selected && this.bookingService.selectTitle.length < 4) {
      this.bookingService.selectTitle = [...this.bookingService.selectTitle, movie.title];
    } 
    else if (!movie.selected || this.bookingService.selectTitle.length < 4) {
      this.bookingService.selectTitle = this.bookingService.selectTitle.filter(mov => mov !== movie.title);
    }
    else {
      this.bookingService.movies = this.bookingService.movies.map(video => {
        return video.title === movie.title ? {...video, selected: false} : video
      })
      this.bookingService.alertModalState = true;
    }
  }

  // selectMovie 배열의 요소로 이루어진 포스터 위 글(?)의 x 버튼 클릭 시 selectMovie 배열에서 요소가 삭제되고 배경색이 변함.
  deleteMovie(selected: string) {
    this.bookingService.selectTitle = this.bookingService.selectTitle.filter(mov => mov !== selected);

    this.bookingService.movies = this.bookingService.movies.map(video => {
      return video.title === selected ? {...video, selected: false} : video
    })
  }

  // 확인 버튼
  confirmSelect() {
    this.bookingService.selectMovie = this.bookingService.movies.filter(movie => {
       return movie.selected === true;
    })
    this.bookingService.movieModalState = false; 
    this.bookingService.selectedMovies = true;
    this.bookingService.addPlusButton();
  }

  // 취소 버튼
  cancelSelect() {
    this.bookingService.movieModalState = false;
  }
}