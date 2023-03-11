import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from '../Services/doctor.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { PatientService } from '../Services/patient.service';
import * as moment from 'moment';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
  // displayedColumns: string[] = [
  //   'patientName',
  //   'gender',
  //   'age',
  //   'email',
  //   'mobileNo',
  // ];

  displayedColumns: string[] = [
    'patientName',
    'age',
    'gender',
    'email',
    'mobileNo',
    // 'view',
  ];

  dataSource: any = [];

  constructor(
    private patientService: PatientService,
    private toastrService: ToastrService,
    private _liveAnnouncer: LiveAnnouncer,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataSource = [
      {
        patientName: 'Dr. Deepak Kumar',
        gender: 'Male',
        age: '20',
        email: 'test@gmail.com',
        mobileNo: '8265528510',
      },
      {
        patientName: 'Dr. Deepak',
        gender: 'Female',
        age: '18',
        email: 'test2@gmail.com',
        mobileNo: '7265528510',
      },
    ];
    this.getPatientList();
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
    this.router.navigate(['patient-view']);
  }

  getPatientList = () => {
    this.patientService.getAllPatientList().subscribe((result: any) => {
      if (result.status === 200) {
        this.dataSource = result.data.map((e: any) => ({
          patientName: `${e.firstName} ${e.lastName}`,
          gender: e.gender,
          age: moment(e.DOB).fromNow().split(' ').slice(0, 2).join(' '),
          email: e.email,
          mobileNo: e.phoneNumber,
        }));
        this.toastrService.success(result.message);
      } else {
        this.toastrService.error(result.message);
      }
    });
  };
}
