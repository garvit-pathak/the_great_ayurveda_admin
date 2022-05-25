import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  apiurl="http://localhost:8801/api/query/view";
  constructor(private http:HttpClient) { }
  viewQuery(){
    return this.http.get<any>(this.apiurl);
  }
}
