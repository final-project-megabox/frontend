import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootService {
  quickBookingModalState = false;
  loginModalState = false;
  myPageModal = false;
  requiredLogin = false;
  welcomeState = false;
  
  constructor() {
  }

}
