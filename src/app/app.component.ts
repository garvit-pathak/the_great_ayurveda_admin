import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './service/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Admin The Great Ayurveda';
  constructor(private adminService:AdminService,private router:Router,private toastr:ToastrService){
  }
  isLoggedIn():boolean{
    if(this.adminService.checkToken()){
      return true;
    }

    return false;
  }
  signOut(){
    this.toastr.success('SignOut Successfully','Successfull');
    localStorage.removeItem('jwt-token');
    this.router.navigate(['signin']);
  }
}
