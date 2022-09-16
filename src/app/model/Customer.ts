<<<<<<< HEAD
import { documents } from "app/module/document-verification-officer/upload-document/upload-document.component";
import { AccountDetails } from "./account-details";
import { Applicant } from "./applicant";
import { LoanDetails } from "./loan-details";
import { ProfessionDetails } from "./profession-details";
import { PropertyDetails } from "./property-details";

export class Customer {
  customerid: number;
  customer_age: String;
  customer_name: String;
  customer_gender: String;
  customer_email: String;
  customer_dob: String;
  customer_address: String;
  customer_mobno: String;
  applicant:Applicant;
  accountDetails:AccountDetails;
  propertyDetails:PropertyDetails;
  document:documents;
  profession:ProfessionDetails;
  loanDetails:LoanDetails;
=======

export class Customer {
  studentId: number;
  firstName: String;
  lastName: String;
  mobNo: String;
  studentEmail: String;
  studentEvent: String;
>>>>>>> c5bbeffc94fee9c7dca3df0f0166a47d50510626
  }


