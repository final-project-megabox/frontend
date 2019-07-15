import { HttpClient } from '@angular/common/http';

export class QuickBookingService {
  celendarModalState = false;
  movieModalState = false;

  constructor(private http: HttpClient) { }

}
