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
@Table(name="memberinfo")
public class memberinfo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int member_id;
	
	@Column(name="childName")
	private String ChildName;
	
	@Column(name="fatherName")
	private String FatherName;
	
	@Column(name="motherName")
	private String MotherName;
	
	@Column(name="dob")
	private String DOB;
	

	

	@Column(name="gender")
	private String Gender;
	
	
	@Column(name="imagePath")
	private String ImagePath;
	
	@Column(name="mobile_no")
	private String MobileNo;
	
	@Column(name="address")
	private String address;
	
	@Column(name="username")
	private String username;
	
	@Column(name="password")
	private String password;

	public memberinfo() {
		super();
		// TODO Auto-generated constructor stub
	}

	public memberinfo(int memberId, String childName, String fatherName, String motherName, String dOB, String gender,
			String imagePath, String mobileNo, String address, String username, String password) {
		super();
		this.member_id = memberId;
		this.ChildName = childName;
		this.FatherName = fatherName;
		this.MotherName = motherName;
		this.DOB = dOB;
		this.Gender = gender;
		this.ImagePath = imagePath;
		this.MobileNo = mobileNo;
		this.address = address;
		this.username = username;
		this.password = password;
	}

	public int getMemberId() {
		return member_id;
	}

	public void setMemberId(int memberId) {
		this.member_id = memberId;
	}

	public String getChildName() {
		return ChildName;
	}

	public void setChildName(String childName) {
		this.ChildName = childName;
	}

	public String getFatherName() {
		return FatherName;
	}

	public void setFatherName(String fatherName) {
		this.FatherName = fatherName;
	}

	public String getMotherName() {
		return MotherName;
	}

	public void setMotherName(String motherName) {
		this.MotherName = motherName;
	}

	public String getDOB() {
		return DOB;
	}

	public void setDOB(String dOB) {
		this.DOB = dOB;
	}

	public String getGender() {
		return Gender;
	}

	public void setGender(String gender) {
		this.Gender = gender;
	}

	public String getImagePath() {
		return ImagePath;
	}

	public void setImagePath(String imagePath) {
		this.ImagePath = imagePath;
	}

	public String getMobileNo() {
		return MobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.MobileNo = mobileNo;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	
	

}
