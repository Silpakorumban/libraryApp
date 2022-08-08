import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private route:Router) { }

  user={
    userName:'',
    passWord:''
  };

  userVerify()
{
this.auth.loginUser(this.user).subscribe((res)=>{
  let token=res.idToken;
  localStorage.setItem( 'token', res.idToken);
// console.log(token);
this.route.navigate(['books']);
});
}

  ngOnInit(): void {
  }

}

