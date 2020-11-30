import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor(private authService: AuthService) { }

  public confirmPassword(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (!control || !matchingControl) {
        return null;
      }
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
  public unique(control: AbstractControl) {
    return this.authService.userExist(control.value).pipe(
      map(res => {
        return res.data ? { user_exists: true } : null
      })
    )
  }
  public userExists(control: AbstractControl) {
    return this.authService.userExist(control.value).pipe(
      map(res => {
        console.log(res.data)
        return res.data ? null : { not_found: true }
      })
    )
  }

  // private checkUserUnique(value: string): Observable<boolean> {
  //   return this.http.get("assets/fakedb.json").pipe(
  //     map((responseList: Array<any>) =>
  //       responseList.filter(row => row.device === value)
  //     ),
  //     map(rows => !rows.length)
  //   );
  // }

}
