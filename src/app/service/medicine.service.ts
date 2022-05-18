import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  apiurl="http://localhost:8801/api/medicine/add";
  apiurl2="http://localhost:8801/api/category/view";
  apiurl3="http://localhost:8801/api/medicine/viewall";
  apiurl4="http://localhost:8801/api/medicine/delete";
  apiurl5="http://localhost:8801/api/medicine/viewbypro";
  apiurl6="http://localhost:8801/api/medicine/update";

  constructor(private _http:HttpClient) { }
  addMedicine(formData:FormData){
    return this._http.post<any>(this.apiurl,formData);
  }

  viewCategory(){
    return this._http.get<any>(this.apiurl2);
  }

  viewProduct(){
    return this._http.get<any>(this.apiurl3); 
  }

  deleteProduct(mId:any){
    return this._http.post<any>(this.apiurl4,{id:mId})
  }
  viewMedProductById(mId:any){
    return this._http.post<any>(this.apiurl5,{id:mId});
  }
  updateMedicine(formData:FormData){
    return this._http.post<any>(this.apiurl6,formData);
  }
}
