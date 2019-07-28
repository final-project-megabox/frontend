import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PasswordValidator } from './validators/password-validator';
import { BirthValidator } from './validators/birth-validator';
import { PhoneValidator } from './validators/phone-validator';
import { PreferTheatersService } from 'src/app/shared/prefer-theaters/prefer-theaters.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  userForm: FormGroup;

  constructor( private fb: FormBuilder, private preferTheaterService: PreferTheatersService) { }

  ngOnInit() {
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
      }, { validator: PhoneValidator.phoneValid})
    });
  }

  test() {
    alert('OK');
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

  get phoneGroup() {
    return this.userForm.get('phoneGroup');
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
}
