import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:HttpClient) { }
  getBooks(){
    return this.http.get("http://localhost:3000/books");
  }
  addNewBook(bookItem:object){

    console.log("it is accessed"); 


  // const headers={'content-type':'application/json'}
  
  
   return this.http.post("http://localhost:3000/books",{bookItem})
   .subscribe((data)=>{ 
    console.log( (data))})
    
   }
   deleteBookById(_id:any)
  {

    return this.http.delete("http://localhost:3000/book/"+_id)
    };

    getBook(_id:any){
      return this.http.get("http://localhost:3000/book/"+_id);
     }
     updateBook(id:any, book:object)
   {
    console.log('client update')
    console.log(id);
    return this.http.put("http://localhost:3000/book/"+id,{book})
    .subscribe(data =>{console.log(data)});
   }
}

