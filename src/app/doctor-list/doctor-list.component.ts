import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../service/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctorStored:any
  approvalId:any;
  rejectionId:any;
  approvedData:any;
  rejectedData:any;

  constructor(private doctorService:DoctorService) {
    doctorService.viewDoctor().subscribe(data=>{
      this.doctorStored=data;
      console.log(this.doctorStored.name)
    }); 
   }

  ngOnInit(): void {
  }
  getIdApprove(event:any){
    this.approvalId=event.target.value;
    this.doctorService.approveDoctor(this.approvalId).subscribe(data=>{
      this.approvedData=data;
      console.log(this.approvedData);
      location.reload();
    })
  }

  getIdReject(event:any){
    this.rejectionId=event.target.value;
    this.doctorService.rejectDoctor(this.rejectionId).subscribe(data=>{
      this.rejectedData=data;
      location.reload();
    });
  }

  deleteById(event:any){
    this.rejectionId=event.target.value;
    this.doctorService.deleteDoctor(this.rejectionId).subscribe(data=>{
      location.reload();
    });
  }

  
}
