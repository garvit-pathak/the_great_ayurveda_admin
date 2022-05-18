import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {
  apiurl="http://localhost:8801/api/disease/add-disease";
  apiurl2="http://localhost:8801/api/disease/viewall";
  apiurl3="http://localhost:8801/api/disease/remove";
  apiurl4="http://localhost:8801/api/disease/update";
  apiurl5="http://localhost:8801/api/disease/view-particularDisease";

  constructor(private _http:HttpClient) { }

  addDisease(formData:FormData){
    return this._http.post<any>(this.apiurl,formData);
  }
  viewAll(){
    return this._http.get<any>(this.apiurl2);
  }
  deleteDisease(dId:any){
    return this._http.post<any>(this.apiurl3,{id:dId});
  }
  viewParticularDisease(dId:any){
    return this._http.post<any>(this.apiurl5,{dId:dId});
  }
  updateDisease(formData:FormData){
    return this._http.post<any>(this.apiurl4,formData);
  }
}
