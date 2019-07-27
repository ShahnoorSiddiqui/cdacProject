import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HospitalNameID } from '../_class/hospital-name-id';
import { Hospitalinfo } from '../_class/hospitalinfo';



@Injectable({
  providedIn: 'root'
})
export class HospitalserviceService {

  HospitalName:String;
  constructor(private mac:HttpClient) { }

  uri="http://localhost:8086";

  getHospitalName(hid:number):Observable<String>
  {
    let urllink="/hospitalName?hid="+hid;
    return this.mac.get<String>(this.uri+urllink);
  }

  getHospitalNameID():Observable<HospitalNameID[]>
  {
    let urllink="/HospitalNameIDList";
    return this.mac.get<HospitalNameID[]>(this.uri+urllink);

  }

  getEnableHospital():Observable<Hospitalinfo[]>
  {
    let urllink="/EnableHospital";
    return this.mac.get<Hospitalinfo[]>(this.uri+urllink);
  }

  getDisableHospital():Observable<Hospitalinfo[]>
  {
    let urllink="/DisableHospital";
    return this.mac.get<Hospitalinfo[]>(this.uri+urllink);
  }

  UpdateEnableToDisable(Hosid:Number):Observable<Hospitalinfo>
  {
     let urllink="/EnableToDisable?id="+Hosid;
     return this.mac.get<Hospitalinfo>(this.uri+urllink);
  }

  UpdateDisableToEnable(Hosid:Number):Observable<Hospitalinfo>
  {
    let urllink="/DisableTOEnable?id="+Hosid;
    return this.mac.get<Hospitalinfo>(this.uri+urllink);
  }
}
