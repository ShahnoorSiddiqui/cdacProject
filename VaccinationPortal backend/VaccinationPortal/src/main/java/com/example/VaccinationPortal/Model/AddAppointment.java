package com.example.VaccinationPortal.Model;

public class AddAppointment {

	private String Date;
	private String Time;
	private boolean app_status;
	private int HosID;
	private int vaccID;
	private int memID;
	public AddAppointment() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AddAppointment(String date, String time, boolean app_status, int hosID, int vaccID, int memID) {
		super();
		this.Date = date;
		this.Time = time;
		this.app_status = app_status;
		this.HosID = hosID;
		this.vaccID = vaccID;
		this.memID = memID;
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
	public boolean getApp_status() {
		return app_status;
	}
	public void setApp_status(boolean app_status) {
		this.app_status = app_status;
	}
	public int getHosID() {
		return HosID;
	}
	public void setHosID(int hosID) {
		HosID = hosID;
	}
	public int getVaccID() {
		return vaccID;
	}
	public void setVaccID(int vaccID) {
		this.vaccID = vaccID;
	}
	public int getMemID() {
		return memID;
	}
	public void setMemID(int memID) {
		this.memID = memID;
	}
	
	
	
}
