package com.yogesh.RegisterLoginAuth.Service.impl;

import com.yogesh.RegisterLoginAuth.Dto.EmployeeDTO;
import com.yogesh.RegisterLoginAuth.Dto.LoginDTO;
import com.yogesh.RegisterLoginAuth.Entity.Employee;
import com.yogesh.RegisterLoginAuth.Repo.EmployeeRepo;
import com.yogesh.RegisterLoginAuth.Service.EmployeeService;
import com.yogesh.RegisterLoginAuth.response.LoginResponse;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeIMPL implements EmployeeService {

    @Autowired
    private EmployeeRepo employeeRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;   //Creating the instance of the PasswordEncoder Interface

    @Override
    public String addEmployee(EmployeeDTO employeeDTO) {

        Employee employee = new Employee(

                employeeDTO.getEmployeeid(),
                employeeDTO.getEmployeename(),
                employeeDTO.getEmail(),

                this.passwordEncoder.encode(employeeDTO.getPassword())   //here we perform the hashing for password
        );

        employeeRepo.save(employee);

        return employee.getEmployeename();
    }

    @Override
    public LoginResponse loginEmployee(LoginDTO loginDTO) {

        String msg= "";
        Employee emp1 = employeeRepo.findByEmail(loginDTO.getEmail());
        if(emp1 != null){
            String password = loginDTO.getPassword();
            String encodedPassword = emp1.getPassword();
            Boolean isPassMatched  = passwordEncoder.matches(password, encodedPassword);
            if(isPassMatched){
                Optional<Employee> employee = employeeRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if(employee.isPresent()){
                    return new LoginResponse("Login Successfully!!!", true);
                }else{
                    return new LoginResponse("Login Failed!!!", false);
                }
            }else{
                return new LoginResponse("Incorrect Password", false);
            }
        }else{
            return new LoginResponse("Email Doesn't Exists!!!", false);
        }

    }

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<EmployeeDTO> getAllEmployee(){
        List<Employee> employeeList = employeeRepo.findAll();
        List<EmployeeDTO> employeeDTOList = new ArrayList<>();
        for(Employee emp:employeeList){
            EmployeeDTO employeeDTO = modelMapper.map(emp,EmployeeDTO.class);
            employeeDTOList.add(employeeDTO);
        }
        return employeeDTOList;
    }


}
