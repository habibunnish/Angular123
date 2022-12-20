import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  fontColor='green';
  // sayHelloId=0;
  canClick=false;
  message='Hello , World !';
  sayMessage(){
    alert(this.message);
  }
 
  
  items:any[]=[];
  constructor(){
    this.items.push({"name" :"arthi" ,"age":21});
    this.items.push({"name" :"nisha" ,"age":20});
    this.items.push({"name" :"dhanush" ,"age":24});
    this.items.push({"name" :"san" ,"age":29});
    
  }
  parentMessage="Hello  Child any query approch me ";
  cMessage='Child sending message';
  title='angularwork';
  image_width:number=300;
  displayAlert(){
    alert("hello");
  }
  isAdmin():boolean{
    return true;
  }

}
