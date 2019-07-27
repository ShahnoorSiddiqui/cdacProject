package com.example.VaccinationPortal.Model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name="appointmentinfo")
public class appointmentinfo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int appointmentid;
	
	
	@Column(name="date")
	private String date;
	
	@Column(name="app_Status")
	private boolean app_Status;
	
	@Column(name="time")
	private String time;

	
	@OneToOne
	private hospitalinfo hospital ;
	
	@OneToOne
	private memberinfo member;
	
	@OneToOne
	private vaccineinfo vaccine;

	public appointmentinfo() {
		super();
		// TODO Auto-generated constructor stub
	}

	public appointmentinfo(String date, String time,boolean app_Status) {
		super();
		this.date = date;
		this.time = time;
		this.app_Status=app_Status;
	}
	
	

	public boolean isApp_Status() {
		return app_Status;
	}

	public void setApp_Status(boolean app_Status) {
		this.app_Status = app_Status;
	}

	public int getAppointmentid() {
		return appointmentid;
	}

	public void setAppointmentid(int appointmentid) {
		this.appointmentid = appointmentid;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public hospitalinfo getHospital() {
		return hospital;
	}

	public void setHospital(hospitalinfo hospital) {
		this.hospital = hospital;
	}

	public memberinfo getMember() {
		return member;
	}

	public void setMember(memberinfo member) {
		this.member = member;
	}

	public vaccineinfo getVaccine() {
		return vaccine;
	}

	public void setVaccine(vaccineinfo vaccine) {
		this.vaccine = vaccine;
	}
	
	

}
