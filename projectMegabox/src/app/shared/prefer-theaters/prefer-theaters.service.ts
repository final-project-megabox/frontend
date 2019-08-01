import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferTheatersService {
  constructor() { }

  // 선호 영화관 모달창 띄우기, 닫기
  preferState = false;

  // change 이벤트가 발생하면 지역 선택의 state를 변경하면서 지역에 맞는 도시들 만을 보여줌
  preferOneState = '지역선택';
  preferTwoState = '지역선택';
  preferThreeState = '지역선택';

  // 등록 버튼을 클릭하면 선택한 지역을 저장
  regionChoiceOne = '지역선택';
  regionChoiceTwo = '지역선택';
  regionChoiceThree = '지역선택';

  // change 이벤트가 발생하면 선택한 영화관 상태를 저장
  theaterOneState = '영화관선택';
  theaterTwoState = '영화관선택';
  theaterThreeState = '영화관선택';

  // 등록 버튼을 클릭하면 선택한 극장을 저장
  theaterChoiceOne = '영화관선택';
  theaterChoiceTwo = '영화관선택';
  theaterChoiceThree = '영화관선택';

  // 선택한 요소들 저장
  choieces = [];

  // 확인 버튼을 누르면 선택한 지역을 배열 형태로 저장
  preferRegionChoices = [];

  // 확인 버튼을 누르면 선택한 극장을 배열 형태로 저장
  preferTheaterChoices = [];

  // 전체 극장 선택 경우의 수가 담겨 있는 배열
  ChoosedTheater = [];
}