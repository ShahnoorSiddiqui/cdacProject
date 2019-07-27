package com.example.VaccinationPortal.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.VaccinationPortal.Model.AppointmentDetails;
import com.example.VaccinationPortal.Model.HospitalAppointmentDetails;
import com.example.VaccinationPortal.Model.appointmentinfo;

@Repository
public interface appointmentRepository extends JpaRepository<appointmentinfo, Integer> {
	
	@Query("SELECT new com.example.VaccinationPortal.Model.AppointmentDetails(ap.appointmentid,ap.vaccine.AgeGroup,ap.date,ap.time,ap.vaccine.vaccinationName,ap.hospital.hospitalname) FROM appointmentinfo ap where ap.app_Status=1 and ap.member.member_id=?1")
	public List<AppointmentDetails> getCompletedAppointment(int memberId);
	
	
	@Query("SELECT new com.example.VaccinationPortal.Model.HospitalAppointmentDetails(ap.appointmentid,ap.member.ChildName,ap.member.FatherName,ap.vaccine.AgeGroup,ap.date,ap.time,ap.vaccine.vaccinationName) FROM appointmentinfo ap where ap.app_Status=1 and ap.hospital.hospital_ID=?1")
	public List<HospitalAppointmentDetails> getHospitalCompletedAppointment(int HospitalID);
	
	@Query("SELECT new com.example.VaccinationPortal.Model.HospitalAppointmentDetails(ap.appointmentid,ap.member.ChildName,ap.member.FatherName,ap.vaccine.AgeGroup,ap.date,ap.time,ap.vaccine.vaccinationName) FROM appointmentinfo ap where ap.app_Status=0 and ap.hospital.hospital_ID=?1")
	public List<HospitalAppointmentDetails> getHospitalUpcomingAppointment(int HospitalID);
	
	

}
