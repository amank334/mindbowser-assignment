package com.mindbowser.assignment.subscriptionservice.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Plan {

	@Id
	@GeneratedValue
	private int planId;
	private String planName;
	private double planRentalPerMonth;
}
