import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
