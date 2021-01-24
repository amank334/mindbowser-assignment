package com.mindbowser.assignment.subscriptionservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindbowser.assignment.subscriptionservice.dto.ManagerDto;
import com.mindbowser.assignment.subscriptionservice.entity.Manager;
import com.mindbowser.assignment.subscriptionservice.repository.ManagerRepository;

@Service
public class ManagerServiceImpl implements ManagerService {

	@Autowired
	private ManagerRepository managerRepo;
	public Manager registerManager( ManagerDto managerDto) {
		Manager manager = new Manager(managerDto);
		return managerRepo.save(manager);
	}
	public Manager updateManager( ManagerDto managerDto) {
		Manager manager = new Manager(managerDto);
		return managerRepo.save(manager);
	}
	public Manager findManagerById( int managerId){
		return managerRepo.findById(managerId).orElse(new Manager());
	}
}
