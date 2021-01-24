package com.mindbowser.assignment.subscriptionservice.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindbowser.assignment.subscriptionservice.entity.Plan;
import com.mindbowser.assignment.subscriptionservice.repository.PlanRepository;

@Service
public class PlanServiceImpl implements PlanService{

	@Autowired
	private PlanRepository planRepo;
	public List<Plan> findAllPlan(){
		return planRepo.findAll();
	}
}
