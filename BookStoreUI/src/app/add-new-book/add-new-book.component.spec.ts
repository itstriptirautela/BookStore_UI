import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed,fakeAsync, tick } from '@angular/core/testing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { BookService } from '../shared/services/book.service';

import { AddNewBookComponent } from './add-new-book.component';

fdescribe('AddNewBookComponent', () => {
  let component: AddNewBookComponent;
  let fixture: ComponentFixture<AddNewBookComponent>;
  let service: BookService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        FormsModule,
      ],
      declarations: [ AddNewBookComponent ],
      providers: [BookService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBookComponent);
    component = new AddNewBookComponent(service);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('it should Contains the Button Text AddBook when Logged in as Admin', () => {
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('#btnSubmit'));
    let el: HTMLElement = de.nativeElement;
     expect(el.innerText).toContain('AddBook');
    
  });
  it('it Show the Message when we click AddBook or update', () => {
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.msg'));
    let el: HTMLElement = de.nativeElement;
    if (component.errMsg.length > 0) {
      expect(el.innerText).toBeTruthy();
    }
  });
 /*  it('it should call the AddBook', () => {
    const spy = spyOn(component, 'AddBook').and.callThrough();
     component.AddBook();
     expect(spy).toHaveBeenCalled();
    
   }); */
   it('it should call the AddBook', () => {
     spyOn(console, 'log');
     const spy = spyOn(component, 'AddBook').and.callThrough();
     component.AddBook();
     fixture.detectChanges();
     expect(spy).toHaveBeenCalled();

   });
});
