package com.saikrishna.user_management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.saikrishna.user_management.entity.User;
import com.saikrishna.user_management.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private UserService userService;
	
	@PostMapping
	public User createUser(@RequestBody User user) {
		return userService.saveUser(user);
	}
	
	//Read
	@GetMapping
	public List<User> getAllUsers(){
		return userService.getAllUsers();
	}
	
	//Update
	@PutMapping("/{id}")
	public User updateUser(@PathVariable Long id, @RequestBody User user) {
		return userService.updateUser(id, user);
	}
	
	//Delete
	@DeleteMapping("{id}")
	public void deleteUser(@PathVariable Long id) {
		userService.deleteUser(id);
	}
}
