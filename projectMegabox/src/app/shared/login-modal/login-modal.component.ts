import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  userForm: FormGroup;
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

    console.log(this.userForm)
  }

  get userId() {
    return this.userForm.get('userId');
  }

  get userPassword() {
    return this.userForm.get('userPassword');
  }

  submit() {
    console.log(this.userForm.value)
    this.userForm.reset();
  }

}
