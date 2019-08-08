import { HttpClient, HttpHeaders } from '@angular/common/http';

export class SeatService {
  seatAlertState = false;
  completeAlertState = false;
  paymentModalState = false;

  _normal = 0;
  _youth = 0;
  _favor = 0;

  price: number;
  st_count: number;

  totalPeople: number;

  selectSeat = [];

  set normal(value: number) {
    this._normal = value;
    this.totalPeople = this.normal + this.youth + this.favor;
  }

  set youth(value: number) {
    this._youth = value;
    this.totalPeople = this.normal + this.youth + this.favor;
  }
  
  set favor(value: number) {
    this._favor = value;
    this.totalPeople = this.normal + this.youth + this.favor;
  }

  get normal() {
    return this._normal;
  }

  get youth() {
    return this._youth;
  }
  
  get favor() {
    return this._favor;
  }

  constructor(private http: HttpClient) {}

  postMovie(schedule_id: number, seat_number = []) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'JWT ' + token);
    this.st_count =  seat_number.length;
    
    const payLoad = {
      schedule_id,
      seat_number,
      price: this.price,
      st_count: this.st_count
    };

    return this.http.post('http://megabox.hellocoding.shop//database/reservationSecond/', payLoad, { headers });
  }
}