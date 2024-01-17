package com.yogesh.RegisterLoginAuth.Mapper;

import com.yogesh.RegisterLoginAuth.Dto.EmployeeDTO;
import com.yogesh.RegisterLoginAuth.Entity.Employee;

public class UserMapper {
    public static EmployeeDTO convertEntityToUser(Employee emp){
        EmployeeDTO employeeDTO = new EmployeeDTO();
        employeeDTO.setEmployeeid(emp.getEmployeeid());
        employeeDTO.setEmployeename(emp.getEmployeename());
        employeeDTO.setEmail(emp.getEmail());

        return employeeDTO;
    }
}
