import { Component, OnInit } from '@angular/core';
import { HospitalserviceService } from 'src/app/_service/hospitalservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-menu-bar',
  templateUrl: './hospital-menu-bar.component.html',
  styleUrls: ['./hospital-menu-bar.component.css']
})
export class HospitalMenuBarComponent implements OnInit {

  Hospital_name={};
  vhid:number;

  
  constructor(private hos:HospitalserviceService,
    private router: Router) { }

  ngOnInit() {

    if(sessionStorage.length<=0)
    {
     this.router.navigate(["adminDashboard"]);
    }
    else
    {
    let vHID=JSON.parse(sessionStorage.getItem("HID"));
    console.log(vHID.hid);
    this.vhid=vHID.hid;
    console.log(this.vhid);
    this.getHospitalName(this.vhid);
    }

  }

  getHospitalName(vid:number)
  {
    this.hos.getHospitalName(vid).subscribe( (data:String)=>{
      console.log(data);
      this.Hospital_name=data;
    })
  }

}
