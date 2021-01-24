package com.mindbowser.assignment.subscriptionservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mindbowser.assignment.subscriptionservice.dto.ManagerDto;
import com.mindbowser.assignment.subscriptionservice.entity.Manager;
import com.mindbowser.assignment.subscriptionservice.services.ManagerService;

@RestController
@CrossOrigin("http://localhost:3000")
public class RegistrationController {

	@Autowired
	private ManagerService managerService;
	
	@PostMapping("/register")
	public ResponseEntity<Manager> registerManager(@RequestBody ManagerDto manager) {
		Manager result = managerService.registerManager(manager);
		return ResponseEntity.ok(result);
	}
	
}
