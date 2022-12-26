import { Component, Input, ViewChild } from '@angular/core';
import { OnChangesComponent } from '../on-changes/on-changes.component';
import { Villain } from '../villain';

@Component({
  selector: 'app-on-changes-parent',
  templateUrl: './on-changes-parent.component.html',
  styleUrls: ['./on-changes-parent.component.css']
})
export class OnChangesParentComponent {
 villain !:Villain;
  // power='';
  title='OnChanges';
  @ViewChild(OnChangesComponent) childView!:OnChangesComponent;
  constructor(){
    this.reset();
  }
  reset(){
    this.villain=new Villain('Windstorm');
    // this.power='sing';
    if(this.childView){
      this.childView.reset();
    }
  }
}
