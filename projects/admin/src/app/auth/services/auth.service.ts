import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseModel } from '../models/response.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  /**
   * login
   */
  public login(userModel: UserModel) {
    return this.http.post<any>('http://127.0.0.1:8000/api/user/login', userModel)
      .subscribe(
        (res: any) => {
          console.log(res)
         console.log(res.status)
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.error('An error occurred:', err.error.message);
          } else {
            console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
          }

        },
      )
  }

  // userExist(value: string) {
  //   return this.http.get('http://localhost/api/login')
  //     .subscribe(
  //       (res: any) => {
  //         console.log(res)
  //       },
  //       (err: HttpErrorResponse) => {
  //         if (err.error instanceof Error) {
  //           console.error('An error occurred:', err.error.message);
  //         } else {
  //           console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
  //         }

  //       },
  //     )
  // }

  public userExist(value: string): Observable<ResponseModel> {
    return this.http.get<ResponseModel>("http://127.0.0.1:8000/api/user/exist/" + value)
  }
}
