import { Component } from '@angular/core';
import { AnimalService } from '../animal.service';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',

})
export class ParentComponent {
  //hirarchical injection
  constructor(public flower: FlowerService, public animal: AnimalService) {}
}




