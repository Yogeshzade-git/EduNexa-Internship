package com.yogesh.RegisterLoginAuth.Config;

import com.yogesh.RegisterLoginAuth.Service.EmployeeService;
import com.yogesh.RegisterLoginAuth.Service.impl.EmployeeIMPL;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SecurityConfig {
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public EmployeeService employeeService() {
        return new EmployeeIMPL();
    }
}
