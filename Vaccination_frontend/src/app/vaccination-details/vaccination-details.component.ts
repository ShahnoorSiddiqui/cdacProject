import { Component, OnInit } from '@angular/core';
import { VaccinationServiceService } from '../_service/vaccination-service.service';
import { VaccineInfo } from '../_class/VaccineInfo';

@Component({
  selector: 'app-vaccination-details',
  templateUrl: './vaccination-details.component.html',
  styleUrls: ['./vaccination-details.component.css']
})
export class VaccinationDetailsComponent implements OnInit {

  
   VaccineDetails:string;
   VaccineName:string;
   VaccineInfos:VaccineInfo[];
   ageGroup:{};
   vaccineId:{};
   agegroup=1;
  constructor(private vss:VaccinationServiceService) { 
    //this.VaccinationDetails=this.vss.getAgegroup();
    this.onChangeVaccine(this.agegroup); 
  }

  ngOnInit():void {

    this.onload();
    
  }

   onChangeVaccine(VaccineID:number)
   {
     this.vss.getVaccineDetails(VaccineID).subscribe((data)=>
     {
     //  console.log(data);
       this.VaccineDetails=data.detail;
       this.VaccineName=data.vaccinationName;
     })
  }
  
  onload()
  {
  this.vss.getAgegroup().subscribe( (data) =>{
   // console.log(data);
     this.VaccineInfos=data;
    //console.log(this.VaccineInfos[0].detail);
  })
}



}