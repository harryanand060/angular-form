import { Component, OnInit } from '@angular/core';
import { FormGroupService } from '../../services/validation/form-group.service';
import { IAuthMethod } from '../../interfaces/auth.interface';
import { HelperService } from '../../../utils/helper.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit,IAuthMethod {
  public formGroup: any;
  public mobile_icon: boolean;
  constructor(private commonFormGoup: FormGroupService) { }

  ngOnInit(): void {
    this.createForm();
    this.onChanges();
  }

  public onChanges(): void {
    this.formGroup.get("device").valueChanges
      .subscribe(arg => {
        this.mobile_icon = HelperService.check_email_mobile(arg) == 'mobile' ? true : false
      });
  }

  public createForm() {
    this.formGroup = this.commonFormGoup.forgetPasswordFormGroup
  }

  public get form() {
    return this.formGroup.controls;
  }

  public onSubmit() {
    console.log(this.formGroup.valid);
  }

  public getError(key: string) {
    return this.commonFormGoup.getValidationMessage(this.form, key)
  }

}
