import { Injectable, EventEmitter, OnInit } from '@angular/core';

import { PreferTheater } from '../models/prefer-theater.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/core/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PreferTheatersService implements OnInit {
  constructor(private http: HttpClient, private auth: AuthService) {}

  ngOnInit() {}

  // 선호 영화관 커스텀 이벤트 생성
  preferTheaterUpDated: EventEmitter<any> = new EventEmitter();

  // 선호 영화관 커스텀 이벤트를 감지하는 메소드 정의
  preferChangeDetect() {
    this.preferTheaterUpDated.emit(this.choieces);
  }                                                                      
  

  getAll() {
    const token = `JWT ${localStorage.getItem('token')}`;
    const headers = new HttpHeaders().set('Authorization', token);

    return this.http.get<PreferTheater[]>('http://megabox.hellocoding.shop/accounts/updatePreferTheater/', { headers });
  }

  postPreferTheaters() {
    const token = `JWT ${localStorage.getItem('token')}`;
    const headers = new HttpHeaders().set('Authorization', token);

    const payload = {
      preferTheater: [
          { theater: this.theaterChoiceOne, region: this.regionChoiceOne},
          { theater: this.theaterChoiceTwo, region: this.regionChoiceTwo},
          { theater: this.theaterChoiceThree, region: this.regionChoiceThree}
      ]
  }
    this.http.post<PreferTheater[]>('http://megabox.hellocoding.shop//accounts/updateMyInfo/', payload, { headers }).subscribe();
  }

  deletePreferTheaters(delId: number) {
    const token = `JWT ${localStorage.getItem('token')}`;
    const headers = new HttpHeaders().set('Authorization', token);

    const payload = { region: "지역선택", theater: "영화관선택"};
  
    this.http.post<PreferTheater>('http://megabox.hellocoding.shop//accounts/updatePreferTheater/'+delId, payload, { headers }).subscribe(theater => 
    this.choieces = theater['preferTheater'].map(prefer => prefer.id === delId ? {...prefer, theater: '영화관선택', region: '지역선택'} : prefer ));
  }

  // 선호 영화관 배열에서 영화관선택을 제외한 결과를 담는 배열
  bowlPrefer;

  // 선호 영화관 모달창 띄우기, 닫기
  preferState = false;

  deletePreferState = false;

  // change 이벤트가 발생하면 지역 선택의 state를 변경하면서 지역에 맞는 도시들 만을 보여줌
  preferOneState;
  preferTwoState;
  preferThreeState;

  // 등록 버튼을 클릭하면 선택한 지역을 저장
  regionChoiceOne;
  regionChoiceTwo;
  regionChoiceThree;

  // change 이벤트가 발생하면 선택한 영화관 상태를 저장
  theaterOneState;
  theaterTwoState;
  theaterThreeState;

  // 등록 버튼을 클릭하면 선택한 극장을 저장
  theaterChoiceOne;
  theaterChoiceTwo;
  theaterChoiceThree;

  // 선택한 요소들 저장
  choieces: PreferTheater[] = [];

  // change 이벤트가 발생하면 선택한 지역을 저장
  preferRegionChoices = [];

  // change 이벤트가 발생하면 선택한 극장을 저장
  preferTheaterChoices = [];

  // 전체 극장 선택 경우의 수가 담겨 있는 배열
  ChoosedTheater: PreferTheater[] = [];
}