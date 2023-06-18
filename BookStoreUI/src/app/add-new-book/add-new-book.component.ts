import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from '../shared/model/category';
import { BookService } from '../shared/services/book.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({

  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  errMsg: any = '';
 Category: any= ['Comedy', 'Romance', 'Fiction',' Horror', 'Thriller'];
 
 
  ngOnInit(): void {}

  formdata = new FormGroup({
    bookTitle: new FormControl(),
    Author: new FormControl(),
    Description: new FormControl(),
    Category :  new FormControl(),
    Price: new FormControl(),
    Publisher: new FormControl(),
    NumberOfCopies: new FormControl(),
    isDeleted: new FormControl(false),
    UserId: new FormControl(localStorage.getItem('UserId')),
  });
  AddBook() {
    console.warn(this.formdata.value);
    this.bookService.AddBook(this.formdata.value).subscribe(
      (result) => {
        console.warn(result);
        this.errMsg = 'Book Added Successfully ';
      },
      (err) => {
        console.log(err);
        this.errMsg = 'Please Fill the  Fields ';
      }
    );
  }
}


