package com.example.VaccinationPortal.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.VaccinationPortal.Model.vaccineinfo;


@Repository
public interface VaccinationRepository extends JpaRepository<vaccineinfo, Integer> {
		

	@Query("Select VaccineId,AgeGroup from vaccineinfo")
	public List<Object[]> getVAgeGroup();
}
