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
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }


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
}
