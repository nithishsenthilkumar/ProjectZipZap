package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Job;
import com.example.demo.Repository.JobRepo;

@Service
public class JobService {

	@Autowired
	JobRepo jr;
	
	public Job postnew(Job c) {
		return jr.save(c);
	}
	
	public List<Job> showall(){
		return jr.findAll();
	}
	
	public Optional<Job> showone(int id) {
		return jr.findById(null);
	}
	
	public String removeone(int id) {
		if(jr.existsById(id))
		{
			jr.deleteById(id);
			return "Deleted carrier " + id + " succesfully";
		}
		return "No Id found";
	}
}
