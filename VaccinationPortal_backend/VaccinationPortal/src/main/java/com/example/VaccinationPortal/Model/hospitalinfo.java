package com.example.VaccinationPortal.Model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="hospitalinfo")
public class hospitalinfo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int hospital_ID;
	
	@Column(name="Hospital_Name")
	private String hospitalname;
	
	@Column(name="address")
	private String address;
	
	@Column(name="image")
	private String image;
	
	@Column(name="details")
	private String details;
	
	@Column(name="timing_from")
	private String timimg_from;
	
	@Column(name="Timing_to")
	private String Timing_to;
	
	@Column(name="type")
	private String type;
	
	@Column(name="userId")
	private String UserId;
	
	@Column(name="password")
	private String password;
	
	
	@Column(name="hos_status")
	private String hos_status;

	public hospitalinfo(String hospitalname, String address, String image, String details,
			String timimg_from, String timing_to, String type, String username, String password, String hos_status) {
		super();
		this.hospitalname = hospitalname;
		this.address = address;
		this.image = image;
		this.details = details;
		this.timimg_from = timimg_from;
		this.Timing_to = timing_to;
		this.type = type;
		this.UserId = username;
		this.password = password;
		this.hos_status = hos_status;
	}

	public hospitalinfo() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getHospitalID() {
		return hospital_ID;
	}

	public void setHospitalID(int hospitalID) {
		this.hospital_ID = hospitalID;
	}

	public String getHospitalname() {
		return hospitalname;
	}

	public void setHospitalname(String hospitalname) {
		this.hospitalname = hospitalname;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public String getTimimg_from() {
		return timimg_from;
	}

	public void setTimimg_from(String timimg_from) {
		this.timimg_from = timimg_from;
	}

	public String getTiming_to() {
		return Timing_to;
	}

	public void setTiming_to(String timing_to) {
		this.Timing_to = timing_to;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getUsername() {
		return UserId;
	}

	public void setUsername(String username) {
		this.UserId = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getHos_status() {
		return hos_status;
	}

	public void setHos_status(String hos_status) {
		this.hos_status = hos_status;
	}
	
	
	
	
	
	
	
}
