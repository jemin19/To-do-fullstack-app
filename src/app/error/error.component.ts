import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessgae = 'Oops something went wrong, page cannot be found'
  constructor() { }

  ngOnInit(): void {
  }

}
