package com.example.VaccinationPortal.Service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.VaccinationPortal.DAO.memberRepository;
import com.example.VaccinationPortal.Model.memberinfo;

@Service
public class MemberService {
	
	@PersistenceContext
	EntityManager em;
	
	memberRepository mrp;

	public memberRepository getMrp() {
		return mrp;
	}

	@Autowired
	public void setMrp(memberRepository mrp) {
		this.mrp = mrp;
	}
	
	public List<memberinfo> getAllMember()
	{
		List<memberinfo> lMember=mrp.findAll();
		return lMember;
	}
	
	public int MLogin(String username,String Password)
	{
		String mn=mrp.findmember(username, Password);
		int mid;
		if(mn==null)
		{
			mid=-100;
		}
		else
		{
			mid=Integer.parseInt(mn);
		}
		return mid;
	}
	
	public String Membername(int mid)
	{
		Optional<memberinfo> minfo=mrp.findById(mid);
		memberinfo mifo=minfo.get();
		String childname=mifo.getChildName();
	
		return childname;
	}
	
	public memberinfo AddMember(memberinfo mn)
	{
		mrp.save(mn);
		return mn;
	}
	
	public int memberUser(String username)
	{
		int userno=mrp.Countusername(username);
		return userno;
	}
	

}
