import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Admin } from '../model/admin';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  admin:Admin=new Admin("","");
  
  constructor(private adminData:AdminService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  SignInForm(){
    this.adminData.SignInData(this.admin).subscribe(data=>{
      
      if(data){
      this.toastr.success('Signed In Successfully','Successfull');
        
        localStorage.setItem('jwt-token',data.token);
        this.router.navigate(['viewmed']);
      }
      
    },err=>{
      if(err instanceof HttpErrorResponse){
        if(err.status>=400){
          this.toastr.error('Invalid Username and password','Error');
        }
      }
    })
  }
}