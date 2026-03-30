package com.saikrishna.user_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.saikrishna.user_management.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
}
