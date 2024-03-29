import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true,
    },
  ],
})
export class EmailDirective implements Validator, OnChanges {
  @Input() appEmail: string = '';

  constructor() {}

  validator: ValidatorFn = () => null;
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue } = changes['appEmail'];
    if (currentValue?.length) {
      this.validator = this.emailValidator(currentValue);
    }
  }

  emailValidator(value: string): ValidatorFn {
    const regex = new RegExp(`[a-zA-Z0-9]{3,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}`);

    return (control) => {
      const value = control.value;
      const isValidEmail = control.value === '' || regex.test(value);

      return isValidEmail ? null : { emailValidator: true };
    };
  }
}
