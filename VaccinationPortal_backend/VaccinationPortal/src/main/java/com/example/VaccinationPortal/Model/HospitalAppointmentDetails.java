package com.example.VaccinationPortal.Model;

public class HospitalAppointmentDetails {
	
	private int AppointmentId;
	private String ChildName;
	private String FatherName;
	private String Age;
	private String Date;
	private String Time;
	private String VaccineName;
	public HospitalAppointmentDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public HospitalAppointmentDetails(int appointmentId, String childName, String fatherName, String age, String date,
			String time, String vaccineName) {
		super();
		this.AppointmentId = appointmentId;
		this.ChildName = childName;
		this.FatherName = fatherName;
		this.Age = age;
		this.Date = date;
		this.Time = time;
		this.VaccineName = vaccineName;
	}
	public int getAppointmentId() {
		return AppointmentId;
	}
	public void setAppointmentId(int appointmentId) {
		AppointmentId = appointmentId;
	}
	public String getChildName() {
		return ChildName;
	}
	public void setChildName(String childName) {
		ChildName = childName;
	}
	public String getFatherName() {
		return FatherName;
	}
	public void setFatherName(String fatherName) {
		FatherName = fatherName;
	}
	public String getAge() {
		return Age;
	}
	public void setAge(String age) {
		Age = age;
	}
	public String getDate() {
		return Date;
	}
	public void setDate(String date) {
		Date = date;
	}
	public String getTime() {
		return Time;
	}
	public void setTime(String time) {
		Time = time;
	}
	public String getVaccineName() {
		return VaccineName;
	}
	public void setVaccineName(String vaccineName) {
		VaccineName = vaccineName;
	}
	
	
	

}
