import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { PreferTheatersService } from 'src/app/shared/prefer-theaters/services/prefer-theaters.service';

import { PasswordValidator } from './validators/password-validator';
import { BirthValidator } from './validators/birth-validator';
import { PhoneValidator } from './validators/phone-validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  userForm: FormGroup;

  constructor( private fb: FormBuilder, private preferTheaterService: PreferTheatersService, private http: HttpClient) { }

  ngOnInit() {
    this.getFreferTheater();

    this.userForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern('^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$')
      ]],

      passwordGroup: this.fb.group({
        password: ['', [
          Validators.required,
          Validators.pattern('^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$')
        ]],
        confirmPassword : ['', Validators.required]
      }, { validator: PasswordValidator.match}),

      name: ['', Validators.required],

      birthGroup: this.fb.group({
        year: [''],
        month: [''],
        day: ['']
      }, { validator: BirthValidator.birthValid}),

      phoneGroup: this.fb.group({
        firstNum: [''],
        middleNum: [''],
        lastNum: ['']
      }, { validator: PhoneValidator.phoneValid}),

      preferOne: ['지역선택'],
      preferTwo: ['지역선택'],
      preferThree: ['지역선택'],
      theaterOne: ['영화관선택'],
      theaterTwo: ['영화관선택'],
      theaterThree: ['영화관선택']
    });
  }

  getFreferTheater() {
    return this.preferTheaterService.ChoosedTheater = [
      { id: 0, theater: '영화관선택', region: '지역선택' },
      { id: 1, theater: '강남', region: '서울' }, 
      { id: 2, theater: '신촌', region: '서울' }, 
      { id: 3, theater: '코엑스', region: '서울' }, 
      { id: 4, theater: '고양스타필드', region: '경기' }, 
      { id: 5, theater: '해운대(장산)', region: '부산' }
    ]
  }

  confirmJoin() {
    const payload = {
      email: this.email.value,
      name: this.name.value,
      password: this.password.value,
      birthDate: this.year.value + '-' + this.month.value + '-' + this.day.value,
      phoneNumber: this.firstNum.value + '-' + this.middleNum.value + '-' + this.lastNum.value,
      preferTheater: [
        { id: 0, theater: this.preferOne.value, region: this.theaterOne.value },
        { id: 1, theater: this.preferTwo.value, region: this.theaterTwo.value },
        { id: 2, theater: this.preferThree.value, region: this.theaterThree.value }
      ]
    };
    console.log(payload);
    // this.http.post('http://megabox.hellocoding.shop/accounts/create/', payload).subscribe();
  }
  
  get email() {
    return this.userForm.get('email');
  }

  get passwordGroup() {
    return this.userForm.get('passwordGroup');
  }

  get password() {
    return this.userForm.get('passwordGroup.password');
  }
  
  get confirmPassword() {
    return this.userForm.get('passwordGroup.confirmPassword');
  }

  get name() {
    return this.userForm.get('name');
  }

  get birthGroup() {
    return this.userForm.get('birthGroup');
  }

  get year() {
    return this.userForm.get('birthGroup.year');
  }

  get month() {
    return this.userForm.get('birthGroup.month');
  }

  get day() {
    return this.userForm.get('birthGroup.day');
  }

  get phoneGroup() {
    return this.userForm.get('phoneGroup');
  }

  get firstNum() {
    return this.userForm.get('phoneGroup.firstNum');
  }

  get middleNum() {
    return this.userForm.get('phoneGroup.middleNum');
  }

  get lastNum() {
    return this.userForm.get('phoneGroup.lastNum');
  }

  get preferOne() {
    return this.userForm.get('preferOne');
  }

  get preferTwo() {
    return this.userForm.get('preferTwo');
  }

  get preferThree() {
    return this.userForm.get('preferThree');
  }

  get theaterOne() {
    return this.userForm.get('theaterOne');
  }

  get theaterTwo() {
    return this.userForm.get('theaterTwo');
  }

  get theaterThree() {
    return this.userForm.get('theaterThree');
  }

  // email 값
  emailVal:string;

  // email 선택지 창 열고 닫는 불리언 값
  emailRecommendation = false;

  // 웹사이트 이메일 주소
  emailAddress = ['naver.com','gmail.com','daum.net','hanmail.net','nate.com','hotmail.com','icloud.com'];

  // @ 입력 시 email 선택지 보여주기
  emailChoice(){
    const regxr = /@+[A-Z]+/gi;
    const atSign ='@';
    if(this.emailVal.includes(atSign)) {
      this.emailRecommendation = true;
    } else {
      this.emailRecommendation = false;
    }

    if(regxr.test(this.emailVal)) {
      this.emailRecommendation = false;
    }
  }

  // 마우스로 클릭 했을 시 추천 이메일 선택
  AddEmailClick(email: string) {  
    this.emailVal = this.emailVal + email;
    this.emailRecommendation = false;
  }

  // 엔터키 입력 시 추천 이메일 선택
  AddEmailEnter(email: string) {
    this.emailVal = this.emailVal + email;
    this.emailRecommendation = false;
  }

  @ViewChild("li", {static: false}) nameField: ElementRef;
  toList(): void {
    this.nameField.nativeElement.focus();
  }

  moveUp(li): void {
    li.previousElementSibling.focus();
  }

  moveDown(li): void {
    li.nextElementSibling.focus();
  }

  regionSelectOne = '지역선택';
  regionSelectTwo = '지역선택';
  regionSelectThree = '지역선택';
}
