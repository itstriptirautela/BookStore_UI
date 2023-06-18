import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  let service: UserService;
  let http: HttpClient;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const user = {
    UserName: '',
    Password: '',
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        FormsModule,
      ],
      declarations: [ LoginComponent ],
      providers: [UserService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = new UserService(http, router);
    component = new LoginComponent(service);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  xit('redirect to home page', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate').and.callThrough();
    component.onSubmit();

    expect(spy).toHaveBeenCalledWith(['Home']);
  });
  it('it should call the Onsubmit', () => {
   const spy = spyOn(component, 'onSubmit').and.callThrough();
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
    //  expect(component.onSubmit()).toHaveBeenCalled();
  });
});
