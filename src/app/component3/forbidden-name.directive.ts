import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(FirstNameRe:RegExp):ValidatorFn{
 
  return(control:AbstractControl):ValidationErrors|null=>{
    const forbidden=FirstNameRe.test(control.value);
    return forbidden ? {forbiddenName:{value: control.value}}: null;
  };
}


@Directive({
  selector: '[appForbiddenName]',
  providers:[{provide :NG_VALIDATORS,useExisting:ForbiddenValidatorDirective,multi:true}]
})

export class ForbiddenValidatorDirective implements Validator {
@Input('appforbiddenName')forbiddenName='';

validate(control: AbstractControl): ValidationErrors | null {
  return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
                            : null;
}
}
