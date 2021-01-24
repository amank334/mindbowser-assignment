package com.mindbowser.assignment.subscriptionservice.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Payment {

	@Id
	@GeneratedValue
	private int paymentId;
	private int subscrptionId;
	private Date transactionDate;
	private int transactionId;
}
