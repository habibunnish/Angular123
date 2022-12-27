import { Component, Host, Optional, SkipSelf } from '@angular/core';
import { AnimalService } from '../animal.service';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers:[{provide:FlowerService,useValue:{emoji:'🌼️'}}],
  viewProviders:[{provide:AnimalService,useValue:{emoji:'😸️'}}]
})
export class ChildComponent {
constructor(public flower:FlowerService, public animal:AnimalService){}

//constructor( public flower:FlowerService,@Optional() @Host() public animal ?:AnimalService){}

// constructor(
//   @Host() public animal:AnimalService,
//   @Host() @Optional () public flower ?:FlowerService){}

//  constructor(
//   @SkipSelf() @Host() public animal : AnimalService,
//   @SkipSelf() @Host() @Optional() public flower ?: FlowerService){} 



}
