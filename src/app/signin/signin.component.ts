import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { DataService } from '../data.service'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public ds:DataService,public rs:Router) { }
regData(data){
  this.ds.regData=data;
  alert("user registered")
  this.rs.navigate(['login'])
}
  ngOnInit(): void {
  }

}
