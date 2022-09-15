import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'app/module/shared/common.service';
export interface documents {
  documentId:number;
  addressProof:any[];
  pancard:any[];
  aadharcard:any[];
  signature:any[];
  photo:any[];
  incometax:any[];
  salaryslip:any[];
  bankcheck:any[];
}



@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {
  state:number=1;

  d:documents={
    documentId: 0,
    addressProof: [],
    pancard: [],
    aadharcard: [],
    signature: [],
    photo: [],
    incometax: [],
    salaryslip: [],
    bankcheck: []
  }

  formDoc:FormGroup;
  
  selectaddressProof:any;
  imageSrc1:any;
  selectpancard:any;
  imageSrc2:any;
  selectaadharcard:any;
  imageSrc3:any;
  selectsignature:any;
  imageSrc4:any;
  selectphoto:any;
  imageSrc5:any;
  selectincometax:any;
  imageSrc6:any;
  selectsalaryslip:any;
  imageSrc7:any;
  selectbankcheck:any;
  imageSrc8:any;

  reader=new FileReader
  constructor(public fb:FormBuilder,public cs:CommonService) { 

    this.formDoc=this.fb.group({

        documentId:0,
        addressProof:[],
        pancard:[],
        aadharcard:[],
        signature:[],
        photo:[],
        incometax:[],
        salaryslip:[],
        bankcheck:[],


    })
  }
  ngOnInit(): void {
  }

  onselectaddressProof(event){
    alert("call");
    this.selectaddressProof= event.target.files[0];
    this.reader.onload = e => this.imageSrc1 = this.reader.result;
    this.reader.readAsDataURL(this.selectaddressProof);
}

onselectpancard(event){

  this.selectpancard=event.target.files[0];
  this.reader.onload = e => this.imageSrc2 = this.reader.result;
  this.reader.readAsDataURL(this.selectpancard);
}

  onselectaadharcard(event){
    alert("call");
    this.selectaadharcard= event.target.files[0];
    this.reader.onload = e => this.imageSrc3 = this.reader.result;
    this.reader.readAsDataURL(this.selectaadharcard);
}

onselectsignature(event){

  this.selectsignature=event.target.files[0];
  this.reader.onload = e => this.imageSrc4 = this.reader.result;
  this.reader.readAsDataURL(this.selectsignature);
}

onselectphoto(event){

  this.selectphoto=event.target.files[0];
  this.reader.onload = e => this.imageSrc5 = this.reader.result;
  this.reader.readAsDataURL(this.selectphoto);

}

onselectincometax(event){

  this.selectincometax=event.target.files[0];
  this.reader.onload = e => this.imageSrc6 = this.reader.result;
  this.reader.readAsDataURL(this.selectincometax);

}


onselectsalaryslip(event){

  this.selectsalaryslip=event.target.files[0];
  this.reader.onload = e => this.imageSrc7 = this.reader.result;
  this.reader.readAsDataURL(this.selectsalaryslip);

}

onselectbankcheck(event){

  this.selectbankcheck=event.target.files[0];
  this.reader.onload = e => this.imageSrc8 = this.reader.result;
  this.reader.readAsDataURL(this.selectbankcheck);

}

saveDoc(){
 // const doc=JSON.stringify(this.formDoc.value);
  //create object of formData

  const docupload=new FormData();
  docupload.append("addressProof",this.selectaddressProof);
  docupload.append("pancard",this.selectpancard);
  docupload.append("aadharcard",this.selectaadharcard);
  docupload.append("signature",this.selectsignature);
  docupload.append("photo",this.selectphoto);
  docupload.append("incometax",this.selectincometax);
  docupload.append("salaryslip",this.selectsalaryslip);
  docupload.append("bankcheck",this.selectbankcheck);
  // docupload.append("doc",doc);

  this.cs.savedocument(docupload).subscribe();
  window.location.reload();

}

onnext(){
 this.state=2
}





}
