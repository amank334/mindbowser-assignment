package com.mindbowser.assignment.subscriptionservice.services;

import java.util.List;

import com.mindbowser.assignment.subscriptionservice.entity.Subscription;

public interface SubscriptionService {

	public Subscription add(Subscription subscription);
	public List<Subscription> findAllSubscription();
	public Subscription findByManagerId(int managerId);
}
