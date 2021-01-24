package com.mindbowser.assignment.subscriptionservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mindbowser.assignment.subscriptionservice.entity.Employee;
import com.mindbowser.assignment.subscriptionservice.services.EmployeeServices;

@RestController
@CrossOrigin("http://localhost:3000")
public class EmployeeController {
	
	@Autowired
	private EmployeeServices empService;
	@PostMapping("/employee")
	public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
		Employee result = empService.add(employee);
		return ResponseEntity.ok(result);
	}
	
	@GetMapping("/employee/{id}")
	public ResponseEntity<Employee> findEmployee(@PathVariable int id){
		Employee result = empService.findById(id).orElse(new Employee());
		return ResponseEntity.ok(result);
	}
	
	@GetMapping("/employees")
	public ResponseEntity<List<Employee>> findAllEmployee(){
		List<Employee> result = empService.findAll();
		return ResponseEntity.ok(result);
	}
	
	@PutMapping("/employee")
	public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee){
		Employee result = empService.update(employee);
		return ResponseEntity.ok(result);
	}
	
	@DeleteMapping("/employee/{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable int id){
		empService.delete(id);
		return ResponseEntity.ok("Employee Deleted");
	}
}
