package com.mindbowser.assignment.subscriptionservice.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindbowser.assignment.subscriptionservice.entity.Employee;
import com.mindbowser.assignment.subscriptionservice.repository.EmployeeRepository;

@Service
public class EmployeeServicesImpl implements EmployeeServices {
	
	@Autowired
	private EmployeeRepository empRepo;
	
	public Employee add(Employee emp) {
		return empRepo.save(emp);
	}
	public Employee update(Employee emp) {
		return empRepo.save(emp);
	}
	public void delete(int id) {
		empRepo.deleteById(id);
	}
	
	public Optional<Employee> findById(int id) {
		return empRepo.findById(id);
	}
	public List<Employee> findAll(){
		return empRepo.findAll();
	}

}
