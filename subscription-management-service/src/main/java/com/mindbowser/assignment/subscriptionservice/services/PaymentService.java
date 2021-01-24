package com.mindbowser.assignment.subscriptionservice.services;

import java.util.List;

import com.mindbowser.assignment.subscriptionservice.entity.Payment;

public interface PaymentService {

	public Payment add(Payment payment);
	public List<Payment> findAllPayment();
	
}
