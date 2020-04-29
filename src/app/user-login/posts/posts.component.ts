import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
data;
comments;
  constructor(public ds:DataService) { }

  ngOnInit() {
    this.ds.userPhotos().subscribe((res)=>{
      this.data=res
      
    })
  }
  photoco(){

    this.ds.usercomments().subscribe((res)=>{
      this.comments=res
      
    })
  }

}
