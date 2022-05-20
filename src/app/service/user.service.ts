import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiurl="http://localhost:8801/api/user/view";
  constructor(private _http:HttpClient) { }

  viewUser(){
    return this._http.get<any>(this.apiurl);
  }
}