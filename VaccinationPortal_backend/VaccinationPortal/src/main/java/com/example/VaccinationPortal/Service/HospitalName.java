package com.example.VaccinationPortal.Service;

public class HospitalName {
	
	private int hospital_Id;
	private String hospitalname;
	public HospitalName() {
		super();
		// TODO Auto-generated constructor stub
	}
	public HospitalName(int hospital_Id, String hospitalname) {
		super();
		this.hospital_Id = hospital_Id;
		this.hospitalname = hospitalname;
	}
	public int getHospital_Id() {
		return hospital_Id;
	}
	public void setHospital_Id(int hospital_Id) {
		this.hospital_Id = hospital_Id;
	}
	public String getHospitalname() {
		return hospitalname;
	}
	public void setHospitalname(String hospitalname) {
		this.hospitalname = hospitalname;
	}
	
	

}
