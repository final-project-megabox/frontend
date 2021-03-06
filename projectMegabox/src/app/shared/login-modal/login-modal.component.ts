import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RootService } from '../../core/service/root.service';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  userForm: FormGroup;
  inputId = '';
  checked = false;
  failLogin = false;
  loginState = false;
  userEmail: string;
  constructor(public rootService: RootService, public authService: AuthService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      email: new FormControl(this.inputId, [
        Validators.required,
        Validators.pattern('[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$')
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$')
      ])
    });

    this.getUserId();
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  loginSubmit(payLoad) {
    this.authService.confirmUser(payLoad)
      .subscribe(login => {
        console.log(login)
        if (this.checked) {
          localStorage.setItem('token', login.token);
          localStorage.setItem('id', login.user);
          this.userForm.reset();
        } else {
          localStorage.setItem('token', login.token);
          this.userForm.reset();
        }
        localStorage.setItem('userName', login.name);
        this.authService.loginState = true;
        window.location.reload();
      }, error => {
        this.failLogin = true;
      })
  }

  getUserId() {
    if (!localStorage.getItem('id')) return;

    this.inputId = localStorage.getItem('id');
    this.checked = true;
  }

  // 아이디 저장 체크 상태
  event() {
    this.checked = !this.checked;
  }
}
