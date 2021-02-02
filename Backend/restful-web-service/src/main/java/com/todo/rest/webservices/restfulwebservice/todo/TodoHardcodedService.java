package com.todo.rest.webservices.restfulwebservice.todo;

import java.util.*;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {

	private static List<Todo> todos = new ArrayList(); 
	private static int id = 0; 
	
	static {
		todos.add(new Todo(++id, "Jemin", "Learn to code", new Date(), false)); 
		todos.add(new Todo(++id, "Jemin", "Learn about spring boot", new Date(), false)); 
		todos.add(new Todo(++id, "Jemin", "Learn about angular", new Date(), false)); 
	}
	
	public List<Todo> findAll() {
		return todos; 
	}
}
