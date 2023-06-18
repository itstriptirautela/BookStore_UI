import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/services/book.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  Books: any;
  contentArray: any;
  returnedArray: any;
  bookCategory = '';
  bookTitle = '';
  sortdata: any = '';
  searchText: string = '';
  sorting: any = '-1';
  nameSearch: string = '';
  count: any;
  public filterdata = '';
  pages: any;
  flag = false;
  len: any;

  constructor(private bookService : BookService) {}

  childData: any = {
    bookCategory: '',
    bookTitle: '',
    author: '',
    price: '',
    publisher:'',
  
  };
  Parent(data: any) {
    this.childData = data;
    console.log(this.childData);
    this.bookService
      .GetSearchedBooks(this.childData, this.sorting)
      .subscribe((result) => {
        this.Books = result;
        this.len = this.Books.length;
        this.flagStatus();
        console.log(result);
      });

    this.bookService
      .GetSearchedBookslength(this.childData)
      .subscribe((result) => {
        this.count = result;

        this.pages = (this.count * 6) / 6;
      });
  }

  pageChanged(event: PageChangedEvent) {
    this.bookService
      .GetSearchedBooks(this.childData, this.sorting, event.page)
      .subscribe((result) => {
        this.Books = result;
        this.flagStatus();
      });
  }

  ngOnInit(): void {
    // this.bookService.getAllBooks().subscribe((data)=>{
    //   console.log(data);
    //   this.bookList = data;
    // });
    this.bookService
      .GetSearchedBooks(this.childData, this.sorting)
      .subscribe((result) => {
        this.Books = result;
        this.len = this.Books.length;
        this.flagStatus();
        console.log(result);
      });

    this.bookService
      .GetSearchedBookslength(this.childData)
      .subscribe((result) => {
        this.count = result;

        this.pages = (this.count * 10) / 6;
      });
  }

  flagStatus() {
    if (this.len === 0) {
      this.flag = true;
    }
    if (this.len >= 1) {
      this.flag = false;
    }
  }
 
  
}
