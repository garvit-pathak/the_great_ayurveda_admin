import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  categoryDataStored:any;
  categoryId:any;
  constructor(private categoryService:CategoryService, private router:Router) {
    categoryService.viewCategory().subscribe(data=>{
      this.categoryDataStored=data;
    });
  }

  ngOnInit(): void {
  }

  getId(event:any){
    this.categoryId=event.target.value;
    this.categoryService.deleteCategory(this.categoryId).subscribe(data=>{
      alert('Deleted');
      location.reload();
    });
  }

  
}