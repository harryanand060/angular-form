import { Component, OnInit } from '@angular/core';
import { FormGroupService } from '../../services/validation/form-group.service';
import { HelperService } from '../../../utils/helper.service';
import { IAuthMethod } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, IAuthMethod {
  public formGroup: any;
  public mobile_icon: boolean;
  constructor(private commonFormGoup: FormGroupService, private authService: AuthService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.onChanges()
  }

  public onChanges(): void {
    this.formGroup.get("device").valueChanges
      .subscribe(arg => {
        this.mobile_icon = HelperService.check_email_mobile(arg) == 'mobile' ? true : false
      });
  }

  public createForm() {
    this.formGroup = this.commonFormGoup.loginFormGroup
  }

  public get form() {
    return this.formGroup.controls;
  }

  public getError(key: string) {
    return this.commonFormGoup.getValidationMessage(this.form, key)
  }

  public onSubmit() {
    console.log(this.formGroup.valid);
    if (this.formGroup.valid) {
        this.authService.login(this.formGroup.value)
    }
  }

}


