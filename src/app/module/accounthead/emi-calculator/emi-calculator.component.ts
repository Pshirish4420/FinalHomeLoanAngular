import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    


  }
//   emi(){
//     const amount:any=document.getElementById('amount').nodeValue
//     const rate:any=document.getElementById('rate').nodeValue
//     const time:any=document.getElementById('time').nodeValue
//     const interest = (amount * (rate * 0.01)) / time;
//     let emi = ((amount / time) + interest).toFixed(2);
//     emi = emi.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     document.getElementById("output").innerHTML=emi
//  }





}
