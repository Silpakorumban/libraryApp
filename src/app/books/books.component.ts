import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { booksModel } from './book.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  book:booksModel[]=[];
  constructor( private bList:BookServiceService, private router:Router, public auth:AuthService) { }

  ngOnInit(): void {
    this.bList.getBooks().subscribe((Data) => {
      this.book=JSON.parse(JSON.stringify(Data));

    })
  }

  deleteBook(i:any)
  {
    this.bList.deleteBookById(i._id).subscribe((data) => {
    this.book = this.book.filter(p => p !== i);
      })
    }
   

     editBook(i:any){
      localStorage.setItem("updateBookId", i._id);
      console.log(i._id)
      this.router.navigate(['update-book']);

    }

  }


