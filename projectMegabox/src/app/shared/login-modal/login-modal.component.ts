import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  userForm: FormGroup;
  inputId = '';
  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      userId: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$')
      ]),
      userPassword: new FormControl('', [
        Validators.required,
        Validators.pattern('.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*')
      ])
    });

    this.getCookie();
  }

  get userId() {
    return this.userForm.get('userId');
  }

  get userPassword() {
    return this.userForm.get('userPassword');
  }

  submit(state: boolean) {
    if (!state) {
      console.log('아이디 안함 전송');
      this.setCookie('', 0);
      this.userForm.reset();
    } else {
      console.log('아이디 했음 전송', this.userForm.value);
      this.setCookie(this.userId.value, 7);
      this.userForm.reset();
    }
  }

  setId(value: string) {
    if (!value.length) return null;

    return value;
  }

  setCookie(value: string, day: number) {
    if (!day) {
      const cookies = document.cookie.split('; ');

      cookies.forEach(item => {
        if(item.split('id=').length !== 2) {
          document.cookie = '';
        }
      })
    }
    const today = new Date();

    today.setDate(today.getDate() + day);
    document.cookie = `id=${escape(value)}; path=/; expires="${today.toUTCString}";`
  }

  getCookie() {
    if (!document.cookie.length) return;

    const cookies = document.cookie.split('; ');

    cookies.forEach(item => {
      if(item.split('id=').length !== 2) return;

      this.inputId = item.split('id=')[1];
    });
  }
}
