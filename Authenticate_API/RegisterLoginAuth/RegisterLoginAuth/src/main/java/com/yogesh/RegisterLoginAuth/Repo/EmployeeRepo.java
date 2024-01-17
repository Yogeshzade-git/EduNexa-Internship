package com.yogesh.RegisterLoginAuth.Repo;

import com.yogesh.RegisterLoginAuth.Dto.EmployeeDTO;
import com.yogesh.RegisterLoginAuth.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import javax.print.attribute.standard.MediaSize;
import javax.swing.text.html.Option;
import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Integer> {

    Optional<Employee> findOneByEmailAndPassword(String email, String password);
    Employee findByEmail(String email);


}
