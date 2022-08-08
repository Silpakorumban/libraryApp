import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor{

  constructor(private injector:Injector, public auth:AuthService) { }
 
  intercept(req:any,next:any) {


    const authToken = this.auth.getToken();
    console.log(authToken);
    //  auth = this.injector.get(AuthService)
    let tokenizedReq = req.clone(
      {
        setHeaders:{
          Authorization:`Bearer ${authToken}`
        }
      }
    );
    return next.handle(tokenizedReq)
      
  }
}
