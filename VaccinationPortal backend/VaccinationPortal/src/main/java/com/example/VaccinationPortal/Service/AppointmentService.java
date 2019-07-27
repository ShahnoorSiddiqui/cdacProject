package com.example.VaccinationPortal.Service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.VaccinationPortal.DAO.VaccinationRepository;
import com.example.VaccinationPortal.DAO.appointmentRepository;
import com.example.VaccinationPortal.DAO.hospitalRepository;
import com.example.VaccinationPortal.DAO.memberRepository;
import com.example.VaccinationPortal.Model.AppointmentDetails;
import com.example.VaccinationPortal.Model.HospitalAppointmentDetails;
import com.example.VaccinationPortal.Model.appointmentinfo;
import com.example.VaccinationPortal.Model.hospitalinfo;
import com.example.VaccinationPortal.Model.memberinfo;
import com.example.VaccinationPortal.Model.vaccineinfo;
import com.example.VaccinationPortal.Model.AddAppointment;


@Service
public class AppointmentService {
	
	@PersistenceContext
	EntityManager em;
	
	appointmentRepository arp;
	hospitalRepository hrp;
	memberRepository mrp;
	VaccinationRepository vrp;

	@Autowired
	public void setArp(appointmentRepository arp) {
		this.arp = arp;
	}
	
	@Autowired
	public void setHrp(hospitalRepository hrp) {
		this.hrp = hrp;
	}

	@Autowired
	public void setMrp(memberRepository mrp) {
		this.mrp = mrp;
	}

	@Autowired
	public void setVrp(VaccinationRepository vrp) {
		this.vrp = vrp;
	}



	public List<appointmentinfo> GetAll()
	{
		List<appointmentinfo> ll=arp.findAll();
		return ll;
	}
	
	public List<AppointmentDetails> getCompletedAppointment(int memberId)
	{
		List<AppointmentDetails> lCompletedAppointment=arp.getCompletedAppointment(memberId);
		return lCompletedAppointment;
	}
	
	public List<HospitalAppointmentDetails> getPreviousHospital(int hospitalID)
	{
		List<HospitalAppointmentDetails> lPreviousHospitalAppointment=arp.getHospitalCompletedAppointment(hospitalID);
		return lPreviousHospitalAppointment;
	}
	
	
	public appointmentinfo updateAppointStatus(int AppointID)
	{
		appointmentinfo api=null;
		Optional<appointmentinfo> apointID=arp.findById(AppointID);
		if(apointID.isPresent())
		{
			api=apointID.get();
		}
		api.setApp_Status(true);
		arp.save(api);
		return api;
	}
	
	public List<HospitalAppointmentDetails> getUpcomingAppointmentHospital(int hospitalID)
	{
		List<HospitalAppointmentDetails> lPreviousHospitalAppointment=arp.getHospitalUpcomingAppointment(hospitalID);
		return lPreviousHospitalAppointment;
	}
	
	
	public AddAppointment addAppointment(AddAppointment addApp)
	{
	     return addApp;	
	}

	
	public appointmentinfo AddAppointment(String date,String time,boolean status,int HospitalID,int vaccineID,int MemberID)
	{
		hospitalinfo addHospital=null;
		memberinfo addMember=null;
		vaccineinfo addVaccine=null;
		appointmentinfo ap=new appointmentinfo(date, time, status);
		Optional<hospitalinfo> hospital=hrp.findById(HospitalID);
		if(hospital.isPresent())
		{
			addHospital=hospital.get();
		}
		Optional<vaccineinfo> vaccine=vrp.findById(vaccineID);
		if(vaccine.isPresent())
		{
			addVaccine=vaccine.get();
		}
		Optional<memberinfo> member=mrp.findById(MemberID);
		if(member.isPresent())
		{
			addMember=member.get();
		}
		ap.setHospital(addHospital);
		ap.setVaccine(addVaccine);
		ap.setMember(addMember);
		appointmentinfo apsave=arp.save(ap);
		
		return apsave;
	}
	

}
