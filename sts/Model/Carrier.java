package com.example.demo.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "carrier")
public class Carrier {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int carrierId;
	
	@Column(unique = true)
	private long phone;
	private String name;
	private String password;
	private String address;
	private String email;
	
	public Carrier() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Carrier(int carrierId, long phone, String name, String password, String address, String email) {
		super();
		this.carrierId = carrierId;
		this.phone = phone;
		this.name = name;
		this.password = password;
		this.address = address;
		this.email = email;
	}

	public int getCarrierId() {
		return carrierId;
	}

	public void setCarrierId(int carrierId) {
		this.carrierId = carrierId;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public void compare(Carrier c) {
		if(c.getName() != null)
			this.setName(c.getName());
		if(c.getPassword() != null)
			this.setPassword(c.getPassword());
		if(c.getPhone() != 0)
			this.setPhone(c.getPhone());
		if(c.getEmail() != null)
			this.setEmail(c.getEmail());
		if(c.getAddress() != null)
			this.setAddress(c.getAddress());
	}
}
