package com.mindbowser.assignment.subscriptionservice.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
public class LoginController {

	@GetMapping("/basicAuth")
	public ResponseEntity<String> login(){
		return ResponseEntity.ok("Successfully Authenticated");
	}
}
