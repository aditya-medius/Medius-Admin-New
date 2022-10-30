import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from '../Services/doctor.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suvidha-kendra',
  templateUrl: './suvidha-kendra.component.html',
  styleUrls: ['./suvidha-kendra.component.scss']
})
export class SuvidhaKendraComponent implements OnInit {

  displayedColumns: string[] = ['name', 'contact', 'address1', 'address2', 'status', 'view'];

  dataSource: any;

  constructor(
    private doctorService: DoctorService,
    private toastrService: ToastrService,
    private _liveAnnouncer: LiveAnnouncer,
    private router: Router
  ) {}

  // doctorList: Array<any> | null = null;
  ngOnInit(): void {
    this.dataSource = [{name: 'Dr. Deepak Kumar', contact: '8754213690', mail: 'test@gmail.com', city: 'Delhi', locality: 'test abc', address: 'New Delhi', pin: '208931'}, {name: 'Dr. Deepak', contact: '8754213690', mail: 'test@gmail.com', city: 'Delhi', locality: 'test second', address: 'Assam', pin: '208931'}];
    // this.getAllDoctors();
  }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  route() {
    this.router.navigate(['suvidha-kendra-view']);
  }

}
