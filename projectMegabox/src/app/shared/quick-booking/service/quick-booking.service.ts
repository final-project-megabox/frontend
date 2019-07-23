import { HttpClient } from '@angular/common/http';

import { Movies } from '../models/movies.interface';

import { environment } from 'src/environments/environment';

export class QuickBookingService {
  calendarModalState = false;
  movieModalState = false;
  theaterModalState = false;
  alertModalState = false;

  movies:Movies[]=[];
  selectMovie:Movies[]=[];
  
  test = true;
  constructor(private http: HttpClient) { }
  
  ngOnInit() {}
  
  getAll() {
    return this.http.get<Movies[]>(environment.appUrl);
  }
  
}
