import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../Util/Util';

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
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public menuItems: any[] = [];
  public isCollapsed = true;
  selected: any;
  constructor(private router:Router, private http: HttpClient, private toastrService: ToastrService) { 
    this.login();
  }


  ngOnInit(): void {

    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

  getSelectedIcon(data) {

    if(this.selected) {
      document.getElementById(this.selected).style.fontFamily = 'Roboto';
      document.getElementById(this.selected).style.fontStyle = 'normal';
      document.getElementById(this.selected).style.fontWeight = '400';
      document.getElementById(this.selected).style.fontSize = '18px';
      document.getElementById(this.selected).style.lineHeight = '21px';
      document.getElementById(this.selected).style.letterSpacing = '0.05em';
      document.getElementById(this.selected).style.color = '#ffffff';
      document.getElementById(this.selected).style.background = '';
    }


    this.selected = data;

    document.getElementById(data).style.fontFamily = 'Roboto';
    document.getElementById(data).style.fontStyle = 'normal';
    document.getElementById(data).style.fontWeight = '500';
    document.getElementById(data).style.fontSize = '18px';
    document.getElementById(data).style.lineHeight = '21px';
    document.getElementById(data).style.letterSpacing = '0.05em';
    document.getElementById(data).style.color = 'black';
    document.getElementById(data).style.background = 'white';
    console.log(data);
  }

  onEnvChange = (url: string) => {
    localStorage.setItem('apiUrl', url);
    window.location.reload();
  };

  public localUrl: string = apiUrl;
  login = () => {
    let url: string = `${apiUrl}/admin/login?phoneNumber=8826332442&password=123456`;
    return this.http.put(url, {}).subscribe((result: any) => {
      if (result.status == 200) {
        this.toastrService.success(`${result.message}`);
        localStorage.setItem('admin', JSON.stringify(result.data));
      } else if (result.status == 400) {
        if (result.type == 'JsonWebTokenError') {
          this.toastrService.error('Invalid OTP');
        }
        this.toastrService.error(result.message);
      }
    });
  };

}
