import { HttpClient } from '@angular/common/http';
import { Days } from '../models/days.interface';

export class QuickBookingService {
  calendarModalState = false;
  movieModalState = false;
  theaterModalState = false;
  alertModalState = false;
  
  test = true;
  constructor(private http: HttpClient) { }
  
  ngOnInit() {}
  
  
}
