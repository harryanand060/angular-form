import { FormGroup, AbstractControl, FormControl } from '@angular/forms';

export function ConfirmPassword(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmPassword) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmPassword: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

export function emailMatchValidator() {
    return (control: AbstractControl) => {
        console.log(control)
        if (control.errors) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        if (control.value !== 'harry@gmail.com') {
            console.log(control.value)
            return false;
        } else {
            return { emailExists: true };
        }
    }
}