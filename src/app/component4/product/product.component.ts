import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product:String="Mobile Phone";
  position="left";
  date=new Date();
  ProductDetail={
    pID:'p101',
    PNAME:"MOBILE PHONE",
    Pprice:15000
  }
  changeProduct(){
    this.product="lap";
  }
}
