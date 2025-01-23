package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Carrier;

@Repository
public interface CarrierRepo extends JpaRepository<Carrier, Integer>{

}
