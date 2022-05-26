import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  apiurl="http://localhost:8801/api/query/view";
  apiurl2="http://localhost:8801/api/query/viewone";
  apiurl3="http://localhost:8801/api/query/updatequery";

  constructor(private http:HttpClient) { }
  viewQuery(){
    return this.http.get<any>(this.apiurl);
  }
  viewById(id:any){
    return this.http.post<any>(this.apiurl2,{id:id});
  }
  resolveQuery(text:any,email:any,id:any,){
    return this.http.post<any>(this.apiurl3,{textSend:text,email:email,id:id});
  }
}
