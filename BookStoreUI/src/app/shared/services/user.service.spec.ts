import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

 import { HttpClient, HttpClientModule } from '@angular/common/http'; 
 import { RouterTestingModule } from '@angular/router/testing';
 import { Component } from '@angular/core';


import { UserService } from './user.service';

fdescribe('UserService', () => {
  let service: UserService;
 const user = {
    UserName: '',
     Password: '',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
     providers: [UserService],
  });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
   it('Log in should return value from observable', () => {
    service.authenticate(user).subscribe((value) => {
      expect(value).toBeTrue();
     });
   });

  it('should clear the Loggeed in status when we logged out', () => {
     service.Logout();
     expect(localStorage.getItem('Authorization')).toBe(null);
   });
  it('should Not return the UserId when not logged in', () => {
    expect(localStorage.getItem('UserId')).toBe(null);
   });
  it('should isloggedin be false when log out', () => {
   service.Logout();
   const islog = service.isloggedInCheack();
   expect(islog).toBeFalsy();
  });

   it('should Not return the UserName when not logged in', () => {
  
    expect(localStorage.getItem('UserName')).toBe(null);
   });
   it('should Not return the Role when not logged in', () => {
    expect(localStorage.getItem('Role')).toBe(null);
  });
});

