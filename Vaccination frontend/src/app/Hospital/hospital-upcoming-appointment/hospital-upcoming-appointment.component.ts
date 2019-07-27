import { Component, OnInit } from '@angular/core';
import { HospitalAppointmentDetails } from 'src/app/_class/hospital-appointment-details';
import { AppointmentServiceService } from 'src/app/_service/appointment-service.service';

@Component({
  selector: 'app-hospital-upcoming-appointment',
  templateUrl: './hospital-upcoming-appointment.component.html',
  styleUrls: ['./hospital-upcoming-appointment.component.css']
})
export class HospitalUpcomingAppointmentComponent implements OnInit {

  HospitalAppointmentDetails:HospitalAppointmentDetails[];
  fHospitalID:Number;
  
  constructor(private ass:AppointmentServiceService) { }

  ngOnInit() {
    this.getMemberID();
    this.getUpcomingAppointment();
  }

  getMemberID()
  {
    let HisID=JSON.parse(sessionStorage.getItem("HID"));
    this.fHospitalID=HisID.hid;
  }

  Complete(id:Number)
  {
    console.log(id);
    this.ass.Updatestatus(id).subscribe( (data)=>{
      console.log(data);
    })
    this.getUpcomingAppointment();

  }
  getUpcomingAppointment()
  {
    this.ass.UpcomingHospitalAppointment(this.fHospitalID).subscribe( (data)=>
    {
      this.HospitalAppointmentDetails=data;
      console.log(this.HospitalAppointmentDetails);
    })
  }
}
