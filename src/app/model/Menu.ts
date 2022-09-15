export class Menu {
    public static menu: Array<any> = [
      
      {
        accounthead: [  
          {path: "approvedlist", title:"APPROVE", icon: "pe-7s-graph", class: "" },
          {path: "emi", title:"EMI-LIST", icon: "pe-7s-graph", class: "" }
      ],
      dvofficer: [
        {path: "approved-app", title:"approved-app", icon: "pe-7s-graph", class: "" },
        {path: "upload-document", title:"UPLOAD-DOCUMENT", icon: "pe-7s-graph", class: "" }
  
    ],
  
    operation:[
      {path: "allaplist", title:"ALL-Application", icon: "pe-7s-graph", class: "" },
      
    ],
    selsexcutive:[
        {path: "oeenquiry", title:"ENQUERY", icon: "pe-7s-graph", class: "" },
        {path: "oecustomer", title:"REGISTER CUSTOMER", icon: "pe-7s-graph", class: "" },
        {path: "oedocument", title:"UPLOAD DOCUMENT", icon: "pe-7s-graph", class: "" }

      ],
      cr:[{path: "credit", title:"APPROVE-LIST", icon: "pe-7s-graph", class: "" },

      ],
      ledger:[{path: "abcdash", title:"DASHBOARD", icon: "pe-7s-graph", class: "" }],

      apnaloan:[{
        path:"apnalist", title:"APANALIST", icon:"pe-7s-graph", class:"" },
        {path:"apnadetails" , title:"APANADETAILS", icon:"pe-7s-graph", class:""}
      
    ],
    employee:[{
      path:"add-emp",title:"ADD-EMPLOYEE", icon:"pe-7s-graph", class:"" },
      {path:"emp-list", title:"EMPLOYEE-LIST", icon:"pe-7s-graph", class:""
    }]

      }
    ];
    menuItems: any;
    
  }
  