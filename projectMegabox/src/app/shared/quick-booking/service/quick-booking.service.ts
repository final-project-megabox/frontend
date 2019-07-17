import { HttpClient } from '@angular/common/http';

export class QuickBookingService {
  celendarModalState = false;
  movieModalState = false;
  theaterModalState = false;

  constructor(private http: HttpClient) { }

}
