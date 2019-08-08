
import { AuthService } from './../../../core/service/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Userinfo, Watchedmovie, Wishmovie } from '../userinfo';

@Component({
  selector: 'app-mypage-moviestory',
  templateUrl: './mypage-moviestory.component.html',
  styleUrls: ['./mypage-moviestory.component.scss']
})
export class MypageMoviestoryComponent implements OnInit {

  userinfos: Userinfo[] = [
    // tslint:disable-next-line: max-line-length
    // { email: 'immsee098@gmail.com', name: '윤해서', birthDate: '1995-04-22', phoneNumber: '010-2605-7621', PreferTheater:'상봉', getPreferList: '어쩌고', last_login:  }
  ];

  mymovieTab = '보고싶어';

  wishmovieList: Wishmovie[] = [];
  watchedmovieList: Watchedmovie[] = [];

  constructor(private http: HttpClient, private auth: AuthService) { }

  ngOnInit() {
  }

  getWishMovieConfig() {
    const token = `JWT ${localStorage.getItem('token')}`;

    const headers = new HttpHeaders().set('Authorization', token);

    const aa = this.http.get<Wishmovie>('http://megabox.hellocoding.shop//database/showWishMovies/', {headers}).subscribe(
      data => this.wishmovieList = [data]
    );
    console.log(this.wishmovieList);
   }

   getWatchedMovieConfig() {
    const token = `JWT ${localStorage.getItem('token')}`;

    const headers = new HttpHeaders().set('Authorization', token);

    const bb = this.http.get<Watchedmovie>('http://megabox.hellocoding.shop//database/showWishMovies/', {headers}).subscribe(
      data => this.watchedmovieList = [data]
    );
    console.log(this.watchedmovieList);
   }




  tabActive(event) {
    console.log(event);
    if (event == this.mymovieTab) { return; }

    if (event == '보고싶어') {
      this.mymovieTab = '보고싶어';
    }

    if (event == '본영화') {
      this.mymovieTab = '본영화';
    }
  }

}
