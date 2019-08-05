import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {
  detailModalState = false;

  apiDetail = 'http://megabox.hellocoding.shop//database/movieDetail/?movie=';

  selectMovie = [];

  constructor(private http: HttpClient) { }

  getDetail(id: number) {
    return this.http.get(`${this.apiDetail}${id}`);
  }
}
