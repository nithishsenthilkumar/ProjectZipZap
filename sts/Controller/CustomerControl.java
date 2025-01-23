package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Customer;
import com.example.demo.Service.CustomerService;

@RestController
@CrossOrigin
public class CustomerControl {

	@Autowired
	CustomerService cs;
	
	@PostMapping("/addcustomer")
	public Customer addnew(@RequestBody Customer c) {
		return cs.postnew(c);
	}
	
	@GetMapping("/getcustomers")
	public List<Customer> getall(){
		return cs.showall(); 
	}
	
	@GetMapping("/getpassword/{number}")
	public String getPass(@PathVariable long number) {
		return cs.showPass(number);
	}
	
	@GetMapping("/getcustomer/{id}")
	public Optional<Customer> getone(@PathVariable int id) {
		return cs.showone(id);
	}
	
	@GetMapping("/getId/{phone}")
	public int getId(@PathVariable long phone) {
		return cs.showId(phone);
	}
	
	@PutMapping("/updatecustomer/{id}")
	public String updateone(@PathVariable int id,@RequestBody Customer c) {
		return cs.putone(id, c);
	}
	
	@DeleteMapping("/deletecustomer")
	public String deleteone(@RequestParam int id) {
		return cs.removeone(id);
	}
}
