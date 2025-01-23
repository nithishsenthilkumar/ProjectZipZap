package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Customer;
import com.example.demo.Repository.CustomerRepo;

@Service
public class CustomerService {
	
	@Autowired
	CustomerRepo cr;
	
	public Customer postnew(Customer c) {
		return cr.save(c);
	}
	
	public List<Customer> showall(){
		return cr.findAll();
	}
	
	public Optional<Customer> showone(int id) {
		return cr.findById(id);
	}
	
	public String showPass(long number) {
		return cr.getpassword(number);
	}
	
	public int showId(long number) {
		return cr.getUserId(number);
	}
	
	public String putone(int id,Customer c) {
		if(cr.existsById(id))
		{
			cr.getReferenceById(id).compare(c);
			return "Updated Succesfully";
		}
		return "No Id found";
	}
	
	public String removeone(int id) {
		if(cr.existsById(id))
		{
			cr.deleteById(id);
			return "Deleted customer " + id + " succesfully";
		}
		return "No Id found";
	}
}
