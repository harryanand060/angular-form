import { Component, OnInit } from '@angular/core';
import { CommonFormGroup } from '../../utils/validation/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formGroup: any;

  constructor(private commonFormGoup: CommonFormGroup) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
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
  }

}


