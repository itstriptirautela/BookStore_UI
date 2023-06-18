import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
// import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  AddBook(BookData: any) {
    console.warn(BookData);
    console.warn(localStorage.getItem('Authorization'));
    return this.http.post('https://localhost:7095/api/Book/AddBook', BookData, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('Authorization'),
      }),
    });
  }
  getAllBooks() {

    return this.http.get('https://localhost:7095/api/Book/ViewBooks');
   
  }
  
  getBookById(id: any) {
    return this.http.get('https://localhost:7095/api/Book/ViewBooksById?Id=' + id);
  }
  GetSearchedBooks(data: any, sorting: any, pageno: any = 1) {
    var string = '?sort=' + sorting;

    if (data.bookTitle != '') string = string + '&bookTitle=' + data.bookTitle;

    if (data.author != '')
      string = string + '&author=' + data.author;

    if (data.bookCategory != 'Any') string = string + '&bookCategory=' + data.bookCategory;

    if (data.bookPrice) string = string + '&price=' + data.bookPrice;

    if (data.publisher != '') string = string + '&publisher=' + data.publisher;

    string = string + '&pageno=' + pageno;

    return this.http.get(
      'https://localhost:7095/api/Book/GetSearchedBooks' + string
    );
  }
  GetSearchedBookslength(data: any) {
    var string = '?';
    if (data.bookTitle != '') string = string + '&bookTitle=' + data.bookTitle;

    if (data.author != '')
      string = string + '&author=' + data.author;

    if (data.bookCategory != 'Any') string = string + '&bookCategory=' + data.bookCategory;

    if (data.bookPrice) string = string + '&price=' + data.bookPrice;

    if (data.publisher != '') string = string + '&publisher=' + data.publisher;

    return this.http.get(
      'https://localhost:7095/api/Book/NumberOfSearchedProperties' + string
    );
  }
 
  deleteBook(bookId:any)
  {
    return this.http.delete(`https://localhost:7095/api/Book/DeleteBook?BookId=${bookId}`)
    .pipe( map((res:any)=>{
     
      
      return res;
      }))
  } 
}