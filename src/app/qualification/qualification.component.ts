import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { QualificationService } from '../Services/qualification.service';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
})
export class QualificationComponent implements OnInit {
  displayedColumns: string[] = [
    'srno',
    'qualification',
    'abbreviation',
    'actions',
  ];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource: any;

  constructor(
    private qualificationService: QualificationService,
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  // ngOnInit(): void {
  //   this.dataSource = [{srno: '#Q001', qualification: 'Bachelor Of Medicine And Bachelor Of Surgery', abbreviation: 'MBBS'}, {srno: '#Q002', qualification: 'Bachelor Of Dental Surgery ', abbreviation: 'BDS'}, {srno: '#Q003', qualification: 'Bachelor Of Homeopathy Medicine And Surgery ', abbreviation: 'BHMS'}, {srno: '#Q004', qualification: 'PublBachelor Orf Ayurvedic Medicine And Surgeryic', abbreviation: 'BAMS'}];
  // }

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

  deleteFunc(id: string) {
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
        this.deleteQualification(id);
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  qualificationForm = this.fb.group({
    name: ['', Validators.required],
    abbreviation: ['', Validators.required],
  });

  qualifications: Array<any> | null = null;
  ngOnInit(): void {
    this.getQualification();
  }

  getQualification = () => {
    this.qualificationService
      .getQualificationList()
      .subscribe((result: any) => {
        this.qualifications = result.data.map((e: any, index: Number) => {
          return {
            srno: index,
            qualification: e.name,
            abbreviation: e.abbreviation,
            id: e._id,
          };
        });
      });
  };

  submitQualification = () => {
    if (!this.qualificationForm.valid) {
      this.toastrService.error('Enter proper values');
      return;
    }
    let { name, abbreviation } = this.qualificationForm.value;
    this.qualificationService
      .addQualification(name, abbreviation)
      .subscribe((result: any) => {
        this.getQualification();
        this.toastrService.success(result.message);
        this.qualificationForm.reset();
      });
  };

  deleteQualification = (id: string) => {
    this.qualificationService
      .deleteQualification(id)
      .subscribe((result: any) => {
        this.getQualification();
      });
  };
}
