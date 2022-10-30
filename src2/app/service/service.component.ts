import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
// import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../Services/service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['srno', 'serviceName', 'actions'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource: any;

  constructor(
    private service: ServiceService,
    private toastrService: ToastrService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  // speciality: Array<any> | null = null;
  // serviceName: string | null = null;

  ngOnInit(): void {
    this.dataSource = [{srno: '#Q001', serviceName: '24*7 emergency'}, {srno: '#Q002', serviceName: 'New born screening'}, {srno: '#Q003', serviceName: 'Pharmacy'}, {srno: '#Q004', serviceName: 'ICU'}, {srno: '#Q005', serviceName: '24*7 Oxygen'}];
    // this.getAllServices();
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
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }

  // serviceForm = this.fb.group({
  //   name: ['', Validators.required],
  //   serviceType: ['', Validators.required],
  // });

  // getAllServices = () => {
  //   this.service.getServices().subscribe((result: any) => {
  //     this.speciality = result.data;
  //   });
  // };

  // submitService = () => {
    // if (!this.serviceForm.valid) {
    //   this.toastrService.error('Enter proper values');
    //   return;
    // }
    // let { name, serviceType } = this.serviceForm.value;
    // let type = serviceType ? 'Primary' : 'Secondary';
    // this.service.addService(name, type).subscribe((result: any) => {
    //   if (result.status === 400) {
    //     this.toastrService.error(result.message);
    //   } else {
    //     this.toastrService.success(result.message);
    //     this.serviceForm.reset();
    //     this.getAllServices();
    //   }
    // });
  // };
}
