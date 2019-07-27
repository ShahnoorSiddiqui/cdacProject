package com.example.VaccinationPortal.Service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.annotation.Persistent;
import org.springframework.stereotype.Service;

import com.example.VaccinationPortal.DAO.VaccinationRepository;
import com.example.VaccinationPortal.Model.vaccineinfo;

@Service
public class VaccinationService {
	
	@PersistenceContext
	private EntityManager em;
	
	private VaccinationRepository vrp;
	
	//vaccineinfo vi;

	@Autowired
	public void setVrp(VaccinationRepository vrp) {
		this.vrp = vrp;
	}
	
	

	public List<Object[]> getAgeGroup()
	{
//		Query q=em.createQuery("Select v.VaccineId, v.AgeGroup from vaccineinfo v");
//		List<vaccineinfo> result=q.getResultList();
		List<Object[]> result=vrp.getVAgeGroup();
		
		return result;
		
		
	}
	
	public vaccineinfo  getVaccineDetails(int vid)
	{
		Optional<vaccineinfo> x=vrp.findById(vid);
		vaccineinfo y=null;
		if(x.isPresent())
		{
			y=x.get();
		}
		else
		{
			y=new vaccineinfo(vid,null,null,null);
		}
		
		return y;
	}
	
	public List<vaccineinfo> getAll()
	{
		return vrp.findAll();
	}
	

}
