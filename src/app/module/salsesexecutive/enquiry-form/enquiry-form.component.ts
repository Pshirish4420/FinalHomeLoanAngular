import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/model/Customer';
import { CommonService } from 'app/module/shared/common.service';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent implements OnInit {

  constructor(public cs:CommonService) { }



  ngOnInit(): void {
  }
  submitData(c:Customer){
 this.cs.
  }


}
