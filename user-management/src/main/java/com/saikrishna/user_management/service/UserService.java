package com.saikrishna.user_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saikrishna.user_management.entity.User;
import com.saikrishna.user_management.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	//create user
	public User saveUser(User user) {
		return userRepository.save(user);
	}
	
	//get all users
	public List<User> getAllUsers(){
		return userRepository.findAll()	;
		}
	//update user
	public User updateUser(Long id, User user) {
		user.setId(id);
		return userRepository.save(user);
	}
	
	//Delete user
	public void deleteUser(Long id) {
		userRepository.deleteById(id);
	}
}
