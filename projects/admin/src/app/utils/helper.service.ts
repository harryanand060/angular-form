import { Injectable } from '@angular/core';
import { environment as env } from 'projects/admin/src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }
  public static check_email_mobile(value:string): string {
    var matched_type: string = ''
    if (value.match(env.validation.mobile_pattern)) {
        matched_type = 'mobile'
    } else if (value.match(env.validation.email_pattern)) {
        matched_type = 'email'
    }
    return matched_type
}
}
