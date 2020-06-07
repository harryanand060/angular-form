import { Component, OnInit } from '@angular/core';
import { CommonFormGroup, CommonValidation} from '../../utils/validation/common';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  public formGroup: any;
  constructor(private commonFormGoup: CommonFormGroup) { }

  ngOnInit(): void {
    this.createForm()
  }
  private createForm() {
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
