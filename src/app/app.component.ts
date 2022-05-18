import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './service/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'canbeDelete';
  constructor(private adminService:AdminService,private router:Router){

  }
  isLoggedIn():boolean{
    if(this.adminService.checkToken()){
      return true;
    }

    return false;
  }
  signOut(){
    localStorage.removeItem('jwt-token');
    this.router.navigate(['signin']);
  }
}
