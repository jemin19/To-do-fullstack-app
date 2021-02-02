import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../services/data/welcome-data.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  welcomeMessage: string
  constructor(
              private activedroute: ActivatedRoute, 
              private service: WelcomeDataService
              ) { }

  ngOnInit(): void {
    this.name = this.activedroute.snapshot.params['name']; 
  }

  getWelcomeMessgae(){
    this.service.executeHelloWorldBeanService().subscribe(
      // response => this.welcomeMessage = response.message 
      response => this.handleSucessfulResponse(response), 
      error => this.handleErrorResponse(error)
    ); 
  }

  getWelcomePathVarriableMessgae(){
    this.service.executeHelloWorldServicePathVariable(this.name).subscribe(
      // response => this.welcomeMessage = response.message 
      response => this.handleSucessfulResponse(response), 
      error => this.handleErrorResponse(error)
    ); 
  }

  handleSucessfulResponse(response){
    // console.log("handle..:", response)
    this.welcomeMessage = response.message
  }

  handleErrorResponse(error){
    this.welcomeMessage = error.error.messagae; 
  }
}
