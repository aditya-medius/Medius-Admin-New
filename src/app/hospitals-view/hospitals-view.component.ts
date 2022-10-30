import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-hospitals-view',
  templateUrl: './hospitals-view.component.html',
  styleUrls: ['./hospitals-view.component.scss']
})
export class HospitalsViewComponent implements OnInit {

  active = 1;
  displayedColumns: string[] = ['srNo', 'doctorDetail', 'consultancyFee', 'prescriptionValidity', 'appointmentTime'];

  dataSource: any;

  displayedColumnsAppointmentsTab: string[] = ['patientName', 'bookingId', 'doctorDetail', 'appointmentTime', 'amount', 'status'];

  dataSourceAppointmentsTab: any;
  
  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.dataSource = [{srNo:'1', expYrs: '9 Years', degree: 'MBBS, MD', patientsCount: '50 Patients', doctorName: 'Dr. Deepak Kumar', specialization : 'Cardiology', hospitalName: 'Dreamcare Hospital', appointmentTime: '11.00 AM - 11.35 AM', weekDays: 'mon - tue - wed - thu - fri - sat', consultancyFee: '300', prescriptionValidity: '15 Days'}, {srNo:'2', expYrs: '8 Years', degree: 'MBBS, MD', patientsCount: '20 Patients', doctorName: 'Dr. Test Kumar', specialization : 'Cardiology', hospitalName: 'Dreamcare Hospital', appointmentTime: '11.00 AM - 11.35 AM', weekDays: 'mon - tue - wed - thu - fri - sat', consultancyFee: '300', prescriptionValidity: '15 Days'} ];

    this.dataSourceAppointmentsTab = [{patientName: 'Dharamraj Acharya', bookingId: '11111123', bookingDate: '20 mar 2022', doctorDetail: 'Dr. Deepak Kumar', specialization : 'Cardiology', degree: 'MBBS, MD', expYrs: '9 Years', appointmentTime: '11.00 AM - 11.35 AM', appointmentDate: '30 mar 2022', amount: '300', status1: 'New', status2: 'Upcoming', gender: 'Male', age: '32yrs.'}];

  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSourceAppointmentsTab.paginator = this.paginator;
    this.dataSourceAppointmentsTab.sort = this.sort;
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

}