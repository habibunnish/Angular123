import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent {
   shoppingDressSize={
      sname:'Bubbly',
      size:32,
   }
titleCase: any;
   constructor(){}
}
