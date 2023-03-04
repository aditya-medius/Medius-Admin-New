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
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit {
  // displayedColumns: string[] = [
  //   'doctorsName',
  //   'speciality',
  //   'experience',
  //   'appointmentNo',
  //   'status',
  //   'view',
  // ];

  displayedColumns: string[] = [
    'doctorsName',
    'speciality',
    'experience',
    'mobile',
    'appointmentNo',
    'status',
    'view',
  ];

  dataSource: any;

  constructor(
    private doctorService: DoctorService,
    private toastrService: ToastrService,
    private _liveAnnouncer: LiveAnnouncer,
    private router: Router
  ) {}

  doctorList: Array<any> | null = null;
  ngOnInit(): void {
    // this.dataSource = [{doctorsName: 'Dr. Deepak Kumar', speciality: 'Dental', experience: '20 Years', appointmentNo: '15', mobile: '8752402147'}, {doctorsName: 'Dr. Deepak', speciality: 'Dental', experience: '18 Years', appointmentNo: '23', mobile: '8752402147'}];
    this.getAllDoctors();
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
    this.router.navigate(['doctor-view']);
  }

  getAllDoctors = () => {
    this.doctorService.getAllDoctorsList().subscribe((result: any) => {
      if (result.status === 200) {
        this.dataSource = result.data.map((e: any, index: Number) => ({
          doctorsName: `${e.firstName} ${e.lastName}`,
          speciality: e.specialization
            .map((e: any) => e.specialityName)
            .join(' '),
          experience: e.overallExperience,
          mobile: e.phoneNumber,
          appointmentNo: e.appointmentNo,
          id: e._id,
          verified: e.verified,
        }));
      } else {
        this.toastrService.error(result.message);
      }
    });
  };

  toggleVerify = (id: string) => {
    console.log('toggleVerifytoggleVerify', id);
    this.doctorService.verifyDoctor(id).subscribe((result: any) => {
      if (result.status === 200) {
        this.toastrService.success(result.message);
        this.getAllDoctors();
      } else {
        this.toastrService.error(result.message);
      }
    });
  };
}
