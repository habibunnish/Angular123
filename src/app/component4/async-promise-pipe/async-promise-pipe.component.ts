import { Component } from '@angular/core';

@Component({
  selector: 'app-async-promise-pipe',
  templateUrl: './async-promise-pipe.component.html',
  styleUrls: ['./async-promise-pipe.component.css']
})
export class AsyncPromisePipeComponent {
  greeting:Promise<String>|null=null;
  arrived:boolean=false;

  private resolve:Function|null=null;

  constructor(){
    this.reset();
  }
  reset(){
    this.arrived=false;
    this.greeting=new Promise<String>((resolve,reject)=>{
      this.resolve=resolve;
    });
  }
  clicked(){
    if(this.arrived){
      this.reset();
    }else{
      this.resolve!('HI Habi  ');
      this.arrived=true;
    }
  }
}
