import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from '../service/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctorStored: any
  approvalId: any;
  rejectionId: any;
  approvedData: any;
  rejectedData: any;

  constructor(private doctorService: DoctorService, private toastr: ToastrService) {
    doctorService.viewDoctor().subscribe(data => {
      this.doctorStored = data;
    });
  }

  ngOnInit(): void {
  }
  getIdApprove(event: any) {
    this.approvalId = event.target.value;
    this.doctorService.approveDoctor(this.approvalId).subscribe(data => {
      this.toastr.success('Successfully Approved', 'Successfull');
      this.approvedData = data;
      location.reload();
    }, err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status >= 400) {
          this.toastr.error('Cannot Approve', 'Error');
        }
      }
    });
  }

  getIdReject(event: any) {
    if (confirm('Are you Sure')) {
      this.rejectionId = event.target.value;
      this.doctorService.rejectDoctor(this.rejectionId).subscribe(data => {
        this.toastr.success('Successfully Rejected', 'Successfull');
        this.rejectedData = data;
        location.reload();
      }, err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status >= 400) {
            this.toastr.error('Cannot Reject', 'Error');
          }
        }
      });
    }

  }

  deleteById(event: any) {
    this.rejectionId = event.target.value;
    if(confirm('Are you sure?')){
      this.doctorService.deleteDoctor(this.rejectionId).subscribe(data => {
        this.toastr.success('Successfully Deleted', 'Successfull');
        location.reload();
      }, err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status >= 400) {
            this.toastr.error('Cannot Delete', 'Error');
          }
        }
      });
    }
    
  }


}
