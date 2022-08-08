import { Component, OnInit } from '@angular/core';
import { signUpModel } from './signup.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  sign=new signUpModel ("","","","","","")

  ngOnInit(): void {
  }
addUser(){

}
password1:string="";
password2:string="";
check(){

}
}
