// import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { RankMovie } from '../models/rank-movie-interface';

// @Injectable({
//   providedIn: 'root'
// })
export class MovieRankService {

  RankMovies: RankMovie[] = [];

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<RankMovie[]>(environment.appUrl);
  }
}
