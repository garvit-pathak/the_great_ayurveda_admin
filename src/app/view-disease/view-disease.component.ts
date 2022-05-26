import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DiseaseService } from '../service/disease.service';

@Component({
  selector: 'app-view-disease',
  templateUrl: './view-disease.component.html',
  styleUrls: ['./view-disease.component.css']
})
export class ViewDiseaseComponent implements OnInit {
  storedDisease:any;
  dId:any;
  constructor(private diseaseService:DiseaseService,private taostr:ToastrService) {
    diseaseService.viewAll().subscribe(data=>{
      this.storedDisease=data;
    });
   }

  ngOnInit(): void {
  }
  getId(event:any){
    if(confirm('Are you sure?')){
      this.dId=event.target.value;
    this.diseaseService.deleteDisease(this.dId).subscribe(data=>{
      
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
