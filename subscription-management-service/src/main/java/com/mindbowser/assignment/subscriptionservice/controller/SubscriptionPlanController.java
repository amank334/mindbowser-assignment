package com.mindbowser.assignment.subscriptionservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mindbowser.assignment.subscriptionservice.entity.Plan;
import com.mindbowser.assignment.subscriptionservice.entity.Subscription;
import com.mindbowser.assignment.subscriptionservice.services.PlanService;
import com.mindbowser.assignment.subscriptionservice.services.SubscriptionService;

@RestController
@CrossOrigin("http://localhost:3000")
public class SubscriptionPlanController {

	@Autowired
	private PlanService planService;
	
	@Autowired
	private SubscriptionService subscriptioService;
	
	@GetMapping("/plans")
	public ResponseEntity<List<Plan>> getAllPlans(){
		return ResponseEntity.ok(planService.findAllPlan());
	}
	@PostMapping("/subscription")
	public ResponseEntity<Subscription> addSubscription(@RequestBody Subscription subscription){
		Subscription result = subscriptioService.add(subscription);
		return ResponseEntity.ok(result);
	}
	
	@GetMapping("/subscription/{managerId}")
	public ResponseEntity<Subscription> addSubscription(@PathVariable int managerId){
		Subscription result = subscriptioService.findByManagerId(managerId);
		return ResponseEntity.ok(result);
	}
}
