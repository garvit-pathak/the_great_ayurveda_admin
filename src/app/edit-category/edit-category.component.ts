import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  categoryDataStored:any;
  data:any;
  id:any;
  name:any;
  constructor(private categoryService:CategoryService,private activatedRoute:ActivatedRoute,private taostr:ToastrService,private router:Router) {
    this.id=activatedRoute.snapshot.paramMap.get('id');
    categoryService.viewCategoryById(this.id).subscribe(data=>{
      this.categoryDataStored=data;
      this.name = data.name;
    });
   }


  ngOnInit(): void {
  }
  editCategoryForm(){
    this.categoryService.updateCategory(this.id,this.name).subscribe(data=>{
      this.taostr.success('Updated Successfully','Successfull');
      this.router.navigate(['viewcat']);
    }, err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status >= 400) {
          this.taostr.error('Cannot Update', 'Error');
        }
      }
    });
  }
}