package com.mindbowser.assignment.subscriptionservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindbowser.assignment.subscriptionservice.entity.Plan;

@Repository
public interface PlanRepository extends JpaRepository<Plan, Integer> {

}
