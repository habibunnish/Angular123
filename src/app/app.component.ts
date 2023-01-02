import { Component, OnInit } from '@angular/core';
import { AdService } from './component2/ad.service';
import { AdItem } from './component2/AdItem';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'newangular';

  ads:AdItem[]=[];

  constructor(private adService :AdService){}
  
 ngOnInit(): void {
   this.ads=this.adService.getAds();
   
 } 
 color='';

 name:string | undefined;
 get name2() {
  return (this.name || '').toUpperCase();
}

toggleName() {
  if (!this.name) this.name = 'Angular';
  this.name += '.';
}
 
}

if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker(new URL('./app.worker', import.meta.url));
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}