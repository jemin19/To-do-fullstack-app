import { API_URL } from './../app.constants';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username, password){
    if(username=="jemin" && password=="password"){
      sessionStorage.setItem('authenticaterUser', username); 
      return true; 
    }
    return false; 
  }

  executeAuthenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password); 
    
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`, 
    {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticaterUser', username); 
          sessionStorage.setItem('token', basicAuthHeaderString); 
          return data; 
        }
      )
    ) ; 
  }
  
  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticaterUser')
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem('token')
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
    sessionStorage.removeItem('token')
  }
}
  export class AuthenticationBean{
    constructor(public message: string){}
  }

