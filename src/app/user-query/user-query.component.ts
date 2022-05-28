import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { QueryService } from '../service/query.service';

@Component({
  selector: 'app-user-query',
  templateUrl: './user-query.component.html',
  styleUrls: ['./user-query.component.css']
})
export class UserQueryComponent implements OnInit {
  queryData:any;
  queryId:any;
  status:boolean=true;
  queryHistory:any=[];
  text:any;
  email:any;
  
  constructor(private queryService:QueryService,private taostr:ToastrService,private router:Router) {
    queryService.viewQuery().subscribe(data=>{
      this.queryData=data;
      
    });
    

   }

   getId(event:any){
    
    this.queryId=event.target.value;
    this.queryService.viewById(this.queryId).subscribe(data=>{
      this.email=data.email;
      
    });
  }

   sendData(){
    this.queryService.resolveQuery(this.text,this.email,this.queryId,).subscribe(data=>{
     
      if(data.modifiedCount && data.matchedCount){
        this.taostr.success('Response Send','Successfull');
        this.router.navigate(['querylist']);
      }
      else{
        alert('Already resolved');
      }
    }, err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status >= 400) {
          this.taostr.error('Cannot send response', 'Error');
        }
      }
    });
  }
  refresh(){
    location.reload();
  }
   
  ngOnInit(): void {
  }

}
