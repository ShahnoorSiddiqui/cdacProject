import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { HospitalRegisterComponent } from './hospital-register/hospital-register.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { HospitalDashboardComponent } from './Hospital/hospital-dashboard/hospital-dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { VaccinationDetailsComponent } from './vaccination-details/vaccination-details.component';
import { TakeAppointmentComponent } from './User/take-appointment/take-appointment.component';
import { PreviousAppointmentComponent } from './User/previous-appointment/previous-appointment.component';
import { HospitalListComponent } from './User/hospital-list/hospital-list.component';
import { HospitalUpcomingAppointmentComponent } from './Hospital/hospital-upcoming-appointment/hospital-upcoming-appointment.component';
import { HospitalPreviousAppointmentComponent } from './Hospital/hospital-previous-appointment/hospital-previous-appointment.component';
import { AdminHospitalListComponent } from './admin/admin-hospital-list/admin-hospital-list.component';
import { AdminDisableHospitalListComponent } from './admin/admin-disable-hospital-list/admin-disable-hospital-list.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'userregister' , component:RegisterComponent},
  {path:'hospitalregister',component:HospitalRegisterComponent},
  {path:'userDashboard' , component:UserDashboardComponent},
  {path:'hospitalDashboard' , component:HospitalDashboardComponent},
  {path:'adminDashboard' ,component:AdminDashboardComponent},
  {path:'vaccinationdetails' , component:VaccinationDetailsComponent},
  {path:'takeAppointment' , component:TakeAppointmentComponent},
  {path:"userPreviousAppointment" , component:PreviousAppointmentComponent},
  {path:"userhospitallist" , component:HospitalListComponent},
  {path:"hospitalupcomingappointment" , component:HospitalUpcomingAppointmentComponent},
  {path:"hospitalpreviousappointment" , component:HospitalPreviousAppointmentComponent},
  {path:"adminHospitalList" , component:AdminHospitalListComponent},
  {path:"adminDisableHospital",component:AdminDisableHospitalListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
