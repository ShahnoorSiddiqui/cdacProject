import { Component, OnInit } from '@angular/core';
import { Hospitalinfo } from 'src/app/_class/hospitalinfo';
import { HospitalserviceService } from 'src/app/_service/hospitalservice.service';

@Component({
  selector: 'app-admin-disable-hospital-list',
  templateUrl: './admin-disable-hospital-list.component.html',
  styleUrls: ['./admin-disable-hospital-list.component.css']
})
export class AdminDisableHospitalListComponent implements OnInit {

  Hospitalinfos:Hospitalinfo[];
  constructor(private hss:HospitalserviceService) { 
    this.getDisableList();
  }

  ngOnInit() {
    this.getDisableList();
  }

  getDisableList()
  {
    this.hss.getDisableHospital().subscribe( (data)=>
    {
      this.Hospitalinfos=data;
    })
  }

  fEnable(id:Number)
  {
   console.log(id);
   this.hss.UpdateDisableToEnable(id).subscribe( 
     (data)=>{ 
      //  console.log(data)
      }
   );
   this.getDisableList();
  }

}
