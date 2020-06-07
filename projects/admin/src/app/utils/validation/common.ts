
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { environment as env } from 'projects/admin/src/environments/environment';

@Injectable()
export class CommonFormGroup {
    public formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder, private commonValidation: CommonValidation) {
    }

    public get loginFormGroup() {
        return this.formGroup = this.formBuilder.group({
            device: ['', [Validators.required, Validators.pattern(env.validation.email_or_mobile_pattern)]],
            password: ['', [Validators.required, Validators.minLength(env.validation.password_min_length)]]
        })
    }

    public get registerFormGroup() {
        return this.formGroup = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            mobile: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(env.validation.password_min_length)]],
            confirm_password: ['', Validators.required]
        })
    }

    public get forgetPasswordFormGroup() {
        return this.formGroup = this.formBuilder.group({
            device: ['', [Validators.required, Validators.pattern(env.validation.email_or_mobile_pattern)]],
        })
    }

    /**
     * getValidationMessage
     */
    public getValidationMessage(form: any, key: string) {
        return this.commonValidation.getErrorMessage(form, key);
    }

}
@Injectable()
export class CommonValidation {

    public getErrorMessage(form: any, key: string) {
        for (let value of Object.values(this.validation_messages[key])) {
            if (form[key].hasError(value['type'])) { return value['message'] }
        }
    }

    private validation_messages = {
        'name': [
            { type: 'required', message: 'Name is required' },
            { type: 'pattern', message: 'Your username must contain only numbers and letters' },
        ],
        'email': [
            { type: 'required', message: 'Email is required' },
            { type: 'email', message: 'Enter a valid email' }
        ],
        'device': [
            { type: 'required', message: 'email or mobile is required' },
            { type: 'pattern', message: 'Enter valid email or mobile number' }
        ],
        'confirm_password': [
            { type: 'required', message: 'Confirm password is required' },
            { type: 'areEqual', message: 'Password mismatch' }
        ],
        'password': [
            { type: 'required', message: 'Password is required' },
            { type: 'minlength', message: 'Password must be at least 6 characters long' },
        ],
        'mobile': [
            { type: 'required', message: 'Mobile is required' },
            { type: 'pattern', message: 'You must accept terms and conditions' }
        ]
    }
}
