import { Injectable } from '@angular/core';
import { documents } from '../document-verification-officer/upload-document/upload-document.component';
import { HttpClient } from '@angular/common/http';
import { employee } from '../employee/add-employee/add-employee.component';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { Cibil } from 'app/model/cibil';
import { Customer } from 'app/model/Customer';
export interface Applicant {
  applicantid:number;
  applicant_name: string;
  applicant_occupation: string;
  applicant_pancard: string;
  applicant_email:string;
  cibil:{
    cibilId:number;
    cibilScoreDateTime:string;
    cibilStatus:string;
    cibilRemark:string;
  }
}
=======
import { Applicant } from 'app/model/applicant';
import { Cibil } from 'app/model/cibil';
>>>>>>> 575d390c195f3abd316cd0467b1634ea256dbfa7



@Injectable({
  providedIn: 'root'
})


export class CommonService {

  url:string="http://localhost:7777/savedocuments/"

  postEmpurl:string="http://localhost:7777/Employee/"

  getEmpurl:string="http://localhost:7777/Employees/"

  DeleteEmpurl:string="http://localhost:7777/Employee/"

  UpdateEmpurl:string="http://localhost:7777/Employee/"
<<<<<<< HEAD

  getApplicanturl:string="http://localhost:7777/getApplicants/"

  getCibilurl:string="http://localhost:7777/getCibil/"

  saveCibilurl:string="http://localhost:7777/saveCibil/"

=======
  suapplicanturl:string="http://localhost:7777/saveApplicant/"
>>>>>>> 575d390c195f3abd316cd0467b1634ea256dbfa7
  emplist:employee[];
  constructor(public http:HttpClient) { }
  

  e: employee = {
    employeeid: 0,
    employeename: "",
    employeeusername: "",
    employeepassword: "",
    employeedesignation: "",
    employeemobile: "",
    employeeemailid: "",
    
  };
  c:Customer={
    customerid:0,
customer_age: "",
customer_name: "",
customer_gender: "",
customer_email: "",
customer_dob: "",
customer_address:"",
customer_mobno: "",
applicant:{
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
    
  }

<<<<<<< HEAD
},
accountDetails:{
  accountId:0,
  account_type:"",
  account_holdername:"",
  ifsc_code:"",
},
propertyDetails:{

  propertyID:0,
  property_type:"",
  property_area:"",
  property_price:"",
  property_address:"",
},
document:{
  documentId:0,
  addressProof: [],
  pancard: [],
  aadharcard: [],
  signature: [],
  photo: [],
  incometax: [],
  salaryslip: [],
  bankcheck: []


},
profession:{
  proffessionid:0,
  designation:"",
  proffession_name:"",
  proffession_type:"",
  annual_salary:"",
},
loanDetails:{
  loanId:0,
  loanPrincipalAmt:"",
  rateOfInterest:"",
  loanTenure:"",
  status:"",
  emiDetails:{
    emiId:0,
    emiAmtMonnthly:"",
    emiDueDate:"",
    previousEmiStatus:"",
}
  }
}


  // app:Applicant={
  // applicantid:0,
  // applicant_name:"",
  // applicant_occupation:"",
  // applicant_pancard:"",
  // applicant_email:"",
  // cibil:{
  //   cibilId:0,
  //   cibilScoreDateTime:"",
  //   cibilStatus:"",
  //   cibilRemark:"",
    
  // }}
=======
  app:Applicant=
{
  "applicantid":0,
  "applicant_name": '',
  "applicant_occupation": '',
  "applicant_pancard": '',
  "applicant_email": '',
  "cibil": {
    "cibilId": 0,
    "cibilScoreDateTime": '',
    "cibilStatus": '',
    "cibilRemark": '',
    "cibilScore": 0
  }
}
c:Cibil={
  cibilId: 0,
  cibilScoreDateTime: '',
  cibilStatus: '',
  cibilRemark: '',
  cibilScore: 0
}

>>>>>>> 575d390c195f3abd316cd0467b1634ea256dbfa7

  savedocument(d){
    return this.http.post(this.url,d)
  }

img:string="/assets/img/raju.jpg";

setimage(image :string)
{
this.img=image;
}




saveEmpData(e){
  return this.http.post(this.postEmpurl,e)
}

getEmpDAta():Observable<employee[]>{
  return this.http.get<employee[]>(this.getEmpurl)
}

DeleteEmpData(id:number){
  return this.http.delete(this.DeleteEmpurl+id)
}

updateEmpData(e:employee){

  return this.http.put(this.UpdateEmpurl+e.employeeid,e)
}

<<<<<<< HEAD
getApplicantData():Observable<Applicant>{

  return this.http.get<Applicant>(this.getApplicanturl)
}

getCibil():Observable<Cibil>{
  console.log("service");
  return this.http.get<Cibil>(this.getCibilurl);
}
saveCibil(c:number,a:Applicant){
console.log(a,c);
//return this.http.get("http://localhost:7777/saveCibil");

 return this.http.get(this.saveCibilurl+c+"/"+a.applicantid);
}

saveCustomerData(){
  this.http.post(this.)
}


=======

saveApplicant(a:Applicant)
{
return this.http.post(this.suapplicanturl,a)
}
>>>>>>> 575d390c195f3abd316cd0467b1634ea256dbfa7
}

