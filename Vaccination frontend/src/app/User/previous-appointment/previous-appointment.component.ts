import { Component, OnInit } from '@angular/core';
import { AppointmentServiceService } from 'src/app/_service/appointment-service.service';
import { AppointmentDetails } from 'src/app/_class/appointment-details';

@Component({
  selector: 'app-previous-appointment',
  templateUrl: './previous-appointment.component.html',
  styleUrls: ['./previous-appointment.component.css']
})
export class PreviousAppointmentComponent implements OnInit {

  fUserId:Number;
  static count=0;
  CompletedAppointmentDetails:AppointmentDetails[];
  constructor(private ass:AppointmentServiceService) { }
   
  ngOnInit() {
    this.getUserID();
    this.getCompletedAppointment();
  }
   
  getUserID()
  {
    let fuid=JSON.parse(sessionStorage.getItem("UID"));
    this.fUserId=fuid.mid;
  }

  getCompletedAppointment()
  {
    this.ass.completedAppointment(this.fUserId).subscribe( (data)=>
    {
     // console.log(data);
      this.CompletedAppointmentDetails=data;
    })
  }

}
