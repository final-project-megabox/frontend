import { Userinfo } from './../../userinfo';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


// import 'rxjs/add/operator/toPromise';


// @Injectable({
//   providedIn: 'root'
// })
// export class MypageServiceService {

//   constructor() { }
// }

@Injectable()
export class  MypageServiceService {
  private headers = new Headers({'Content-Type' : 'application/json'});
  private apiUser = `${environment.apiUser}/auth`;

  constructor(
    private http: HttpClient,
  ) {}

  // getUsers(): Promise<Userinfo[]> {
  //   return this.http.get(this.apiUser)
  //               .toPromise()
  //               .then(response => response.json())
  // }

}
