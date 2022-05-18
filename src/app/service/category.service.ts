import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiurl="http://localhost:8801/api/category/add";
  apiurl2="http://localhost:8801/api/category/view";
  apiurl3="http://localhost:8801/api/category/delete";
  apiurl4="http://localhost:8801/api/category/viewone";
  apiurl5="http://localhost:8801/api/category/update";

  constructor(private _http:HttpClient) { }

  addCategory(name:any){
    return this._http.post<any>(this.apiurl,{name:name});
  }

  viewCategory(){
    return this._http.get<any>(this.apiurl2);
  }

  deleteCategory(id:any){
    return this._http.post<any>(this.apiurl3,{id:id});
  }

  viewCategoryById(id:any){
    return this._http.post<any>(this.apiurl4,{id:id});
  }
  updateCategory(id:any,name:any){
    return this._http.post<any>(this.apiurl5,{id:id,name:name});
  }
}