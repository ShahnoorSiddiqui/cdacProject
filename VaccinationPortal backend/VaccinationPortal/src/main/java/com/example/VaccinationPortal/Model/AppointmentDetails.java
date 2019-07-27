package com.example.VaccinationPortal.Model;

public class AppointmentDetails {
	
	private int AppointmentId;
	private String Age;
	private String Date;
	private String Time;
	private String VaccineName;
	private String HospitalName;
	public AppointmentDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AppointmentDetails(int appointmentId, String age, String date, String time, String vaccineName,
			String hospitalName) {
		super();
		this.AppointmentId = appointmentId;
		this.Age = age;
		this.Date = date;
		this.Time = time;
		this.VaccineName = vaccineName;
		this.HospitalName = hospitalName;
	}
	public int getAppointmentId() {
		return AppointmentId;
	}
	public void setAppointmentId(int appointmentId) {
		AppointmentId = appointmentId;
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
	public String getHospitalName() {
		return HospitalName;
	}
	public void setHospitalName(String hospitalName) {
		HospitalName = hospitalName;
	}
	
	
	
	
	

}
