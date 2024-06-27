package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Job;
import com.example.demo.Service.JobService;

@RestController
public class JobControl {

	@Autowired
	JobService js;
	
	@PostMapping("/addjob")
	public Job addnew(@RequestBody Job c) {
		return js.postnew(c);
	}
	
	@GetMapping("/getjobs")
	public List<Job> getall(){
		return js.showall(); 
	}
	
	@GetMapping("/getjob/{id}")
	public Optional<Job> getone(@PathVariable int id) {
		return js.showone(id);
	}

	@DeleteMapping("/deletejob")
	public String deleteone(@RequestParam int id) {
		return js.removeone(id);
	}
}
