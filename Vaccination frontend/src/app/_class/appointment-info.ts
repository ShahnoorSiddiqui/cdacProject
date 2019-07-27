import { Hospitalinfo } from './hospitalinfo';
import { VaccineInfo } from './VaccineInfo';
import { Memberinfo } from './memberinfo';

export class AppointmentInfo {

    appointmentId:Number;
    app_Status:boolean;
    date:String;
    time:String;
    hospital:Hospitalinfo;
    vaccine:VaccineInfo;
    member:Memberinfo;
}
