import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private medicineService: MedicineService, private activatedRoute: ActivatedRoute,private router:Router) {
    this.id = activatedRoute.snapshot.paramMap.get('id');
    medicineService.viewMedProductById(this.id).subscribe(dataPro => {
      this.medicineStored = dataPro;
      this.name = dataPro.name;
      this.price=dataPro.price;
      this.description=dataPro.description;
      this.stock=dataPro.stock;
      this.keyword=dataPro.keyword;
      this.precaution=dataPro.precaution;
      this.ingredients=dataPro.ingredients;
      this.uses=dataPro.uses;
      this.sideEffect=dataPro.sideEffect;
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
    let formData=new FormData();
    formData.append('pId',this.id);
    formData.append('name',this.name);
    formData.append('price',this.price);
    formData.append('description',this.description);
    formData.append('stock',this.stock);
    formData.append('image',this.image);
    formData.append('keyword',this.keyword);
    formData.append('category',this.catId);
    formData.append('precaution',this.precaution);
    formData.append('ingredients',this.ingredients);
    formData.append('uses',this.uses);
    formData.append('sideEffect',this.sideEffect);

    this.medicineService.updateMedicine(formData).subscribe(data=>{
      console.log(data);
      if(data.matchedCount && data.modifiedCount){
        alert('Updated');
        this.router.navigate(['viewmed']);
      }
      else{
        alert('Cannot Updated');
      }
    })
  }
}
