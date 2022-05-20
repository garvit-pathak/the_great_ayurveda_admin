import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
  orderData:any;
  constructor(private orderService:OrderService) {
    orderService.viewPlacedOrders().subscribe(data=>{
      this.orderData=data;
      console.log(data)
      
    });
   }

  ngOnInit(): void {
  }

}
