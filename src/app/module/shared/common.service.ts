import { Injectable } from '@angular/core';
import { documents } from '../document-verification-officer/upload-document/upload-document.component';
import { HttpClient } from '@angular/common/http';
import { employee } from '../employee/add-employee/add-employee.component';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class CommonService {

  url:string="http://localhost:7777/savedocuments/"

  postEmpurl:string="http://localhost:7777/Employee/"

  getEmpurl:string="http://localhost:7777/Employees/"

  DeleteEmpurl:string="http://localhost:7777/Employee/"

  UpdateEmpurl:string="http://localhost:7777/Employee/"
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


  savedocument(d){
    return this.http.post(this.url,d)
  }

img:string="/assets/img/pass_size.jpg";

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

}

