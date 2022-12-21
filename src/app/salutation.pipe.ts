import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(size:Number,_sname:String): String {
    if(10<=size &&size<=19){
      return "S";
      return "sname";
     }
     else if (20<=size &&size<=26){
      return "M";
     }
     else if(27<=size &&size<=32){
      return "L";
     }
     else if (33<=size && size<=45){
      return "Xl"
     }
     else if(39<=size &&size<=45){
      return "xxl";
    }
    else if(46<=size &&size<=52){
      return "xxxl";
    }
    else if(53<=size && size<=73){
      return "XXX+";
    }
    else {
      return "No Size";
    }
    }
  
  }
  