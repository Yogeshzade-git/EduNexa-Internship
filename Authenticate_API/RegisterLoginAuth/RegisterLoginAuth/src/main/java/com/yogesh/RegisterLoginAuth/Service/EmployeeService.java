package com.yogesh.RegisterLoginAuth.Service;

import com.yogesh.RegisterLoginAuth.Dto.EmployeeDTO;
import com.yogesh.RegisterLoginAuth.Dto.LoginDTO;
import com.yogesh.RegisterLoginAuth.response.LoginResponse;

public interface EmployeeService {
    String addEmployee(EmployeeDTO employeeDTO);

    LoginResponse loginEmployee(LoginDTO loginDTO);
}
