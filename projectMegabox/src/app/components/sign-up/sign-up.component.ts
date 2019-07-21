import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern('^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$')
      ]],

      passwordGroup: this.fb.group({
        password: ['', [
          Validators.required,
          Validators.pattern('^[A-Za-z0-9]{6,12}$')
        ]],
        confirmPassword : ['']
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
}
