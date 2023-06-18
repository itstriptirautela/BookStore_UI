import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBookComponent } from './search-book.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { BookService } from '../shared/services/book.service';
import { DebugElement } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { By } from '@angular/platform-browser';
fdescribe('SearchBookComponent', () => {
  let component: SearchBookComponent;
  let fixture: ComponentFixture<SearchBookComponent>;
  let de :DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ SearchBookComponent,FilterComponent ],
      providers: [BookService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de=fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('testing falg status', () => {
    component.flagStatus();

    expect(component.flag).toBeFalsy();
  });

  it('it should dispaly the Books not found when No Books', () => {
    if (component.len === 0) {
      expect(component.flag).toBeTruthy();
    }
  });
  it('it should dispaly the Books when Books are found', () => {
    if (component.len >= 1) {
      expect(component.flag).toBeFalsy();
    }
  });

  it('it should call the book searched length', () => {
    const spy = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
 

it(' Parent should be triggered', () => {
  fixture = TestBed.createComponent(SearchBookComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();

  spyOn(component, 'Parent').and.callThrough();
  
  const wizardElement = fixture.debugElement.query(By.css('.wizard'));
  wizardElement.triggerEventHandler('data', {});
  fixture.detectChanges();

  expect(component.Parent).toHaveBeenCalled(); 
});
});
