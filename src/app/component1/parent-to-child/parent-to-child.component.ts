import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.css']
})
export class ParentToChildComponent {
  @Input()
  message:any="";  //this is the child 
  @Output()
  childMessage=new EventEmitter();

  sendMessage(){
    this.childMessage.emit(" THankyou parent for clarifying doubts");
  }
 
}
