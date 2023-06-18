import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../shared/model/user.model';
import { HttpClient } from '@angular/common/http';

import { User } from 'src/user';
import { UserService } from '../shared/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private userService: UserService) { }
 
  user: User = {
    UserName: '',
    Password: '',
  };
  ngOnInit(): void {}
    errMsg = '';
    result: any;
 
  onSubmit() {
    this.userService.authenticate(this.user).subscribe(
      (res) => {
        this.userService.loginAgent(res, this.user.UserName);
        console.warn(res);
        this.result = res;
     
      },
      (err) => {
        console.log(err);
        this.errMsg = 'Username or Password is Incorrect';
      }
    );
  }
}
