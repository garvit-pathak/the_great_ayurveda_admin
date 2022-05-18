import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private categoryService:CategoryService,private activatedRoute:ActivatedRoute,private router:Router) {
    this.id=activatedRoute.snapshot.paramMap.get('id');
    categoryService.viewCategoryById(this.id).subscribe(data=>{
      this.categoryDataStored=data;
      console.log(data.name);
      this.name = data.name;
    });
   }


  ngOnInit(): void {
  }
  editCategoryForm(){
    this.categoryService.updateCategory(this.id,this.name).subscribe(data=>{
      alert('Updated Successfully')
      this.router.navigate(['viewcat']);     
    });
  }
}