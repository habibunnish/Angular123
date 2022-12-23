import { Component, OnInit } from '@angular/core';
import { AdService } from './component2/ad.service';
import { AdItem } from './component2/AdItem';
import { Hero } from './component5/hero';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
[x: string]: Hero;
  title = 'newangular';
  parentMessage="Hello  Child any query approch me ";
  cMessage='Child sending message';

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
