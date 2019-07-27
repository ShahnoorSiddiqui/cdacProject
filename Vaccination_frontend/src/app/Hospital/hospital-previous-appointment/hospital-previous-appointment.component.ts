import { Component, OnInit } from '@angular/core';
import { AppointmentServiceService } from 'src/app/_service/appointment-service.service';
import { HospitalAppointmentDetails } from 'src/app/_class/hospital-appointment-details';

@Component({
  selector: 'app-hospital-previous-appointment',
  templateUrl: './hospital-previous-appointment.component.html',
  styleUrls: ['./hospital-previous-appointment.component.css']
})
export class HospitalPreviousAppointmentComponent implements OnInit {

  HospitalAppointmentDetails:HospitalAppointmentDetails[];
  fHospitalID:Number;
  constructor(private ass:AppointmentServiceService) { }

  ngOnInit() {
    this.getMemberID();
    this.getPreviousAppointment();
  }

  getMemberID()
  {
    let HisID=JSON.parse(sessionStorage.getItem("HID"));
    this.fHospitalID=HisID.hid;
  }

  getPreviousAppointment()
  {
    this.ass.previousHospitalAppointment(this.fHospitalID).subscribe( (data)=>
    {
      this.HospitalAppointmentDetails=data;
      console.log(this.HospitalAppointmentDetails);
    })
  }

}
