import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookService } from '../shared/services/book.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }
  bookTitle: any = '';
  bookCategory: any = '';
  author: any = '';
  bookPrice: number = 0;
   publisher: any = '';
 
  ngOnInit(): void {}
  @Output() data: any = new EventEmitter<any>();

  filter() {
    console.log(this.bookCategory);
   
    this.data.emit({
      bookCategory: this.bookCategory,
      bookTitle: this.bookTitle,
      author: this.author,
      bookPrice: this.bookPrice,
       publisher: this.publisher,
    }
    );
  
   
    
  }
}
