import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/_service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu-bar',
  templateUrl: './user-menu-bar.component.html',
  styleUrls: ['./user-menu-bar.component.css']
})
export class UserMenuBarComponent implements OnInit {

  User_name={}
  fMmemberID:String;
  constructor(private userservice:UserServiceService,
    private router: Router) { }

  ngOnInit() {

    // this.fMmemberID=sessionStorage.key(0);
     if(sessionStorage.length<=0)
     {
      this.router.navigate(["adminDashboard"]);
     }

     else
     {

    let SMemberId=JSON.parse(sessionStorage.getItem("UID"));
    console.log(SMemberId);
    this.getMemberName(SMemberId.mid);
     }

  }

  getMemberName(uid:Number)
  {
    this.userservice.getChildName(uid).subscribe( (data)=>{
      console.log(data);
      this.User_name=data;
    })

  }

}
