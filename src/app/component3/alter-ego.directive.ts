import { Directive, forwardRef, Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { HeroesService } from './heroes.service';


@Injectable({providedIn:'root'})

export class UniqueAlterEgoValidator implements AsyncValidator{
  constructor(private heroesService:HeroesService) { }
 
  validate(
    control: AbstractControl):
    Observable<ValidationErrors|null> {
    return this.heroesService.isAlterEgoTaken(control.value).pipe(
      map(isTaken=>(isTaken ? {uniqueAlterEgo:true} : null)),
      catchError(()=> of (null))
    );
  }
}

@Directive({
  selector: '[appUniqueAlterEgo]',
  providers:[
    {
      provide:NG_ASYNC_VALIDATORS,
      useExisting:forwardRef(()=> UniqueAlterEgoValidatorDirective),
      multi:true
    }
  ]
})
export class UniqueAlterEgoValidatorDirective implements AsyncValidator{
  
  constructor(private validator:UniqueAlterEgoValidator){}
 
  validate(
    control: AbstractControl):
    Observable<ValidationErrors |null>{
    return this.validator.validate(control);
  }
    
  }




