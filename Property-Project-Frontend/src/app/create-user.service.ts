import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  _url = 'http://localhost:3000/sign-up';

  //(private _http: HttpClient
  constructor() { }

  // createUser(user: User): Observable<any>{
  //   return this._http.post<any>(`${this._url}`, user);
  // }
}
