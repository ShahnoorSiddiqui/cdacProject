import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppointmentDetails } from '../_class/appointment-details';
import { HospitalAppointmentDetails } from '../_class/hospital-appointment-details';
import { AppointmentInfo } from '../_class/appointment-info';
import { AppointmentAdd } from '../_class/appointment-add';

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  constructor(private mac:HttpClient) { }

  uri="http://localhost:8086";

  addAppointment(date:string,time:string,status:boolean,hosId:Number,vaccID:Number,memID:Number)
  {
        let urllink="/AddAppointment";
        const body="?date="+date+"&time="+time+"&hosID="+hosId+"&vacID="+vaccID+"&memID="+memID+"&status="+status;
        return this.mac.post(this.uri+urllink+body,body);
  }

  addAppointment2(AppAdd:AppointmentAdd):Observable<AppointmentAdd>
  {
    let urllink="/AddAppointment2";
    return this.mac.post<AppointmentAdd>(this.uri+urllink,AppAdd);
  }

  completedAppointment(memberID:Number):Observable<AppointmentDetails[]>
  {
    let urllink="/CompletedAppointment?id="+memberID;
    return this.mac.get<AppointmentDetails[]>(this.uri+urllink);
  }

  previousHospitalAppointment(HospitalID:Number):Observable<HospitalAppointmentDetails[]>
  {
    let urllink="/HospitalPreviousAppointment?id="+HospitalID;
    return this.mac.get<HospitalAppointmentDetails[]>(this.uri+urllink);
  }

  UpcomingHospitalAppointment(HospitalID:Number):Observable<HospitalAppointmentDetails[]>
  {
    let urllink="/HospitalUpcomingAppointment?id="+HospitalID;
    return this.mac.get<HospitalAppointmentDetails[]>(this.uri+urllink);
  }

  Updatestatus(AppointID:Number):Observable<AppointmentInfo>
  {
    let urllink="/UpdateAppointment?id="+AppointID;
    return this.mac.get<AppointmentInfo>(this.uri+urllink);
  }
}
