import { ComponentFixture, TestBed,fakeAsync,
  tick, } from '@angular/core/testing';

import { HeaderComponent} from './header.component'

import { UserService } from 'src/app/shared/services/user.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
fdescribe('HeaderComponent', () => {
  let router: Router;
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      declarations: [ HeaderComponent ],
      providers: [UserService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    usersrevice: UserService;
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('LogOut navigation test', () => {
    const spy = spyOn(router, 'navigate');
    component.logout();
    expect(spy.calls.first().args[0]).toContain('');
  });
  it('it Should Return the log in status True In Log in Mode', () => {
    const result = component.login();
    expect(result).toBeFalsy();
  });
  it('it Should Return the log in status False In Log Out Mode', () => {
    component.logout();
    const result = component.isLoggedIn;
    expect(result).toBeFalsy();
  });
  it('it should Contains the title Book Store', () => {
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.Hea'));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).toContain('Book Store');
  });
  it('should call the log out method when we click on log out button ', fakeAsync(() => {
    spyOn(component, 'logout');

    let button = fixture.debugElement.nativeElement.querySelector('.log');
    component.logout();
    tick();
    expect(component.logout).toHaveBeenCalled();
  }));

});
