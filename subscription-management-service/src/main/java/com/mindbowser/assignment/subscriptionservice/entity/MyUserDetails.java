package com.mindbowser.assignment.subscriptionservice.entity;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class MyUserDetails implements UserDetails {

	private String username;
	private String password;
	private boolean active;
	private List<GrantedAuthority> authorities;
	
	public MyUserDetails(String user) {
		this.username=user;
	}
	public MyUserDetails(Manager manager) {
		super();
		this.username = manager.getEmail();
		this.password = manager.getPassword();
		this.active = true;
		this.authorities = Arrays.asList(new SimpleGrantedAuthority("ROLE_MANAGER"));
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
