import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world-ng-if',
  templateUrl: './hello-world-ng-if.component.html',
  styleUrls: ['./hello-world-ng-if.component.css']
})
export class HelloWorldNgIfComponent {
  canEdit=true;
  onEditClick(){
      this.canEdit= !this.canEdit;
      if(this.canEdit){
        this.message='you can edit me';
         }
      else{
        this.message='im read only';
      }
  }
  message='im read only';
  // items:any[]=[];
  // constructor(){
  //   this.items.push({"name":"bob","age":27,"country":"usa"});
  //   this.items.push({"name":"pro","age":12,"country":"aus"});
  //   this.items.push({"name":"oop","age":89,"country":"pak"});
  //   this.items.push({"name":"hioh","age":26,"country":"ind"});
  //   this.items.push({"name":"mom","age":19,"country":"ban"});

  // }
   public value= "";
  myFavColor:string="green";
  onClick(){
   alert("you have clicked button");
  }
  items:any[]=[];
  constructor(){
    this.items.push({"name" :"arthi" ,"age":21});
    this.items.push({"name" :"nisha" ,"age":20});
    this.items.push({"name" :"dhanush" ,"age":24});
    this.items.push({"name" :"san" ,"age":29});
    
  }
}
