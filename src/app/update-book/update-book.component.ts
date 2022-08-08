import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { booksModel } from '../books/book.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  book=new booksModel (null, null,null,null)
  constructor(private bList:BookServiceService, private router:Router, public auth:AuthService) { }

  ngOnInit(): void {
    let id= localStorage.getItem("updateBookId");
    this.bList.getBook(id).subscribe((data)=>{
    this.book=JSON.parse(JSON.stringify(data));
     console.log(this.book);
    })
  }
 editBook() 
   {   
    let id= localStorage.getItem("updateBookId");
    console.log(id);
      this.bList.updateBook(id, this.book );   
   alert("Success");
   this.router.navigate(['books']);
   }
 }
