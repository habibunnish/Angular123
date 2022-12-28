import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export const identityRevealedValidator:ValidatorFn=(control:AbstractControl):

  ValidationErrors|null=>{
  const FirstName=control.get('FirsName');
  const LastName=control.get('LastName');
 
  return FirstName && LastName &&FirstName.value===LastName.value ?{identityRevealed :true}:null;
};

@Directive({
  selector: '[appIdentityRevealed]',
  providers:[{provide:NG_VALIDATORS,useExisting:IdentityRevealedValidatorDirective,multi:true}]
})

export class IdentityRevealedValidatorDirective implements Validator {
 
  validate(
    control: AbstractControl):
    ValidationErrors | null {
    return identityRevealedValidator(control);
    }
  
}
