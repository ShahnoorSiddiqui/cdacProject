import { Component, OnInit } from '@angular/core';
import { Hospitalinfo } from 'src/app/_class/hospitalinfo';
import { HospitalserviceService } from 'src/app/_service/hospitalservice.service';

@Component({
  selector: 'app-admin-hospital-list',
  templateUrl: './admin-hospital-list.component.html',
  styleUrls: ['./admin-hospital-list.component.css']
})
export class AdminHospitalListComponent implements OnInit {

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

  fDisable(id:Number)
  {
    console.log(id);
    this.hss.UpdateEnableToDisable(id).subscribe( (data)=>
    {
      console.log(data);
    });
    this.getEnableHospital();
  }
}
