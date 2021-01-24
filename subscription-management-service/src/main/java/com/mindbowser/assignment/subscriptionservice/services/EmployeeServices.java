package com.mindbowser.assignment.subscriptionservice.services;

import java.util.List;
import java.util.Optional;

import com.mindbowser.assignment.subscriptionservice.entity.Employee;

public interface EmployeeServices {

	public Employee add(Employee emp);
	public Employee update(Employee emp);
	public void delete(int id);
	public Optional<Employee> findById(int id);
	public List<Employee> findAll();
}
