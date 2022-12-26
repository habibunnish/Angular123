import { Component, Input, SimpleChanges } from '@angular/core';
import { Villain } from '../villain';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent {
  @Input() villain!:Villain;
  // @Input() power ='';

  changeLog: string[]=[];

  ngOnChanges(changes : SimpleChanges){
   for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
  reset(){
    this.changeLog=[];
  }
}