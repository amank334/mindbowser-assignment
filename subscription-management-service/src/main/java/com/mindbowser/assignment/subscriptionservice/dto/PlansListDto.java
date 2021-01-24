package com.mindbowser.assignment.subscriptionservice.dto;

import java.util.List;

import com.mindbowser.assignment.subscriptionservice.entity.Plan;

import lombok.Data;

@Data
public class PlansListDto {
	
	private List<Plan> planList;

	
	public PlansListDto(List<Plan> planList) {
		super();
		this.planList = planList;
	}


	public PlansListDto() {
		super();
	}
	
	

}
