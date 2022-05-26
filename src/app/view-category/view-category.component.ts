import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  categoryDataStored:any;
  categoryId:any;
  constructor(private categoryService:CategoryService, private router:Router,private taostr:ToastrService) {
    categoryService.viewCategory().subscribe(data=>{
      this.categoryDataStored=data;
    });
  }

  ngOnInit(): void {
  }
  
  getId(event:any){
    if(confirm('Are you sure?')){
      this.categoryId=event.target.value;
    this.categoryService.deleteCategory(this.categoryId).subscribe(data=>{
      this.taostr.success('Deleted Successfully');
      location.reload();
    }, err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status >= 400) {
          this.taostr.error('Cannot Delete', 'Error');
        }
      }
    });
    }
    
  }
}