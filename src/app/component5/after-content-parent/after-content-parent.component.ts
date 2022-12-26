import { Component } from '@angular/core';

@Component({
  selector: 'app-after-content-parent',
  templateUrl: './after-content-parent.component.html',
  styleUrls: ['./after-content-parent.component.css']
})
export class AfterContentParentComponent {
  count:any=1;
  IncrementCount(){
    this.count=this.count+1;
  }
  DecrementCount(){
    this.count=this.count-1;
  }
}
