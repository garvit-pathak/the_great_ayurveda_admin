import { Component, OnInit } from '@angular/core';
import { DiseaseService } from '../service/disease.service';

@Component({
  selector: 'app-view-disease',
  templateUrl: './view-disease.component.html',
  styleUrls: ['./view-disease.component.css']
})
export class ViewDiseaseComponent implements OnInit {
  storedDisease:any;
  dId:any;
  constructor(private diseaseService:DiseaseService) {
    diseaseService.viewAll().subscribe(data=>{
      this.storedDisease=data;
    });
   }

  ngOnInit(): void {
  }
  getId(event:any){
    this.dId=event.target.value;
    this.diseaseService.deleteDisease(this.dId).subscribe(data=>{
      console.log(data);
      alert('Deleted Successfull');
      location.reload();
    });
  }  
}
