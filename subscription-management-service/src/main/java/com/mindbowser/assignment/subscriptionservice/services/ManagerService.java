package com.mindbowser.assignment.subscriptionservice.services;



import com.mindbowser.assignment.subscriptionservice.dto.ManagerDto;
import com.mindbowser.assignment.subscriptionservice.entity.Manager;

public interface ManagerService {

	public Manager registerManager( ManagerDto manager);
	public Manager updateManager( ManagerDto manager);
	public Manager findManagerById( int managerId);
}
