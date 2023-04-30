import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { ThemePalette } from '@angular/material/core';
import { AppointmentService } from '../../Services/appointment.service';
import * as moment from 'moment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent implements OnInit {
  // color: ThemePalette = 'warn';
  // checked = false;
  // disabled = false;
  //  constructor() { }

  // ngOnInit(): void {
  // }

  displayedColumns: string[] = [
    'userName',
    'bookingId',
    'doctorName',
    'appointmentTime',
    'amount',
    'status',
  ];

  dataSource: any;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
    this.dataSource = [
      {
        userName: 'Dharamraj Acharya',
        bookingId: '11111123',
        bookingDate: '20 mar 2022',
        doctorName: 'Dr. Deepak Kumar',
        specialization: 'Cardiology',
        hospitalName: 'Dreamcare Hospital',
        appointmentTime: '11.00 AM - 11.35 AM',
        appointmentDate: '30 mar 2022',
        amount: '300',
        status1: 'New',
        status2: 'Upcoming',
        gender: 'Male',
        age: '32yrs.',
      },
    ];
    this.getAllAppointments();
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

  deleteFunc() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  getAllAppointments = () => {
    this.appointmentService.getAllAppointments().subscribe((result: any) => {
      console.log('ufggfdsjvhdsddssd', result);
      if (result.status === 200) {
        this.dataSource = result.data.map((e: any, index: Number) => ({
          userName: `${e?.patient?.firstName} ${e?.patient?.lastName}`,
          bookingId: e?.appointmentId,
          bookingDate: moment(e?.createdAt).format('dd mm yyyy'),
          doctorName: `${e?.doctors?.firstName} ${e?.doctors?.lastName}`,
          specialization: e?.doctors?.specialization?.map(
            (elem: any) => elem.specialityName
          ),
          hospitalName: e?.Hospital?.name,
          appointmentDate: moment(e?.time?.date).format('dd mm yyyy'),
          appointmentTime: `${e?.time?.from?.time}:${e?.time?.from?.division} - ${e?.time?.till?.time}:${e?.time?.till?.division}`,
          amount: '',
          status1: `${
            moment(new Date()).diff(e?.time?.date, 'days') > 0
              ? 'New'
              : 'Completed'
          }`,
          status2: `${
            moment(new Date()).diff(e?.time?.date, 'days') > 0
              ? 'Upcoming'
              : 'Completed'
          }`,
          gender: e?.patient?.gender,
          age: moment(e?.patient?.DOB)
            .fromNow()
            .split(' ')
            .slice(0, 2)
            .join(' '),
        }));
      }
    });
  };
}
