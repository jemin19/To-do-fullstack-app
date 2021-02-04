package com.todo.rest.webservices.restfulwebservice.helloworld;

public class AuthnticationBean {
	
	private String message; 
	
	public AuthnticationBean(String message) {
		this.message = message; 
	}
	
		
	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message; 
	}

	@Override
	public String toString() {
		return String.format("HelloWorldBean [message=%s]", message);
	}
	
}
