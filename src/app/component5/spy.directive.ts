import { Directive, OnDestroy, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

let nextId=1;

@Directive({
  selector: '[appSpy]'
})


export class SpyDirective implements OnInit , OnDestroy {
  private id =nextId++;

  constructor(private logger:LoggerService) { }
  ngOnInit(){
    this.logger.log(`spy #${this.id} onInit`);
  }
  ngOnDestroy(){
    this.logger.log(`spy #${this.id} onDestroy`);
  }

}
