import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.scss']
})
export class PatientViewComponent implements OnInit {

  active = 1;

  displayedColumns: string[] = ['patientName', 'bookingId', 'doctorDetail', 'appointmentTime', 'amount', 'status'];

  dataSource: any;

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.dataSource = [{patientName: 'Dharamraj Acharya', bookingId: '11111123', bookingDate: '20 mar 2022', doctorDetail: 'Dr. Deepak Kumar', specialization : 'Cardiology', hospitalName: 'Dreamcare Hospital', appointmentTime: '11.00 AM - 11.35 AM', appointmentDate: '30 mar 2022', amount: '300', status1: 'New', status2: 'Upcoming', gender: 'Male', age: '32yrs.'}];
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
  
}
