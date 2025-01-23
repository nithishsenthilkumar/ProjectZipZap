package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Carrier;
import com.example.demo.Repository.CarrierRepo;

@Service
public class CarrierService {

	@Autowired
	CarrierRepo cr;
	
	public Carrier postnew(Carrier c) {
		return cr.save(c);
	}
	
	public List<Carrier> showall(){
		return cr.findAll();
	}
	
	public Optional<Carrier> showone(int id) {
		return cr.findById(null);
	}
	
	public String putone(int id,Carrier c) {
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
			return "Deleted carrier " + id + " succesfully";
		}
		return "No Id found";
	}
}
