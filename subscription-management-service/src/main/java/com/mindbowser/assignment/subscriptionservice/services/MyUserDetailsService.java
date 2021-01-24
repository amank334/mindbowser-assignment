package com.mindbowser.assignment.subscriptionservice.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.mindbowser.assignment.subscriptionservice.entity.Manager;
import com.mindbowser.assignment.subscriptionservice.entity.MyUserDetails;
import com.mindbowser.assignment.subscriptionservice.repository.ManagerRepository;

@Service
public class MyUserDetailsService implements UserDetailsService {

	@Autowired
	private ManagerRepository managerRepo;
	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		Optional<Manager> manager = managerRepo.findByEmail(userName);
		return manager.map(MyUserDetails::new).orElseThrow(() -> new UsernameNotFoundException(userName + " Not Found"));
	}
	

}
