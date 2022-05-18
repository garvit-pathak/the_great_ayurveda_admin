import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../model/admin';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  admin:Admin=new Admin("","");
  
  constructor(private adminData:AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  SignInForm(){
    this.adminData.SignInData(this.admin).subscribe(data=>{
      
      if(data){
        alert('SignUp Success');
        localStorage.setItem('jwt-token',data.token);
        this.router.navigate(['viewmed']);
      }
      
    })
  }
}