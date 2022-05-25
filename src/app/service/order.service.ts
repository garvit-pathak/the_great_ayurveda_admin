import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiurl="http://localhost:8801/api/order/vieworder";
  apiurl2="http://localhost:8801/api/order/deliverystatus";


  constructor(private _http:HttpClient) { };
  viewPlacedOrders(){
    return this._http.get<any>(this.apiurl);
  }
  orderDeliveryStatus(oId:any){
    return this._http.post<any>(this.apiurl2,{oId:oId});
  }
}
