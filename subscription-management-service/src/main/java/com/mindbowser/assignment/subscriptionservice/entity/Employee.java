package com.mindbowser.assignment.subscriptionservice.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Employee {
	@Id
	@GeneratedValue
	private int employeeId;
	private String firstName;
	private String lastName;
	private String address;
	private Date dob;
	private String mobile;
	private String city;

}
