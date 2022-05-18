import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { DiseaseService } from '../service/disease.service';

@Component({
  selector: 'app-add-disease',
  templateUrl: './add-disease.component.html',
  styleUrls: ['./add-disease.component.css']
})
export class AddDiseaseComponent implements OnInit {
  name:any;
  causes:any;
  homeRemedies:any;
  yogaLink:any;
  precaution:any;
  keyword:any;
  image:any;
  storedCat:any;
  catId:any;

  constructor(private diseaseService:DiseaseService,private categoryService:CategoryService) {
    categoryService.viewCategory().subscribe(data=>{
      this.storedCat=data;
    });
   }

  ngOnInit(): void {
  }

  saveImage(event:any){
    this.image=event.target.files[0];
  }
  getId(event:any){
    this.catId=event.target.value;
  }
  addDiseaseForm(){
    let formData=new FormData();
    formData.append('name',this.name);
    formData.append('causes',this.causes);
    formData.append('homeRemedies',this.homeRemedies);
    formData.append('yogaLink',this.yogaLink);
    formData.append('precaution',this.precaution);
    formData.append('image',this.image);
    formData.append('keyword',this.keyword);
    formData.append('category',this.catId);

    this.diseaseService.addDisease(formData).subscribe(data=>{
      console.log(data);
      alert('Disease Added');
    });
  }
}