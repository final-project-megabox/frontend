import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { RootService } from 'src/app/core/service/root.service';
import { MovieDetailService } from '../service/movie-detail.service';
import { QuickBookingService } from 'src/app/shared/quick-booking/service/quick-booking.service';

import { MovieDetail, RankStar } from '../models/rank-movie-interface';
import { Movies } from 'src/app/shared/quick-booking/models/movies.interface';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input() detailMovie: MovieDetail;

  movies: Movies[];
  
  rankMovie = this.rankService.movies;
  selectMovie = this.rankService.selectMovie;
  
  tipClick = false;

  RankStars: RankStar[];

  constructor(
    public movieDetailService: MovieDetailService,
    public rootService: RootService,
    public rankService: QuickBookingService
  ) { }

  ngOnInit() {
    this.RankStars = [
      { id: 0, starRate: 1, starContent: '괜히 봤어요' },
      { id: 1, starRate: 2, starContent: '기대하진 말아요' },
      { id: 2, starRate: 3, starContent: '무난했어요' },
      { id: 3, starRate: 4, starContent: '기대해도 좋아요!' },
      { id: 4, starRate: 5, starContent: '너무 멋진 영화였어요!' }
    ]
  }

  @ViewChild('galleryTop', { static: true }) galleryTop;
  @ViewChild('galleryThumbs', { static: true }) galleryThumbs;
  isOpen = false;

  galleryTopConfig: SwiperConfigInterface = {
    spaceBetween: 10,
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  };
  galleryThumbsConfig: SwiperConfigInterface = {
    spaceBetween: 10,
    slidesPerView: 9,
    centeredSlides: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
  };

  ngAfterViewInit() {
    this.galleryTop.nativeElement.swiper.controller.control = this.galleryThumbs.nativeElement.swiper;
    this.galleryThumbs.nativeElement.swiper.controller.control = this.galleryTop.nativeElement.swiper;
  }
  
  ngOnChanges() {
  }
  
  closeDetail() {
    setTimeout(() => {
      this.movieDetailService.detailModalState = false;
    }, 1);
  }

  descending(key: string) {
    return function(a: Movies, b: Movies) {
      return a[key] < b[key] ? 1 : (a[key] > b[key] ? -1 : 0);
    }
  }

  ratingNow(detailMovie) {
    return this.rankMovie.sort(this.descending('booking_rate')).findIndex(i => i['booking_rate'] === detailMovie['booking_rate'])+1;
  }

  reservationMovie(detailSelect) {
    this.rankService.selectMovie = [detailSelect];
    this.rootService.quickBookingModalState = true;
  }

  toolTip() {
    this.tipClick = !this.tipClick;
  }

  wishMovies;
  movieInfo ;
  myWishMovie(detailMovie) {
    this.movieInfo = this.rankMovie.filter(movie => movie.title === detailMovie.title)
    this.movieDetailService.wishMovie(this.movieInfo[0]['movie_id']).subscribe(res => {
      this.wishMovies = res;
    })
  }

}
