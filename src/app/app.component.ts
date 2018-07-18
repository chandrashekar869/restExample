import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  resData:any=[];
  constructor(http:HttpClient){
    http.get('https://reqres.in/api/users?page=2').subscribe(data=>{
      console.log(data);
    this.resData=data['data'];
    console.log(this.resData);
    });
    http.post('https://reqres.in/api/users',{"name": "morpheus","job": "leader"}).subscribe(data=>{
      console.log(data);
    
    });
    
  
  }
}
