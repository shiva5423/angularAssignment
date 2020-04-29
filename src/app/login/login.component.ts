import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public rs:Router,public ds:DataService) { }
  rdata;
  loginData(data){
    this.rdata=this.ds.regData
    var user=data.email;
    if(data.email==this.rdata.email){
      if(data.password==this.rdata.password){
        alert('successfully login')
        this.rs.navigate(['userDashBoard'])
      }
      else{
        alert("invalid password")
      }
  
    }
    else{
      alert("invalid username");
    }
  }

  ngOnInit(): void {
  }

}
