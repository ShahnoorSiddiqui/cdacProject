import { Injectable } from '@angular/core';
import { VaccineInfo } from '../_class/VaccineInfo';
import { HttpClient,HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VaccinationServiceService {


  uri="http://localhost:8086";

  constructor(private mac:HttpClient) { }

  getAgegroup():Observable<VaccineInfo[]>{
     let urllink="/AllVaccine";
     return this.mac.get<VaccineInfo[]>(this.uri+urllink);
   }

   getVaccineDetails(vaccineId:Number):Observable<VaccineInfo>
   {
     let urllink="/VaccineDetails?x="+vaccineId;

     return this.mac.get<VaccineInfo>(this.uri+urllink);
   }
  
     
  }
  

