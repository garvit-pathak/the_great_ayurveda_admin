import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MedicineService } from '../service/medicine.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {
  name: any;
  price: any;
  description: any;
  stock: any;
  image: any;
  keyword: any;
  category: any;
  precaution:any;
  ingredients:any;
  uses:any;
  sideEffect:any;
  storedCat:any;
  constructor(private medicineService:MedicineService,private toastr:ToastrService,private router:Router) {
    medicineService.viewCategory().subscribe(data=>{
      this.storedCat=data;
    });
   }

  ngOnInit(): void {
  }
  getId(event:any){
    this.category=event.target.value;
  }
  saveImage(event: any) {
    if(event.target.files.length>0){
      this.image=event.target.files[0];
      
    }
  }
  addMedicineForm() { 
    let formData=new FormData();
    formData.append('name',this.name);
    formData.append('price',this.price);
    formData.append('description',this.description);
    formData.append('stock',this.stock);
    formData.append('image',this.image);
    formData.append('keyword',this.keyword);
    formData.append('category',this.category);
    formData.append('precaution',this.precaution);
    formData.append('ingredients',this.ingredients);
    formData.append('uses',this.uses);
    formData.append('sideEffect',this.sideEffect);

    this.medicineService.addMedicine(formData).subscribe(data=>{
      this.toastr.success('Medicine Added Successfully','Successfull');
      this.router.navigate(['viewmed']);

    },err=>{
      if(err instanceof HttpErrorResponse){
        if(err.status>=400){
          this.toastr.error('Cannot add new medicine','Error');
        }
      }
    })
  }

}
