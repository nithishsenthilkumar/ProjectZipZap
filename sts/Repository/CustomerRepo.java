package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Customer;

@Repository
public interface CustomerRepo extends JpaRepository<Customer, Integer>{
	
	@Query(value = "select password from customer where phone = :number",nativeQuery = true)
	String getpassword(long number);
	
	@Query(value = "select cust_id from customer where phone = :number",nativeQuery = true)
	int getUserId(long number);
}
