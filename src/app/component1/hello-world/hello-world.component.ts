import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  fontColor='green';
  sayHelloId=0;
  canClick=false;
  message='Hello , World !';
  sayMessage(){
    alert(this.message);
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
