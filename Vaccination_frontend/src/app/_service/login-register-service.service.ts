import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HospitalserviceService } from './hospitalservice.service';
import { Memberinfo } from '../_class/memberinfo';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterServiceService {

  uri="http://localhost:8086";

  no:Number;
  constructor(private mac:HttpClient) { }

  userlogin(fusername:String,fpassword:String)
  {
  
    let urllink="/memberLogin?user="+fusername+"&pass="+fpassword;
    return this.mac.get(this.uri+urllink);
  }

  hospitalLogin(huserid:String,hpassword:String)
  {
    let urllink="/hospitalLogin?hos_user="+huserid+"&password="+hpassword;
    return this.mac.get(this.uri+urllink);
  }

  CheckMemberNameService(username:String)
  {
    let urllink="/checkmembername?musername="+username;
    return this.mac.get(this.uri+urllink);
  }

  AddMember(Member:Memberinfo):Observable<Memberinfo>
  {
    console.log(Member);
    let urllink="/AddMember";
    return this.mac.post<Memberinfo>(this.uri+urllink,Member);
  }
 
  

}
