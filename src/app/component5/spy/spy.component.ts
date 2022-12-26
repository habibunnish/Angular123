import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-spy',
  templateUrl: './spy.component.html',
  styleUrls: ['./spy.component.css']
})
export class SpyComponent {
  newName='';
  villains:string[]=['akash'];
  constructor(public logger:LoggerService) {}
  addVillain(){
    if(this.newName.trim()){
      this.villains.push(this.newName.trim());
      this.newName='';
      // this.logger.tick();
    }
  }
  reset(){
    this.logger.log('reset');
    this.villains=[];
    // this.logger.tick();
   
  }
  
}
