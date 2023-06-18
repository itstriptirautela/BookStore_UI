import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../shared/services/user.service';
import { By } from '@angular/platform-browser';
import { RegisterComponent } from './register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

fdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  button:HTMLElement;
  http:HttpClient;
  let user={};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule,ReactiveFormsModule,FormsModule, RouterTestingModule.withRoutes([]),],
      declarations: [ RegisterComponent ],
      providers: [UserService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    //component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('it should Contains the Button Text Register when not Logged in', () => {
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.btnSubmit'));
    let el: HTMLElement = de.nativeElement;

    if (component.LoggedInCheack == false) {
      expect(el.innerText).toContain('Register');
    }
  });

  it('it should Contains the Button Text Update when it is Logged in', () => {
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.btnSubmit'));
    let el: HTMLElement = de.nativeElement;
    if (component.LoggedInCheack == true) {
      expect(el.innerText).toContain('Update');
    }
  });

  it('it Show the Message when we click Register or update', () => {
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.btnSubmit'));
    let el: HTMLElement = de.nativeElement;
    if (component.errMsg.length > 0) {
      expect(el.innerText).toBeTruthy();
    }
  });

  it('it should call the register Method', () => {
    expect(component.RegisterUser(component.user)).toBeUndefined();
  });
});

