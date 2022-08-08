import { Component, OnInit } from '@angular/core';
import { booksModel } from '../books/book.model';
import { BookServiceService } from '../book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  bookItem=new booksModel (null, null,null,null);

  constructor(private blist:BookServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  addBook(){
    console.log(this.bookItem)

    this.blist.addNewBook(this.bookItem);

   
    console.log("add new book called");
    alert("success");
     this.router.navigate(['books']);

  }
}
