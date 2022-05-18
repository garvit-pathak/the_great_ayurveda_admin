import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiurl="http://localhost:8801/api/admin/signin";

  constructor(private _http:HttpClient) { }
  SignInData(admin:Admin){
    return this._http.post<any>(this.apiurl,admin);
  }

  checkToken():boolean{
    return !!localStorage.getItem('jwt-token');
  }
}
