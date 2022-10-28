import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  color: ThemePalette = 'warn';
  checked = false;
  disabled = false;
   constructor() { }

  ngOnInit(): void {
  }

}
