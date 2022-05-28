import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private diseaseService:DiseaseService,private categoryService:CategoryService,private taostr:ToastrService,private router:Router) {
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
      this.taostr.success('Disease Added Successfully','Successfull');
      this.router.navigate(['viewdis']);
      
    },err=>{
      if(err instanceof HttpErrorResponse){
        if(err.status>=400){
          this.taostr.error('Cannot add new disease','Error');
        }
      }
    });
  }
}