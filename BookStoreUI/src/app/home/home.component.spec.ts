import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../shared/services/user.service';
import { Location } from '@angular/common';
import { HomeComponent } from './home.component';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;
  let location: Location;
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        FormsModule,
      ],
      declarations: [ HomeComponent ],
      providers: [UserService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    
    router = TestBed.get(Router); 
    location = TestBed.get(Location); 
    fixture = TestBed.createComponent(HomeComponent);
    router.initialNavigation();
    component = fixture.componentInstance;
    fixture.detectChanges();
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  xit('navigate to "home" takes you to /Home', fakeAsync(() => {
    router.navigate(['search']);
    tick();
    expect(location.path()).toBe('/Home');
  }));
});
