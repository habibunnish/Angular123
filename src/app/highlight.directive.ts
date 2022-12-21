import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input () defaultColor='';
  @Input () appHighlight='';
 
  constructor( private el:ElementRef) {
    this.el.nativeElement.style.backgroundColor='pink';
   }
   @HostListener('mouseenter') omMouseEnter(){
    this.Highlight(this.appHighlight ||this.defaultColor || 'pink');
   }
   @HostListener('mouseleave') onMouseLeave(){
    this.Highlight('');
   }
    private Highlight(color:String){
    this.el.nativeElement.style.backgroundColor=color;
   }

}
