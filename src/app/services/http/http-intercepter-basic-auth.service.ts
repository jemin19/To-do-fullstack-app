import { BasicAuthenticationService } from './../basic-authentication.service';
import { HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { onErrorResumeNext } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let username = 'jemin'
    // let password = 'password'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password); 

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken(); 
    let username = this.basicAuthenticationService.getAuthenticatedUser()

    if(basicAuthHeaderString && username){
      request = request.clone({
        setHeaders : {
          Authorization : basicAuthHeaderString
        }
      })
    }
    return next.handle(request); 
  }
}
