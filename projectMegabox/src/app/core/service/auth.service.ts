import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/token.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  TOKEN_NAME = 'token';
   
  constructor(private http: HttpClient) { }

  confirmUser(payLoad) {
    return this.http.post<Token>('http://megabox.hellocoding.shop//api/token/', payLoad)
  }

  getInfo() {
    // const token = JSON.parse(localStorage.getItem(this.TOKEN_NAME));
    // const headers = new HttpHeaders().set('TOKEN', token);

    // return this.http.get('http://megabox.hellocoding.shop/v1/Myinfo', { headers });
  }
}
