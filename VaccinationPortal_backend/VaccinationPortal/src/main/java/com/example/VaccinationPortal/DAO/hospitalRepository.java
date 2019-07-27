package com.example.VaccinationPortal.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.VaccinationPortal.Model.hospitalinfo;
import com.example.VaccinationPortal.Service.HospitalName;


@Repository
public interface hospitalRepository extends JpaRepository<hospitalinfo, Integer> {
	
	@Query("SELECT h.hospital_ID FROM hospitalinfo h where h.UserId=?1 AND h.password=?2 AND h.hos_status='enable'")
	public String GetHospitalID(String username,String password);
	
	@Query("SELECT h.hospitalname FROM hospitalinfo h where h.hospital_ID=?1")
	public String GetHospitalName(int hid);
	
	@Query("SELECT new com.example.VaccinationPortal.Service.HospitalName(hn.hospital_ID,hn.hospitalname) FROM hospitalinfo hn where hn.hos_status='enable'")
	public List<HospitalName> GetNameID();
	
	@Query("Select hn From hospitalinfo hn where hn.hos_status='enable'")
	public List<hospitalinfo> GetEnableHospital();
	
	@Query("Select hn From hospitalinfo hn where hn.hos_status='disable'")
	public List<hospitalinfo> GetDisableHospital();

}
