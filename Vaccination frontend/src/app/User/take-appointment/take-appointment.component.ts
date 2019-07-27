import { Component, OnInit } from '@angular/core';
import { VaccinationServiceService } from 'src/app/_service/vaccination-service.service';
import { VaccineInfo } from 'src/app/_class/VaccineInfo';
import { HospitalserviceService } from 'src/app/_service/hospitalservice.service';
import { HospitalNameID } from 'src/app/_class/hospital-name-id';
import { AppointmentServiceService } from 'src/app/_service/appointment-service.service';
import { AppointmentAdd } from 'src/app/_class/appointment-add';
import { Router } from '@angular/router';

@Component({
  selector: 'app-take-appointment',
  templateUrl: './take-appointment.component.html',
  styleUrls: ['./take-appointment.component.css']
})
export class TakeAppointmentComponent implements OnInit {

  VaccineDetails:string;
   VaccineName:string;
   VaccineInfos:VaccineInfo[];
   Hospitalinfos:HospitalNameID[];
   ageGroup:{};
   vaccineId:{};
   agegroup=1;
   hid=1;
   fTime:string;
   fDate:string;
   fVaccineID:Number;
   fHospitalID:Number;
   fuserid:Number;
   fAppStatus=false;
   AppAdd:AppointmentAdd;


  constructor(private vss:VaccinationServiceService,
    private hss:HospitalserviceService,private router: Router,
    private ass:AppointmentServiceService) {
    this.onChangeVaccine(this.agegroup);
    this.onChangeHospital(this.hid);
   }

  

  ngOnInit() {
    this.onload();
    this.getUserID();
    
  }

  getUserID()
  {
    let id=JSON.parse(sessionStorage.getItem("UID"));
    this.fuserid=id.mid;
  }
  onChangeHospital(HospitalID:Number)
  {
    this.fHospitalID=HospitalID;

  }

  onChangeVaccine(VaccineID:number)
  {
    this.vss.getVaccineDetails(VaccineID).subscribe((data)=>
    {
    //  console.log(data);
      this.VaccineDetails=data.detail;
      this.VaccineName=data.vaccinationName;
      //this.vaccineId=VaccineID;
      this.fVaccineID=VaccineID;
    })
 }

 AddAppointment()
 {
      console.log(this.fVaccineID,this.fDate,this.fTime,this.fHospitalID,this.fuserid,this.fAppStatus);
    this.ass.addAppointment(this.fDate,this.fTime,this.fAppStatus,this.fHospitalID,this.fVaccineID,this.fuserid).subscribe( (data)=>
    {
      console.log(data);
     
    })

    this.router.navigate(["userUpcomming2Appointment"]);
      // this.AppAdd=new AppointmentAdd();
      // this.AppAdd.app_Status=this.fAppStatus;
      // this.AppAdd.date=this.fDate;
      // this.AppAdd.time=this.fTime;
      // this.AppAdd.membID=this.fuserid;
      // this.AppAdd.vacID=this.fVaccineID;
      // this.AppAdd.hosID=this.fHospitalID;
      // this.ass.addAppointment2(this.AppAdd).subscribe( (data)=>{
      //   console.log(data);
      // })

 }
 
 onload()
 {
 this.vss.getAgegroup().subscribe( (data) =>{
  // console.log(data);
    this.VaccineInfos=data;
   //console.log(this.VaccineInfos[0].detail);
 })
 this.hss.getHospitalNameID().subscribe( (data2) =>{
   console.log(data2);
   this.Hospitalinfos=data2;
 })
}
}
