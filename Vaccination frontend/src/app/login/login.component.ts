import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginRegisterServiceService } from '../_service/login-register-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private loginText:LoginRegisterServiceService) { }

  ngOnInit() {
  }

  fUsername:string;
  fPassword:string;
  ferrormessage1=false;
  ferrormessage2:string;
  fuseridCheck:Number;
  fhospitalid:Number;
  fHospitalName:string;
  // userloggedin=false;
  // hospitalloggedin=false;

  userlogin2(user_username:String,user_password:String)
  {
    this.loginText.userlogin(user_username,user_password).subscribe( (data:any) =>{
      console.log(data);
      this.fuseridCheck=data;
      //console.log(this.fuserid);

      // if(this.fuseridCheck >= -10)
      //   {
      //        this.userloggedin=true;
      //   }
      })
  }

  hospitalLogin(hos_username:String,hos_password:String)
  {
    this.loginText.hospitalLogin(hos_username,hos_password).subscribe( (data:any) =>{
      console.log(data);
      this.fhospitalid=data;
      // if(this.fhospitalid >=10)
      // {
      //   this.hospitalloggedin=true;
      // }
    })
  }
  FirstCheck():void
  {
      this.userlogin2(this.fUsername,this.fPassword);
      this.hospitalLogin(this.fUsername,this.fPassword);
     
  }

  

  login()
  {
    if(this.fUsername != null && this.fPassword != null)
     {
      

       if(this.fUsername=="admin" && this.fPassword == "admin")
       {
         console.log("admin");
         this.router.navigate(["adminDashboard"]);
       }
       else if(this.fuseridCheck >=1)
       {
        console.log("user");
        let uMID=this.fuseridCheck;
        sessionStorage.setItem("UID",JSON.stringify({mid:uMID}));
          this.router.navigate(["userDashboard"]);
       }
       else if(this.fhospitalid >=1)
        {

          console.log("hospital");
          let vhid=this.fhospitalid;
          
          sessionStorage.setItem("HID",JSON.stringify({hid:vhid}));
         // localStorage.setItem("HID","this.fhospitalid");
           this.router.navigate(["hospitalDashboard"]);
       }
      else if(this.fuseridCheck == -100 && this.fhospitalid == -100)
        {
          console.log("wrong");
          this.ferrormessage1=true;
          this.ferrormessage2="Invalid username and password."
        }

       }
    

     else{
      this.ferrormessage1=true;
      this.ferrormessage2="Please Enter Username and Password."
     }
  }
}
