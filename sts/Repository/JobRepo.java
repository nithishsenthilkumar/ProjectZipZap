package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Job;

@Repository
public interface JobRepo extends JpaRepository<Job, Integer>{

}
