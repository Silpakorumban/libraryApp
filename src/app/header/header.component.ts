import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router:Router, public auth:AuthService) { }

  ngOnInit(): void {
  }
title:string="Library Application"
 logOutUser(){
  localStorage.removeItem('token');
  this.router.navigate(['login'])

 }
}
