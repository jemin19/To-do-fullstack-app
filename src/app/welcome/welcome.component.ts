import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  constructor(private activedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.activedroute.snapshot.params['name']; 
  }

}
