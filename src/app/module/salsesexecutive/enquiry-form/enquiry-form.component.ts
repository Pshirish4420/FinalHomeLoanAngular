import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Customer } from 'app/model/Customer';
import { CommonService } from 'app/module/shared/common.service';
=======
>>>>>>> c5bbeffc94fee9c7dca3df0f0166a47d50510626

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent implements OnInit {

<<<<<<< HEAD
  constructor(public cs:CommonService) { }



  ngOnInit(): void {
  }
  submitData(c:Customer){
 this.cs.
  }

=======
  constructor() { }

  ngOnInit(): void {
  }
>>>>>>> c5bbeffc94fee9c7dca3df0f0166a47d50510626

}
