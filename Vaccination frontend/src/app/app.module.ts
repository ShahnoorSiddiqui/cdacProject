import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { HospitalRegisterComponent } from './hospital-register/hospital-register.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { HospitalDashboardComponent } from './Hospital/hospital-dashboard/hospital-dashboard.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { AdminMenuBarComponent } from './admin/admin-menu-bar/admin-menu-bar.component';
import { HospitalMenuBarComponent } from './Hospital/hospital-menu-bar/hospital-menu-bar.component';
import { UserMenuBarComponent } from './User/user-menu-bar/user-menu-bar.component';
import { VaccinationDetailsComponent } from './vaccination-details/vaccination-details.component';
import {FormsModule} from '@angular/forms';
import { TakeAppointmentComponent } from './User/take-appointment/take-appointment.component';
import { PreviousAppointmentComponent } from './User/previous-appointment/previous-appointment.component';
import { HospitalListComponent } from './User/hospital-list/hospital-list.component';
import { HospitalPreviousAppointmentComponent } from './Hospital/hospital-previous-appointment/hospital-previous-appointment.component';
import { HospitalUpcomingAppointmentComponent } from './Hospital/hospital-upcoming-appointment/hospital-upcoming-appointment.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule, MatNativeDateModule, MatTableModule } from '@angular/material';
import { AdminHospitalListComponent } from './admin/admin-hospital-list/admin-hospital-list.component';
import { AdminDisableHospitalListComponent } from './admin/admin-disable-hospital-list/admin-disable-hospital-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterBarComponent,
    MenuBarComponent,
    LoginComponent,
    AboutUsComponent,
    ContactUsComponent,
    RegisterComponent,
    HospitalRegisterComponent,
    AdminDashboardComponent,
    HospitalDashboardComponent,
    UserDashboardComponent,
    AdminMenuBarComponent,
    HospitalMenuBarComponent,
    UserMenuBarComponent,
    VaccinationDetailsComponent,
    TakeAppointmentComponent,
    PreviousAppointmentComponent,
    HospitalListComponent,
    HospitalPreviousAppointmentComponent,
    HospitalUpcomingAppointmentComponent,
    AdminHospitalListComponent,
    AdminDisableHospitalListComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,            
    MatDatepickerModule,        
    MatNativeDateModule, 
    MatTableModule       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
