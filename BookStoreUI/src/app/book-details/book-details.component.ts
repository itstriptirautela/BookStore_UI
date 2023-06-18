import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../shared/services/book.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  Role: string | null = '';
  public bookId: any;
  books: any;
  book:any;
  data1: any;
  isdeleted: any = true;
 // public row:number;
  constructor(private route: ActivatedRoute,private bookService: BookService,private router:Router,private userService: UserService) { 
    this.Role = this.userService.getRole();
    console.log(this.Role);
    let id = this.route.snapshot.paramMap.get('id');
    this.bookId = id;
    this.getbooks();
  }

  ngOnInit():void {}
  getbooks() {
    this.bookService.getBookById(this.bookId).subscribe((data)=>{
      console.warn(data);
      this.books = data;
      console.log(this.books);
    });
  
}

 /* DeleteBook(Id:number){
     let clickedYes = confirm("Are you sure want to delete");
  console.log(Id);
  if(clickedYes){
    this.bookService.deleteBook(Id) .subscribe(data=>{
      console.log(data);
    alert("Deleted Successfully");
     this.router.navigate(['SearchBook'])
    });
   }

 } */
deleteBook(Id: any) {
  let clickedYes = confirm("Are you sure want to delete");
  console.log(Id);
  this.bookService.deleteBook(Id)
    .subscribe((res: any) => {
      alert("Deleted Successfully");
      this.router.navigate(['SearchBook'])
      if (res.find((i: any) => i.bookId === Id) != null) 
      { this.isdeleted = false; }
     
      this.book = res
    
    })


}
}
