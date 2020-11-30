import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { environment as env } from 'projects/admin/src/environments/environment';
import { MessageService } from './message.service';
import { CustomValidationService } from './custom-validation.service';



@Injectable({
  providedIn: 'root'
})
export class FormGroupService extends MessageService {
  public formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, private cv: CustomValidationService) {
    super();
  }
  public get loginFormGroup() {
    return this.formGroup = this.formBuilder.group({
      device: ['', { validators: [Validators.required, Validators.pattern(env.validation.email_or_mobile_pattern)], asyncValidators: this.cv.userExists.bind(this.cv), updateOn: "blur" }],
      password: ['', { validators: [Validators.required, Validators.minLength(env.validation.password_min_length)] }]
    })
  }

  public get registerFormGroup() {
    return this.formGroup = this.formBuilder.group({
      name: ['', { validators: [Validators.required] }],
      email: ['', { validators: [Validators.required, Validators.pattern(env.validation.email_pattern)], asyncValidators: this.cv.unique.bind(this.cv), updateOn: "blur" }],
      mobile: ['', { validators: [Validators.required, Validators.pattern(env.validation.mobile_pattern)], asyncValidators: this.cv.unique.bind(this.cv), updateOn: "blur" }],
      password: ['', { validators: [Validators.required, Validators.minLength(env.validation.password_min_length)] }],
      confirm_password: ['', { validators: [Validators.required] }]
    }, { validator: this.cv.confirmPassword('password', 'confirm_password') },
    )
  }

  public get forgetPasswordFormGroup() {
    return this.formGroup = this.formBuilder.group({
      device: ['', { validators: [Validators.required, Validators.pattern(env.validation.email_or_mobile_pattern)], asyncValidators: this.cv.userExists.bind(this.cv), updateOn: "blur" }],
    })
  }

  /**
   * getValidationMessage
   */
  public getValidationMessage(form: any, key: string) {
    return this.getErrorMessage(form, key);
  }
}
