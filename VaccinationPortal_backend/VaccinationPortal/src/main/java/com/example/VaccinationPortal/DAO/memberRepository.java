package com.example.VaccinationPortal.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.VaccinationPortal.Model.memberinfo;


@Repository
public interface memberRepository extends JpaRepository<memberinfo, Integer> {
	
	@Query("SELECT m.member_id FROM memberinfo m WHERE m.username=?1 AND m.password=?2")
	public String findmember(String username ,String password);
	
	@Query("SELECT COUNT(m) FROM memberinfo m WHERE m.username=?1")
	public int Countusername(String username);

}
