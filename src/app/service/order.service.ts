import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiurl="http://localhost:8801/api/order/vieworder";
  constructor(private _http:HttpClient) { };
  viewPlacedOrders(){
    return this._http.get<any>(this.apiurl);
  }
}
