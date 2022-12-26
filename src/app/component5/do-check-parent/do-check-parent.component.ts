import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-do-check-parent',
  templateUrl: './do-check-parent.component.html',
  styleUrls: ['./do-check-parent.component.css']
})
export class DoCheckParentComponent implements OnChanges,DoCheck{
  logs:string[]=[];
  
  ngOnChanges(changes: SimpleChanges): void {
    this.logs.push('on changes triggered');
  }
  ngDoCheck(): void {
    // this.logs.push('do check triggered');
    console.log('do check triggered');
  }
  onTextChanges(value:any){
    console.log('text is getting changed');
  }
}
