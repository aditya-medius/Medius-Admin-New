// import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HospitalService } from '../Services/hospital.service';

import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss'],
})
export class HospitalsComponent implements OnInit {
  displayedColumns: string[] = [
    'hospitalName',
    'city',
    'locality',
    'appointmentNo',
    'status',
    'view',
  ];

<<<<<<< HEAD
  dataSource: any = [];
=======
  displayedColumns: string[] = ['hospitalName', 'city', 'mobileNo', 'appointmentNo', 'status', 'view'];

  dataSource: any;
>>>>>>> d3626d2dc118a790fcb5f1a140ba34b69ee5af53

  constructor(
    private hospitalService: HospitalService,
    private toastrService: ToastrService,
    private _liveAnnouncer: LiveAnnouncer,
    private router: Router
  ) {}

  hospitalList: Array<any> | null = null;

  ngOnInit(): void {
    // this.getAllHospitals();
    this.dataSource = [{hospitalName: 'Sanjeevani Hospital', city: 'Delhi', locality: 'Dadar West', appointmentNo: '25', mobileNo: '87965541023'}, {hospitalName: 'Yashoda Hospital', city: 'Mumbai', locality: 'Dadar', appointmentNo: '28', mobileNo: '87965541023'}];
  }

  getAllHospitals = () => {
    this.hospitalService.getAllHospitals().subscribe((result: any) => {
      if (result.status === 200) {
        // this.hospitalList = result.data;
        this.dataSource = result.data;
        this.toastrService.success(result.message);
      } else {
        this.toastrService.error(result.message);
      }
    });
  };

  // toggleVerify = (id: string) => {
  //   this.hospitalService.verifyHospital(id).subscribe((result: any) => {
  //     if (result.status === 200) {
  //       this.toastrService.success(result.message);
  //       this.getAllHospitals();
  //     } else {
  //       this.toastrService.error(result.message);
  //     }
  //   });
  // };

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

  // deleteFunc() {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire(
  //         'Deleted!',
  //         'Your file has been deleted.',
  //         'success'
  //       )
  //     }
  //   })
  // }

  route() {
    this.router.navigate(['hospital-view']);
  }

}
