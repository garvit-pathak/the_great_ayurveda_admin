import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../service/category.service';
import { MedicineService } from '../service/medicine.service';

@Component({
  selector: 'app-edit-medicine',
  templateUrl: './edit-medicine.component.html',
  styleUrls: ['./edit-medicine.component.css']
})
export class EditMedicineComponent implements OnInit {
  medicineStored: any;
  storedCat: any;

  id: any;
  catId: any;
  name: any;
  price: any;
  description: any;
  stock: any;
  image: any;
  keyword: any;
  precaution: any;
  ingredients: any;
  uses: any;
  sideEffect: any;
  currentCategoryId: any;
  currentCategoryName: any;

  constructor(private medicineService: MedicineService, private activatedRoute: ActivatedRoute, private router: Router, private categoryService: CategoryService, private taostr: ToastrService) {

    this.id = activatedRoute.snapshot.paramMap.get('id');
    medicineService.viewMedProductById(this.id).subscribe(dataPro => {
      this.medicineStored = dataPro;
      this.name = dataPro.name;
      this.price = dataPro.price;
      this.description = dataPro.description;
      this.stock = dataPro.stock;
      this.keyword = dataPro.keyword;
      this.precaution = dataPro.precaution;
      this.ingredients = dataPro.ingredients;
      this.uses = dataPro.uses;
      this.sideEffect = dataPro.sideEffect;
      this.currentCategoryId = dataPro.category;
      categoryService.viewCategoryById(this.currentCategoryId).subscribe(dataCat => {
        this.currentCategoryName = dataCat.name;
      });
    });
    medicineService.viewCategory().subscribe(data => {
      this.storedCat = data;
    });


  }

  ngOnInit(): void {
  }
  saveImage(event: any) {
    this.image = event.target.files[0];
  }
  getId(event: any) {
    this.catId = event.target.value;
  }
  updateMedicineForm() {
    if (this.catId) {
      let formData = new FormData();
      formData.append('pId', this.id);
      formData.append('name', this.name);
      formData.append('price', this.price);
      formData.append('description', this.description);
      formData.append('stock', this.stock);
      formData.append('image', this.image);
      formData.append('keyword', this.keyword);
      formData.append('category', this.catId);
      formData.append('precaution', this.precaution);
      formData.append('ingredients', this.ingredients);
      formData.append('uses', this.uses);
      formData.append('sideEffect', this.sideEffect);

      this.medicineService.updateMedicine(formData).subscribe(data => {
        console.log(data);
        if (data.matchedCount && data.modifiedCount) {
          this.taostr.success('Updated Successfully', 'Successfull');

          this.router.navigate(['viewmed']);
        }
        else {
          alert('Already Updated');
        }
      }, err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status >= 400) {
            this.taostr.error('Cannot Update', 'Error');
          }
        }
      });
    }
    else {
      let formData = new FormData();
      formData.append('pId', this.id);
      formData.append('name', this.name);
      formData.append('price', this.price);
      formData.append('description', this.description);
      formData.append('stock', this.stock);
      formData.append('image', this.image);
      formData.append('keyword', this.keyword);
      formData.append('category', this.currentCategoryId);
      formData.append('precaution', this.precaution);
      formData.append('ingredients', this.ingredients);
      formData.append('uses', this.uses);
      formData.append('sideEffect', this.sideEffect);

      this.medicineService.updateMedicine(formData).subscribe(data => {

        if (data.matchedCount && data.modifiedCount) {

          this.router.navigate(['viewmed']);
          this.taostr.success('Updated Successfully', 'Successfull');

        }
        else {
          alert('Already Updated');
        }
      }, err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status >= 400) {
            this.taostr.error('Cannot Update', 'Error');
          }
        }
      });
    }

  }

}
