package com.yogesh.RegisterLoginAuth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class RegisterLoginAuthApplication {

	public static void main(String[] args) {
		SpringApplication.run(RegisterLoginAuthApplication.class, args);
	}

}
