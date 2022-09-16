import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Applicant } from 'app/model/applicant';
import { CommonService } from 'app/module/shared/common.service';
=======
>>>>>>> c5bbeffc94fee9c7dca3df0f0166a47d50510626

@Component({
  selector: 'app-all-approved-list',
  templateUrl: './all-approved-list.component.html',
  styleUrls: ['./all-approved-list.component.css']
})
export class AllApprovedListComponent implements OnInit {
<<<<<<< HEAD
  applicantid:number;
  fc:any;
  constructor(public cs:CommonService) { }

  app:Applicant={
    applicantid:0,
    applicant_name:"",
    applicant_occupation:"",
    applicant_pancard:"",
    applicant_email:"",
    cibil:{
      cibilId:0,
      cibilScore:0,
      cibilScoreDateTime:"",
      cibilStatus:"",
      cibilRemark:"",
      
    }}
  retriveApp:any;
  ngOnInit(): void {
    this.cs.getApplicantData().subscribe(data=>{
      this.retriveApp=data
    })
  }

  checkcibil(){
    
    this.cs.getCibil().subscribe(data=>{
      this.fc=data
      console.log(data); 
    })
  }

  // approved(fc,applicantid){
  //   alert(fc);
  //   alert(applicantid);
  //   console.log("id "+ applicantid)

  //   this.cs.saveCibil(fc,applicantid)
  // }

  approved(fc,a){
    alert(fc);
    alert(a);
    console.log("id "+ a.applicantid)

    this.cs.saveCibil(fc,a)
  }
=======

  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> c5bbeffc94fee9c7dca3df0f0166a47d50510626
}
