package com.example.VaccinationPortal.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.VaccinationPortal.Model.AddAppointment;
import com.example.VaccinationPortal.Model.AppointmentDetails;
import com.example.VaccinationPortal.Model.HospitalAppointmentDetails;
import com.example.VaccinationPortal.Model.appointmentinfo;
import com.example.VaccinationPortal.Model.hospitalinfo;
import com.example.VaccinationPortal.Model.memberinfo;
import com.example.VaccinationPortal.Model.vaccineinfo;
import com.example.VaccinationPortal.Service.AppointmentService;
import com.example.VaccinationPortal.Service.HospitalName;
import com.example.VaccinationPortal.Service.HospitalService;
import com.example.VaccinationPortal.Service.MemberService;
import com.example.VaccinationPortal.Service.VaccinationService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


@CrossOrigin(origins = "*")
@RestController
public class VaccinationController {
	
	VaccinationService vs;
	HospitalService hs;
	MemberService ms;
	AppointmentService aps;
	
	
	@Autowired
	public void setAps(AppointmentService aps) {
		this.aps = aps;
	}

	@Autowired
	public void setVs(VaccinationService vs) {
		this.vs = vs;
	}
		
	@Autowired
	public void setMs(MemberService ms) {
		this.ms = ms;
	}


	@Autowired
	public void setHs(HospitalService hs) {
		this.hs = hs;
	}


	@GetMapping("/Vagegroup")
	public List<Object[]> getVAgeroup()
	{
		List<Object[]> x=vs.getAgeGroup();
		return x;
		
	}
	
	@GetMapping("/AllVaccine")
	public List<vaccineinfo> getAllVaccine()
	{
		List<vaccineinfo> x=vs.getAll();
		return x;
	}
	
	@GetMapping("/VaccineDetails")
	public vaccineinfo getdetail(@RequestParam("x") int vid)
	{
		vaccineinfo vdetails=vs.getVaccineDetails(vid);
		return vdetails;
	}
	
	
	@GetMapping("/AllHospital")
	public List<hospitalinfo> getAllHospital()
	{
		List<hospitalinfo> Lhospital=hs.getAll();
		return Lhospital;
	}
	
	@GetMapping("/AllMember")
	public List<memberinfo> getAllMember()
	{
		List<memberinfo> LMember=ms.getAllMember();
		return LMember;
	}
	
	@GetMapping("/memberLogin")
	public int memberLogin(@RequestParam("user") String username,@RequestParam("pass") String password)
	{
		int mn=ms.MLogin(username, password);
		return mn;
	}
	
	@GetMapping("/hospitalLogin")
	public int hospitallogin(@RequestParam("hos_user") String userid,@RequestParam("password") String password)
	{
		int hid=hs.getMemberID(userid, password);
		return hid;
	}
	
	@GetMapping("/hospitalName")
	public String getHospitalName(@RequestParam("hid") int hid)
	{
		String hname=hs.getHospitalName(hid);
		String hosname = null;
		ObjectMapper mapper=new ObjectMapper();
		try {
			hosname=mapper.writeValueAsString(hname);
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return hosname;
	}
	
	@GetMapping("/memberName")
	public String getMemberName(@RequestParam("mid") int mid)
	{
		String name=ms.Membername(mid);
		String mname=null;
		ObjectMapper mapper=new ObjectMapper();
		
		try
		{
			mname=mapper.writeValueAsString(name);
		}
		catch(JsonProcessingException e)
		{
			e.printStackTrace();
		}
		return mname;
	}
	
	@GetMapping("/checkmembername")
	public int getUsername(@RequestParam("musername") String musername)
	{
		int Userno=ms.memberUser(musername);
		return Userno;
	}
	
	@PostMapping("/AddMember")
	public memberinfo addMember(@RequestBody memberinfo minfo)
	{
		memberinfo mem_info=ms.AddMember(minfo);
		return mem_info;
	}
	
	@GetMapping("/AllAppointmentDetails")
	public List<appointmentinfo> GellAllDetails()
	{
		List<appointmentinfo> ll=aps.GetAll();
		return ll;
	}
	
	@GetMapping("/HospitalNameIDList")
	public List<HospitalName> GetAllNameIDList()
	{
		List<HospitalName> hni=hs.GetNameID();
    	return hni;
	}
	
	@PostMapping("/AddAppointment")
	public appointmentinfo AddAppointment(@RequestParam("date") String date ,@RequestParam("time") String time , @RequestParam("hosID") int hosID ,@RequestParam("memID") int memID , @RequestParam("vacID") int vacID , @RequestParam("status") boolean status)
	{
		appointmentinfo ap=aps.AddAppointment(date, time, status, hosID, vacID, memID);
		return ap;
		
	}
	
	@PostMapping("/AddAppointment2")
	public AddAppointment addAppointment2(@RequestBody AddAppointment addApp)
	{
		return aps.addAppointment(addApp);
		
	}
	
	@GetMapping("/CompletedAppointment")
	public List<AppointmentDetails> getCompletedAppointment(@RequestParam("id") int memberID)
	{
		List<AppointmentDetails> lCompletedAppointment=aps.getCompletedAppointment(memberID);
		return lCompletedAppointment;
	}
	
	@GetMapping("/HospitalPreviousAppointment")
	public List<HospitalAppointmentDetails> getPreviousHospital(@RequestParam("id") int hospitalId)
	{
		List<HospitalAppointmentDetails> lPreviousHospitalAppointment=aps.getPreviousHospital(hospitalId);
		return lPreviousHospitalAppointment;
	}
	
	@GetMapping("/HospitalUpcomingAppointment")
	public List<HospitalAppointmentDetails> getUpcomingHospital(@RequestParam("id") int hospitalId)
	{
		List<HospitalAppointmentDetails> lPreviousHospitalAppointment=aps.getUpcomingAppointmentHospital(hospitalId);
		return lPreviousHospitalAppointment;
	}
	
	@GetMapping("/UpdateAppointment")
	public appointmentinfo UpdateAppointmentStatus(@RequestParam("id") int AppointId)
	{
		appointmentinfo ap1= aps.updateAppointStatus(AppointId);
		return ap1;
	}
	
	@GetMapping("/EnableHospital")
	public List<hospitalinfo> EnableHospital()
	{
		List<hospitalinfo> EnableHospital=hs.GetEnableHospital();
		return EnableHospital;
	}
	
	
	@GetMapping("/DisableHospital")
	public List<hospitalinfo> DisableHospital()
	{
		List<hospitalinfo> DisableHospital=hs.GetDisableHospital();
		return DisableHospital;
	}
	
	@GetMapping("/DisableTOEnable")
	public hospitalinfo DIStoENA(@RequestParam("id") int hosID)
	{
		hospitalinfo hos1=hs.UpdateDIStoENAHospital(hosID);
		return hos1;
	}
	
	@GetMapping("/EnableToDisable")
	public hospitalinfo ENAtoDIS(@RequestParam("id") int hosID)
	{
		hospitalinfo hos1=hs.UpdateENAtoDISHospital(hosID);
		return hos1;
	}
	
	

}
