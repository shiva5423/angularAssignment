import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
data;
  constructor(public ds:DataService) { }
  ngOnInit() {
    this.ds.userPhotos().subscribe((res)=>{
      this.data=res
      
    })
 
  }

}
