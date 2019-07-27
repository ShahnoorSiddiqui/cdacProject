import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Hospitalinfo } from '../_class/hospitalinfo';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  uri="http://localhost:8086";
  constructor(private mac:HttpClient) { }

  getAllHospital():Observable<Hospitalinfo[]>
  {
    let urllink="/AllHospital";
    return this.mac.get<Hospitalinfo[]>(this.uri+urllink);
  }

  getChildName(mid:Number)
  {
    let urllink="/memberName?mid="+mid;
    return this.mac.get(this.uri+urllink);
  }
}
