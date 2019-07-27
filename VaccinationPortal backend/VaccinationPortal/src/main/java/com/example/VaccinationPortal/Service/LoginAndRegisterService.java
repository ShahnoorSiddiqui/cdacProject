package com.example.VaccinationPortal.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.VaccinationPortal.DAO.hospitalRepository;
import com.example.VaccinationPortal.DAO.memberRepository;

@Service
public class LoginAndRegisterService {

	@PersistenceContext
	EntityManager em;
	
	hospitalRepository hrp;
	memberRepository mrp;
	
	@Autowired
	public void setHrp(hospitalRepository hrp) {
		this.hrp = hrp;
	}
	
	@Autowired
	public void setMrp(memberRepository mrp) {
		this.mrp = mrp;
	}
	
	public Object login(String username,String password)
	{
		
		return null;
	}
}
