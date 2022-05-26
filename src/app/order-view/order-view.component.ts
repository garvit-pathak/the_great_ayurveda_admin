import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
  orderData:any;
  medicineList:any=[];
  orderMedicineList:any;
  orderId:any;

  constructor(private orderService:OrderService,private toastr:ToastrService) {
    orderService.viewPlacedOrders().subscribe(data=>{
      this.orderData=data;
      console.log(data)
    });
   }


  ngOnInit(): void {
  }
  getId(event:any){
    this.orderId=event.target.value;
    this.orderService.orderDeliveryStatus(this.orderId).subscribe(data=>{
      this.toastr.success('Status Updated Successfully','Successfull');
      
      location.reload()
    }, err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status >= 400) {
          this.toastr.error('Cannot Update', 'Error');
        }
      }
    });
  } 

}
