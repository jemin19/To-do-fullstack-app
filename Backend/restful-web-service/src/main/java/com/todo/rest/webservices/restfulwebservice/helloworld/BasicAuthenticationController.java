package com.todo.rest.webservices.restfulwebservice.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//controller
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthenticationController {
	
	
	@GetMapping(path = "/basicauth" )
	public AuthnticationBean helloWorldBean() {
		return new AuthnticationBean("You are authenticated"); 
	}
}
