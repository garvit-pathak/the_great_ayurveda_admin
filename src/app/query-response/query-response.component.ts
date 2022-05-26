import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { QueryService } from '../service/query.service';

@Component({
  selector: 'app-query-response',
  templateUrl: './query-response.component.html',
  styleUrls: ['./query-response.component.css']
})
export class QueryResponseComponent implements OnInit {
  text:any;
  email:any;
  queryId:any;
  constructor(private activatedRoute:ActivatedRoute,private queryService:QueryService,private router:Router,private taostr:ToastrService) { 
    this.queryId=activatedRoute.snapshot.paramMap.get('id');
    queryService.viewById(this.queryId).subscribe(data=>{
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
  ngOnInit(): void {
  }

}
