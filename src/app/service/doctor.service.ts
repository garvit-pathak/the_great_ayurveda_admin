import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  apiurl="http://localhost:8801/api/doctor/viewAllDoctor";
  apiurl2="http://localhost:8801/api/doctor/approvedoctor";
  apiurl3="http://localhost:8801/api/doctor/rejectdoctor";
  apiurl4="http://localhost:8801/api/doctor/deleteDoctor";

  constructor(private _http:HttpClient) { }
  viewDoctor(){
    return this._http.get<any>(this.apiurl);
  }
  approveDoctor(id:any){
    return this._http.post<any>(this.apiurl2,{doctorId:id});
  }
  rejectDoctor(id:any){
    return this._http.post<any>(this.apiurl3,{doctorId:id});
  }
  deleteDoctor(id:any){
    return this._http.post<any>(this.apiurl4,{id:id});
  }
}