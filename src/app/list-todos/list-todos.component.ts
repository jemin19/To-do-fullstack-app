import { TodoDataService } from './../services/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number, 
    public description: string, 
    public done: boolean, 
    public targetDate: Date 
  ){}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos:  Todo[
    // new Todo(1, 'Learn to code', false, new Date()), 
    // new Todo(2, 'do more coding in angular', false, new Date()), 
    // new Todo(3, 'get a 100k job', false, new Date())
    // {id: 1, description: 'Learn to Dance'}, 
    // {id: 2, description: 'Get 100k Job'}, 
    // {id: 3, description: 'Do more coding pratice'}, 
  ]

  message: string 

  constructor(private todoSerevice: TodoDataService, 
              private router: Router) { }

  ngOnInit(){
    this.refreshTodos(); 
  }

  refreshTodos(){
    this.todoSerevice.retrieveAllTodos('jemin').subscribe(
      response => {
        this.todos = response; 
      }
    )
  }
  
  deleteTodo(id){
    console.log("delete todo"); 
    this.todoSerevice.deleteTodo('jemin', id).subscribe(
      response => {
        this.message = `Delete of Todo ${id} Successful!`; 
        this.refreshTodos(); 
      }
    )
  }

  updateTodo(id){
    this.router.navigate(["todos", id])
  }

  addTodo(){
    this.router.navigate(["todos", -1])
  }
}
