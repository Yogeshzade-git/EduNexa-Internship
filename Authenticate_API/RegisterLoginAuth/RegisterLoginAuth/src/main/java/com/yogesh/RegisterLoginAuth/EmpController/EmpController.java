package com.yogesh.RegisterLoginAuth.EmpController;

import com.yogesh.RegisterLoginAuth.Dto.EmployeeDTO;
import com.yogesh.RegisterLoginAuth.Dto.LoginDTO;
import com.yogesh.RegisterLoginAuth.Service.EmployeeService;
import com.yogesh.RegisterLoginAuth.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/employee")

public class EmpController {

    @Autowired
    public EmployeeService employeeService;
    @PostMapping("/save")
    public String saveEmployee(@RequestBody EmployeeDTO employeeDTO){
        String id = employeeService.addEmployee(employeeDTO);
        return id;
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO){
        LoginResponse loginResponse = employeeService.loginEmployee(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
}
