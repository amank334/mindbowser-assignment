package com.mindbowser.assignment.subscriptionservice.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindbowser.assignment.subscriptionservice.entity.Manager;

@Repository
public interface ManagerRepository extends JpaRepository<Manager, Integer>{
	Optional<Manager> findByEmail(String email);
}
