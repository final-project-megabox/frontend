import { HttpClient, HttpHeaders } from '@angular/common/http';

export class SeatService {
  normal = 0;
  youth = 0;
  favor = 0;

  selectSeat = [];

  constructor(private http: HttpClient) {}

  postMovie(schedule_id: number, seat_number = []) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'JWT ' + token);
    
    const payLoad = {
      schedule_id,
      seat_number,
      price: seat_number.length * 10000,
      st_count: seat_number.length
    };

    return this.http.post('http://megabox.hellocoding.shop//database/reservationSecond/', payLoad, { headers });
  }
}