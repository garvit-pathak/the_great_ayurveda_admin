import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  name:any;
  
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
  }
  addCategoryForm(){
    this.categoryService.addCategory(this.name).subscribe(data=>{
      if(data){
        alert('Category Added');
      }
    });
  }
}