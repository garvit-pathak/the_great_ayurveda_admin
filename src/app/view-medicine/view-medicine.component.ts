import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../service/medicine.service';

@Component({
  selector: 'app-view-medicine',
  templateUrl: './view-medicine.component.html',
  styleUrls: ['./view-medicine.component.css']
})
export class ViewMedicineComponent implements OnInit {
  storedMedicine:any;
  productId:any;
  constructor(private medicineService:MedicineService) { 
    medicineService.viewProduct().subscribe(data=>{
      console.log(data);
      this.storedMedicine=data;
    });
  }

  ngOnInit(): void {
  }
  getId(event:any){
    this.productId=event.target.value;
    this.medicineService.deleteProduct(this.productId).subscribe(data=>{
      location.reload();
    });
  }
}