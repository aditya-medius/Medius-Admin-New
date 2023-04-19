import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { ModeOfPaymentService } from '../Services/modeofPayment.service';

@Component({
  selector: 'app-mode-of-payment',
  templateUrl: './login.component.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {}
}
