package com.mindbowser.assignment.subscriptionservice.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindbowser.assignment.subscriptionservice.entity.Payment;
import com.mindbowser.assignment.subscriptionservice.repository.PaymentRepository;

@Service
public class PaymentServiceImpl implements PaymentService {
	@Autowired
	private PaymentRepository paymentRepo;

	public Payment add(Payment payment) {
		return paymentRepo.save(payment);
	}
	public List<Payment> findAllPayment(){
		return paymentRepo.findAll();
	}
}
