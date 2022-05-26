import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  name: any;

  constructor(private categoryService: CategoryService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  addCategoryForm() {
    this.categoryService.addCategory(this.name).subscribe(data => {

      this.toastr.success('Category Added Successfully','Successfull');
    },err=>{
      if(err instanceof HttpErrorResponse){
        if(err.status==500){
          this.toastr.error('Invalid Username and password','Error');
        }
      }
    });
  }
}