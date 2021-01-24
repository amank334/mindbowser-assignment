package com.mindbowser.assignment.subscriptionservice.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindbowser.assignment.subscriptionservice.entity.Subscription;
import com.mindbowser.assignment.subscriptionservice.repository.SubscriptionRepository;

@Service
public class SubscriptionServiceImpl implements SubscriptionService {
	
	@Autowired
	private SubscriptionRepository subscriptionRepo;
	
	public Subscription add(Subscription subscription) {
		return subscriptionRepo.save(subscription);
	}
	public List<Subscription> findAllSubscription(){
		return subscriptionRepo.findAll();
	}
	public Subscription findByManagerId(int managerId) {
		return subscriptionRepo.findById(managerId).orElse(new Subscription());
	}

}
