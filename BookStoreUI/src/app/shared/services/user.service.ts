import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { User } from 'src/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) {}
  token = localStorage.getItem('Authorization');
  isLoggedIn = this.token == null || this.token == '' ? false : true;
  
 loginAgent(res: any, agent: string) {
    localStorage.setItem('Authorization', res.access_token);
    console.log(res.access_token);
    localStorage.setItem('Role', res.role);
    localStorage.setItem('UserName', res.userName);
    localStorage.setItem('UserId', res.userId);
    localStorage.setItem('UserEmail', res.email);
   
    console.warn(res.access_token);
    this.isLoggedIn = true;
    this.router.navigate(['/Home']);
  }
  authenticate(logincredential: User) {
    return this.http.post<any>(
      'https://localhost:7095/api/User/Login',
      logincredential
    );
  }

  isloggedInCheack() {
    return this.isLoggedIn;
  }
  Register(Userdata: any){
    console.warn(Userdata);
    return this.http.post('https://localhost:7095/api/User/Register', Userdata);
    }
    Id:any='';
  updateUser(data : any){
    console.warn(data);
    this.Id = this.getUserId();
    console.warn(this.Id);
    return this.http.put('https://localhost:7095/api/User/UpdateUserDetails?UserId=' +this.Id, data);
   
    
  }
  getUserName() {
    if (localStorage.getItem('UserName')) {
      return localStorage.getItem('UserName');
    }
    return 'NotLoggedIN';
  }

  getUserId() {
    if (localStorage.getItem('UserId')) {
      return localStorage.getItem('UserId');
    }
    return 'NotLoggedIN';
  }
  getRole() {
    if (localStorage.getItem('Role')) {
      return localStorage.getItem('Role');
    }
    return 'NotLoggedIN';
  }
  Logout() {
    localStorage.removeItem('Authorization');

    this.isLoggedIn = false;
    this.router.navigate(['']);
  }
  getUser(){
    return this.http.get<any>('https://localhost:7095/api/User/GetUserDetails')
    .pipe(map((res=>{
      return res;
    })))
  }
 
}
