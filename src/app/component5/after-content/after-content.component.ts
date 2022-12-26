import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { AfterContentParentComponent } from '../after-content-parent/after-content-parent.component';

@Component({
  selector: 'app-after-content',
  templateUrl: './after-content.component.html',
  styleUrls: ['./after-content.component.css']
})
export class AfterContentComponent implements AfterViewInit,AfterViewChecked{
 
  @ViewChild(AfterContentParentComponent) child! : AfterContentParentComponent;
  
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked count this is ->" + this.child.count);
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit count this is ->" + this.child.count);
  }
  IncrementCount(){
    this.child.IncrementCount();
  }
  DecrementCount(){
    this.child.DecrementCount();
  }
}
