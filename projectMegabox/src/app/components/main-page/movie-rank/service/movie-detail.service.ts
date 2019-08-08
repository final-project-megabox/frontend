import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MovieDetail } from '../models/rank-movie-interface';
import { Movies } from 'src/app/shared/quick-booking/models/movies.interface';
import { Token } from 'src/app/core/models/token.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {
  detailModalState = false;

  apiDetail = 'http://megabox.hellocoding.shop//database/movieDetail/?movie=';

  selectMovie: MovieDetail[] = [];

  constructor(private http: HttpClient) { }

  getDetail(id: number) {
    const token = `JWT ${localStorage.getItem('token')}`;
    const headers = new HttpHeaders().set('Authorization', token);

    return this.http.get<MovieDetail[]>(`${this.apiDetail}${id}`, { headers });
  }

  wishMovie(id: number) {
    const token = `JWT ${localStorage.getItem('token')}`;
    const headers = new HttpHeaders().set('Content-type', 'application/json').set('Authorization', token);

    const payload = {
      "movie_id": id
    }

    return this.http.post<Movies>('http://megabox.hellocoding.shop//database/checkwish/?movie=${id}', payload, { headers });
  }
}
