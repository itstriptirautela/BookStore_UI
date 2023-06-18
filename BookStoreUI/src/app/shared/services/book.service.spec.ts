import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './book.service';
import { RouterTestingModule } from '@angular/router/testing';
fdescribe('BookServiceService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
      providers: [BookService],
    });
    service = TestBed.inject(BookService);
  });
  let data = {
    "bookId": 4,
    "bookTitle": " Ikigai",
    "author": "Francesc Miralles and Hector Garcia",
    "description": "Ikigai explains how you can live a longer and happier life by having a purpose, eating healthy, and not retiring.",
    "category": "Romance",
    "bookPrice": 400,
    "publisher": "Random House UK",
    "isDeleted": false,
    "numberOfCopies": 300000,
    "userId": 1,
   
  }
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('getting all Books', () => {
    service.getAllBooks().subscribe((value) => {
      expect(value).toBeTruthy();
    });
  });
  it('getting Boks By Id ', () => {
    service.getBookById(4).subscribe((value) => {
      expect(value).toEqual(data);
    });
});  
it('getting Searched  Books', () => {
  service.GetSearchedBooks(data, '-1', 1).subscribe((value) => {
    expect(value).toEqual(data);
  });
});
it('getting  books length', () => {
  service.GetSearchedBookslength(data).subscribe((value) => {
    expect(value).toBeGreaterThan(0);
  });
});
});
