import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(forbiddenNames:string[]): ValidatorFn {

  console.log("forbiddenNameValidator - returning a function")
  return (control: AbstractControl): ValidationErrors | null => {
    let index = forbiddenNames.findIndex(name => name == control.value);
    return index != -1 ? { forbiddenName:{ value: control.value }} : null;
  };
}
@Directive({
  selector: '[forbiddenNames]', 
  providers: [{
    provide: NG_VALIDATORS, 
    useExisting: ForbiddenNameDirective, 
    multi: true
  }]
})
export class ForbiddenNameDirective implements Validator {

  @Input()forbiddenNames:string[] = []
  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log("checking...");

    return this.forbiddenNames.length > 0 ?
            forbiddenNameValidator(this.forbiddenNames)(control) :
            null;
  }
}
