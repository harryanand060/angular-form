import { Component, OnInit } from '@angular/core';
import { CommonFormGroup, CommonValidation } from '../../utils/validation/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public formGroup: any;
  public hide: boolean
  constructor(private commonFormGoup: CommonFormGroup) { }

  ngOnInit(): void {
    this.hide = true
    this.createForm();
  }

  private createForm() {
    this.formGroup = this.commonFormGoup.registerFormGroup;
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
