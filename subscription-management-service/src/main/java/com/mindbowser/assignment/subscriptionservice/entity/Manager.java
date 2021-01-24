package com.mindbowser.assignment.subscriptionservice.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.mindbowser.assignment.subscriptionservice.dto.ManagerDto;

import lombok.Data;

@Entity
@Data
public class Manager {

	@Id
	@GeneratedValue
	private int managerId;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String address;
	private Date dob;
	private String company;
	private String role;
	
	public Manager(int managerId, String firstName, String lastName, String email, String password, String address,
			Date dob, String company, String role) {
		super();
		this.managerId = managerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.address = address;
		this.dob = dob;
		this.company = company;
		this.role = role;
	}
	
	public Manager( String firstName, String lastName, String email, String password, String address,
			Date dob, String company, String role) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.address = address;
		this.dob = dob;
		this.company = company;
		this.role = role;
	}

	public Manager(ManagerDto manager) {
		super();
		this.firstName = manager.getFirstName();
		this.lastName = manager.getLastName();
		this.email = manager.getEmail();
		this.password = manager.getPassword();
		this.address = manager.getAddress();
		this.dob = manager.getDob();
		this.company = manager.getCompany();
		this.role = "ROLE_MANAGER";
	}
	public Manager() {
		super();
	}
	
	
}
