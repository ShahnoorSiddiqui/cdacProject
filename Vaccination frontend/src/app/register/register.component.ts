import { Component, OnInit } from '@angular/core';
import { LoginRegisterServiceService } from '../_service/login-register-service.service';
import { Memberinfo } from '../_class/memberinfo';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fmemberId:Number;
	fchildName:String;
	fFatherName:String;
	fMotherName:String;
	fdob:String;
	fgender:String;
	fImagePath=null;
  fmobileNo:String;
  faddress:String;
	fusername:String;
  fpassword:String;
  fusernamecheck={};
  memberobject:Memberinfo;

  fdisableRegister=true;
  fClassname="form-control input-md";

  constructor(private fuserregister:LoginRegisterServiceService) {
    this.memberobject=new Memberinfo();
   }

  ngOnInit() {
    this.fdisableRegister=true;
  }

  checkusername()
  {
     this.fuserregister.CheckMemberNameService(this.fusername).subscribe( (data) =>{
       console.log(data);
       this.fusernamecheck=data;
       if(this.fusernamecheck == 1)
       {
            this.fdisableRegister=true;
            this.fClassname="form-control has-error";
       }
       else
       {
         this.fdisableRegister=false;
        this.fClassname="form-control has-noerror";
       }
     })
  }

  MemberRegister()
  {
    if(this.fdisableRegister==false)
    {    
      this.memberobject=new Memberinfo;
      this.memberobject.childName=this.fchildName;
      this.memberobject.fatherName=this.fFatherName;
      this.memberobject.motherName=this.fMotherName;
      this.memberobject.mobileNo=this.fmobileNo;
      this.memberobject.gender=this.fgender;
      this.memberobject.ImagePath=this.fImagePath;
      this.memberobject.dob=this.fdob;
      this.memberobject.address=this.faddress;
      this.memberobject.username=this.fusername;
      this.memberobject.password=this.fpassword;

      this.fuserregister.AddMember(this.memberobject).subscribe( (data)=>
      {
        console.log(data);
      })

    }
    else
    {

    }
  }

}
