import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class QuickBookingService {
  calendarModalState = false;
  movieModalState = false;
  theaterModalState = false;
  alertModalState = false;
  
  test = true;
  constructor(private http: HttpClient) { }
  
  ngOnInit() {}
  
  getAll() {
    return this.http.get(environment.appUrl);
  }
  
}
