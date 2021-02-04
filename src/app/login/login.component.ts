import { BasicAuthenticationService } from './../services/basic-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HardcodedAuthenticationService} from '../services/hardcoded-authentication.service'; 
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = 'Invalid Credentails'
  invalidLogin = false

  constructor(private router: Router, 
              private hardcodedAuthenticationService: HardcodedAuthenticationService, 
              private basicAuthenticationService: BasicAuthenticationService) { }


  ngOnInit(): void {
  }

  handleLogin() {
    // if(this.username === 'jemin' && this.password === 'a') {
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
    this.invalidLogin = false 
      //redirece to welcome page 
      this.router.navigate(['welcome', this.username])
    } else {
      this.invalidLogin = true
    }
  }

  handleBasicAuthLogin() {
    // if(this.username === 'jemin' && this.password === 'a') {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        }, 
        error => {
          this.invalidLogin = true 
        }
      )
  }
}
