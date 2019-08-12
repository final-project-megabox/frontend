import { Theater } from './../../main-page/notice/models/theater.type';
import { PhoneValidator } from './../../sign-up/validators/phone-validator';
import { BirthValidator } from './../../sign-up/validators/birth-validator';
import { PasswordValidator } from './../../sign-up/validators/password-validator';
import { AuthService } from 'src/app/core/service/auth.service';

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PreferTheatersService } from 'src/app/shared/prefer-theaters/services/prefer-theaters.service';
import { Userinfo } from '../userinfo';



@Component({
  selector: 'app-mypage-modify',
  templateUrl: './mypage-modify.component.html',
  styleUrls: ['./mypage-modify.component.scss']
})
export class MypageModifyComponent implements OnInit {
  TOKEN_NAME = 'token';
  loginState = false;

  userForm: FormGroup;
  dateCutting = [];


  constructor(public fb: FormBuilder, public preferTheaterService: PreferTheatersService, public http: HttpClient, public auth: AuthService) { }

  userinfos: Userinfo[] = [
    // tslint:disable-next-line: max-line-length
    //{ email: 'immsee098@gmail.com', name: '윤해서', birthDate: '1995-04-22', phoneNumber: '010-2605-7621', PreferTheater:'상봉', getPreferList: '어쩌고'  }
  ];

  userinfo = [...this.userinfos];

  myemail;
  myname;
  mybirthdate;
  myphonenumber;

  ngOnInit() {

    this.getMyinfo();
    // this.getFreferTheater();

    this.userForm = this.fb.group({
      email: [
        '' ,
      //   [
      //   Validators.required,
      //   Validators.pattern('^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$')
      // ]
    ],

      passwordGroup: this.fb.group({
        password: ['', [
          Validators.required,
          Validators.pattern('^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$')
        ]],
        confirmPassword : ['', Validators.required]
      }, { validator: PasswordValidator.match}),

      name: ['',
      // Validators.required
    ],

      birthGroup: this.fb.group({
        year: [''],
        month: [''],
        day: ['']
      },
      // { validator:
      //   BirthValidator.birthValid}
        ),

      phoneGroup: this.fb.group({
        firstNum: ['010'],
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

  getMyinfo() {
    const token = `JWT ${localStorage.getItem('token')}`;

    const headers = new HttpHeaders().set('Authorization', token);

    const aa = this.http.get<Userinfo>('http://megabox.hellocoding.shop//accounts/showMyInfo/', {headers}).subscribe(
      datas => this.userinfos = [datas],
    );
    console.log(this.userinfos);
   }


   insertEmail() {
     this.myemail = this.userinfos[0].email;
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
    const token = `JWT ${localStorage.getItem('token')}`;

    const headers = new HttpHeaders().set('Authorization', token);
    const payload = {

      email: this.email.value,
      name: this.name.value,
      password: this.password.value,
      birthDate: this.year.value + '-' + this.month.value + '-' + this.day.value,
      phoneNumber: this.firstNum.value + '-' + this.middleNum.value + '-' + this.lastNum.value,
      preferTheater: [
        { region: this.preferOne.value, theater: this.theaterOne.value },
        { region: this.preferTwo.value, theater: this.theaterTwo.value },
        { region: this.preferThree.value, theater: this.theaterThree.value }
      ]
    };

    this.http.post('http://megabox.hellocoding.shop//accounts/updateMyInfo/', payload, { headers }).subscribe();
    // this.root.welcomeState = true;
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

  //@ 입력 시 email 선택지 보여주기
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

  duplicateOne = '영화관선택';
  duplicateTwo = '영화관선택';
  duplicateThree = '영화관선택';

  // 중복검사
  DuplicateCheck() {
    if(this.duplicateOne === '영화관선택' && this.duplicateTwo === '영화관선택' ||
       this.duplicateOne === '영화관선택' && this.duplicateThree === '영화관선택' ||
       this.duplicateTwo === '영화관선택' && this.duplicateThree === '영화관선택'
    )
    return

    if(this.duplicateOne === this.duplicateTwo || this.duplicateOne === this.duplicateThree || this.duplicateTwo === this.duplicateThree) {
      alert('이미 선택하신 영화관 입니다.');
    }
  }
}
