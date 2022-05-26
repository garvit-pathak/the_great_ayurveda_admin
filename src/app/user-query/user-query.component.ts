import { Component, OnInit } from '@angular/core';
import { QueryService } from '../service/query.service';

@Component({
  selector: 'app-user-query',
  templateUrl: './user-query.component.html',
  styleUrls: ['./user-query.component.css']
})
export class UserQueryComponent implements OnInit {
  queryData:any;
  queryId:any;

  constructor(private queryService:QueryService) {
    queryService.viewQuery().subscribe(data=>{
      this.queryData=data;
    });
   }
   
  ngOnInit(): void {
  }

}
