import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/_service/user-service.service';
import { Hospitalinfo } from 'src/app/_class/hospitalinfo';
import { HospitalserviceService } from 'src/app/_service/hospitalservice.service';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {

  Hospitalinfos:Hospitalinfo[]
  constructor(private hss:HospitalserviceService) { }

  ngOnInit() {
    this.getEnableHospital();
  }

  getEnableHospital()
  {
    this.hss.getEnableHospital().subscribe((data)=>
    {
      console.log(data);
      this.Hospitalinfos=data;
    })

  }
}
