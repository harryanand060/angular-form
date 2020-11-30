import { Component, OnInit } from '@angular/core';
import { FormGroupService } from '../../services/validation/form-group.service';
import { IAuthMethod } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit,IAuthMethod{
  public formGroup: any;
  public hide: boolean
  constructor(private commonFormGoup: FormGroupService) { }

  ngOnInit(): void {
    this.hide = true
    this.createForm();
  }

  public createForm() {
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
