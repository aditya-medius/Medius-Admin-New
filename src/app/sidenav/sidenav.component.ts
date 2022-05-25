import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    // ni ni-square-pin text-yellow
    class: "",
  },
  {
    path: "/appointment",
    title: "Appointment",
    // ni ni-square-pin text-yellow
    class: "",
  },
  {
    path: "hospitals",
    title: "Hospitals",
    // ni ni-square-pin text-yellow
    class: "",
  },
  {
    path: "/doctor",
    title: "Doctor",
    // ni ni-square-pin text-yellow
    class: "",
  },
  {
    path: "/user",
    title: "User",
    // ni ni-square-pin text-yellow
    class: "",
  },
  {
    path: "/service",
    title: "Service",
    // ni ni-square-pin text-yellow
    class: "",
  },
  {
    path: "/speciality",
    title: "Speciality",
    // ni ni-square-pin text-yellow
    class: "",
  },
  {
    path: "/qualification",
    title: "Qualification",
    // ni ni-square-pin text-yellow
    class: "",
  },
  {
    path: "/location",
    title: "Location",
    // ni ni-square-pin text-yellow
    class: "",
  },

  {
    path: "/mode of payment",
    title: "Mode Of Payment",
    // ni ni-square-pin text-yellow
    class: "",
  },
  
];

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {
  public menuItems: any[] = [];
  public isCollapsed = true;

  constructor(private router:Router) { }

  ngOnInit(): void {
  
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

}
