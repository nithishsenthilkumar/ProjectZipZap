package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Carrier;
import com.example.demo.Service.CarrierService;

@RestController
public class CarrierControl {

	@Autowired
	CarrierService cs;
	
	@PostMapping("/addcarrier")
	public Carrier addnew(@RequestBody Carrier c) {
		return cs.postnew(c);
	}
	
	@GetMapping("/getcarriers")
	public List<Carrier> getall(){
		return cs.showall(); 
	}
	
	@GetMapping("/getcarrier/{id}")
	public Optional<Carrier> getone(@PathVariable int id) {
		return cs.showone(id);
	}
	
	@PutMapping("/updatecarrier/{id}")
	public String updateone(@PathVariable int id,@RequestBody Carrier c) {
		return cs.putone(id, c);
	}
	
	@DeleteMapping("/deletecarrier")
	public String deleteone(@RequestParam int id) {
		return cs.removeone(id);
	}
}
