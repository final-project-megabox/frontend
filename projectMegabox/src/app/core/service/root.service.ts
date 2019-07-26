import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootService {
  quickBookingModalState = true;
  loginModalState = false;
  
  constructor() { }

}
