import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MovieDetail } from '../models/rank-movie-interface';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {
  detailModalState = false;

  apiDetail = 'http://megabox.hellocoding.shop//database/movieDetail/?movie=';

  selectMovie:MovieDetail[] = [];

  constructor(private http: HttpClient) { }

  getDetail(id: number) {
    return this.http.get<MovieDetail[]>(`${this.apiDetail}${id}`);
  }

  // wishMovie() {
  //   const token = `JWT ${localStorage.getItem('token')}`;
  //   const headers = new HttpHeaders().set('Authorization', token);

  //   const payload = {
  //     "is_wished": "true"
  //   }

  //   return this.http.post('http://megabox.hellocoding.shop//database/checkwish/', payload, { headers}).subscribe();
  // }
}
