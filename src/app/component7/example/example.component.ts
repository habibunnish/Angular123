import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit{
  constructor(private http:HttpClient){}
  httpdata: any;
  name: any;
  //  searchparam=1;
  ngOnInit(){
    console.log('example')
    this.http.get("http://jsonplaceholder.typicode.com/users")
    .subscribe((data: any)=>this.displaydata(data));
  }
  displaydata(data: any){
    this.httpdata=data;
  }

}

