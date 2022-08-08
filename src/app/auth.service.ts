import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) { }
  
  loginUser(user:object){
    console.log("it is accessed"); 
    // const headers={'content-type':'application/json'}
    return this.http.post<any>("http://localhost:3000/login",{user});
    }
  
logedIn(){
  return !! localStorage.getItem('token');
}
 getToken(){
 return  localStorage.getItem('token');
  // console.log(x);
  // return x;
 
 }
}
