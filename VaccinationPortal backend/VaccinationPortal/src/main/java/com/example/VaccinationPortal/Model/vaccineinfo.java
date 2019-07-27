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
@Table(name="vaccineinfo")
public class vaccineinfo {

	@Id
	@GeneratedValue
	private int VaccineId;
	@Column(name="AgeGroup")
	private String AgeGroup;
	@Column(name="vaccinationName")
	private String vaccinationName ;
	@Column(name="detail")
	private String detail;
	
	
	public vaccineinfo() {
		// TODO Auto-generated constructor stub
	}
	public vaccineinfo(int vaccineId, String ageGroup, String vaccinationName, String detail) {
		this.VaccineId = vaccineId;
		this.AgeGroup = ageGroup;
		this.vaccinationName = vaccinationName;
		this.detail = detail;
	}
	public int getVaccineId() {
		return VaccineId;
	}
	public void setVaccineId(int vaccineId) {
		this.VaccineId = vaccineId;
	}
	public String getAgeGroup() {
		return AgeGroup;
	}
	public void setAgeGroup(String ageGroup) {
		this.AgeGroup = ageGroup;
	}
	public String getVaccinationName() {
		return vaccinationName;
	}
	public void setVaccinationName(String vaccinationName) {
		this.vaccinationName = vaccinationName;
	}
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	

}
