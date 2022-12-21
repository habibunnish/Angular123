import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  Highlight: any;

  constructor( private el:ElementRef) {
    this.el.nativeElement.style.backgroundColor='pink';
   }
   @HostListener('mouseenter') omMouseEnter(){
    this.Highlight('pink');
   }
   @HostListener('mouseleave') onMouseLeave(){
    this.Highlight('');
   }
   private Highlight(color:String){
    this.el.nativeElement.style.backgroundColor=color;
   }

}
