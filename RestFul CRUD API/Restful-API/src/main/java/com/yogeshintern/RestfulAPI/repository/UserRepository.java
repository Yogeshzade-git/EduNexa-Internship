package com.yogeshintern.RestfulAPI.repository;

import com.yogeshintern.RestfulAPI.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
