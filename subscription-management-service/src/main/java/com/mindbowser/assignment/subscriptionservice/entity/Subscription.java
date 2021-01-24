package com.mindbowser.assignment.subscriptionservice.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Subscription {
	@Id
	@GeneratedValue
	private int subscriptionId;
	private String status;
	private int managerId;
	private int planId;
	private Date startDate;
	private Date endDate;
	private Date subscriptionCancelledDate;
}
