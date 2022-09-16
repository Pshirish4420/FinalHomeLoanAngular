import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/module/shared/common.service';

@Component({
  selector: 'app-approved-list',
  templateUrl: './approved-list.component.html',
  styleUrls: ['./approved-list.component.css']
})
export class ApprovedListComponent implements OnInit {

  retriveDoc:any;
  // retriveCibil:any
  retriveApp:any;

  constructor(public cs:CommonService) { }

  ngOnInit(): void {
    this.cs.getAllCust().subscribe(d=>{
      this.retriveDoc=d;
     })
    }
}
