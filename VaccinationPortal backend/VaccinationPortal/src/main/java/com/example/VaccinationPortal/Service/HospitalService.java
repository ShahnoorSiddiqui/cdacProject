package com.example.VaccinationPortal.Service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.VaccinationPortal.DAO.hospitalRepository;
import com.example.VaccinationPortal.Model.hospitalinfo;

@Service
public class HospitalService {
	
	@PersistenceContext
	EntityManager em;
	
	hospitalRepository hrp;
	
	@Autowired
	public void setHrp(hospitalRepository hrp) {
		this.hrp = hrp;
	}
	
	
	public List<hospitalinfo> getAll()
	{
		List<hospitalinfo> LHospital=hrp.findAll();
		return LHospital;
	}
	
	
	public int getMemberID(String username,String password)
	{
		int hid;
		String hid1=hrp.GetHospitalID(username, password);
		if(hid1==null) {
			hid=-100;
		}
		else
		{
			hid=Integer.parseInt(hid1);
		}
		return hid;
	}
	
	public String getHospitalName(int hid)
	{
		String hname=hrp.GetHospitalName(hid);
		return hname;
	}
	
	public List<hospitalinfo> GetEnableHospital()
	{
		List<hospitalinfo> hEnableList=hrp.GetEnableHospital();
		return hEnableList;
	}
	
	public List<hospitalinfo> GetDisableHospital()
	{
		List<hospitalinfo> hEnableList=hrp.GetDisableHospital();
		return hEnableList;
	}
	
	public hospitalinfo UpdateDIStoENAHospital(int id)
	{
		hospitalinfo hin=null;
		Optional<hospitalinfo> hin1=hrp.findById(id);
		if(hin1.isPresent())
		{
			hin=hin1.get();
		}
		hin.setHos_status("enable");
		hrp.save(hin);
		return hin;
	}
	
	
	public hospitalinfo UpdateENAtoDISHospital(int id)
	{
		hospitalinfo hin=null;
		Optional<hospitalinfo> hin1=hrp.findById(id);
		if(hin1.isPresent())
		{
			hin=hin1.get();
			hin.setHos_status("disable");
			hrp.save(hin);
		}
		
		return hin;
	}
	
	
    public List<HospitalName> GetNameID()
    {
    	List<HospitalName> hni=hrp.GetNameID();
    	return hni;
    }
    

}
