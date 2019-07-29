import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferTheatersService {

  constructor() { }

  // 선호 영화관 모달창 띄우기, 닫기
  preferState = false;

  // 지역 선택의 state를 변경하면서 지역에 맞는 도시들 만을 보여줌.
  preferOneState = '지역선택';
  preferTwoState = '지역선택';
  preferThreeState = '지역선택';

  // 선택한 지역의 요소를 저장
  regionChoiceOne: string;
  regionChoiceTwo: string;
  regionChoiceThree: string;

  // 선택한 극장의 요소를 저장
  theaterChoiceOne: string;
  theaterChoiceTwo: string;
  theaterChoiceThree: string;

  // 확인 버튼을 누르면 선택한 지역을 배열 형태로 저장
  preferRegionChoices = [];

  // 확인 버튼을 누르면 선택한 극장을 배열 형태로 저장
  preferTheaterChoices = [];

  // 전체 극장 선택 경우의 수가 담겨 있는 배열
  ChoosedTheater = [];
}
