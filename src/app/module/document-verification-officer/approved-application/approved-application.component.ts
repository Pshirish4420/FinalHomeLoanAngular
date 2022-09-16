import { Component, OnInit } from '@angular/core';
import { Menu } from 'app/model/menu';
import { ROUTES } from 'app/sidebar/sidebar.component';

@Component({
  selector: 'app-approved-application',
  templateUrl: './approved-application.component.html',
  styleUrls: ['./approved-application.component.css']
})
export class ApprovedApplicationComponent implements OnInit {

  constructor() { }

  public menuItems: any[];
    role: string;

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuItems = Menu.menu;
    console.log(this.menuItems);
    this.role = sessionStorage.getItem("role");
    console.log(this.role);
  }

}
