package com.mindbowser.assignment.subscriptionservice.dto;

import java.util.Date;

import lombok.Data;

@Data
public class ManagerDto {
	private int managerId;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String address;
	private Date dob;
	private String company;
}
