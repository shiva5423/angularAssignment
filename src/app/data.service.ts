import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public hc:HttpClient) { }
  regData:object;
  userPhotos():Observable<any>
  {
    return this.hc.get("https://jsonplaceholder.typicode.com/photos");


  }
  usercomments():Observable<any>
  {
    return this.hc.get("https://jsonplaceholder.typicode.com/comments")
  }
}
