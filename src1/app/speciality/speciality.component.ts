import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../Services/service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.scss'],
})
export class SpecialityComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['srno', 'specialityName', 'icons', 'actions'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource: any;

  constructor(
    private service: ServiceService,
    private toastrService: ToastrService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  speciality: Array<any> | null = null;
  serviceName: string | null = null;

  ngOnInit(): void {
    this.dataSource = [{srno: '#Q001', specialityName: 'Speciality Name' }, {srno: '#Q002', specialityName: 'Speciality Name'}, {srno: '#Q003', specialityName: 'Speciality Name'}, {srno: '#Q004', specialityName: 'Speciality Name'}];
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

  // getAllServices = () => {
  //   this.service.getAllServices().subscribe((result: any) => {
  //     this.speciality = result.data['Speciality'];
  //   });
  // };

  // formData: FormData = new FormData();
  // uploadSpecialization(fileToUpload: any) {
  //   fileToUpload = fileToUpload[0];
  //   (this.formData as FormData).append(
  //     'profileImage',
  //     fileToUpload,
  //     fileToUpload.name
  //   );
  //   (this.formData as FormData).append('user', 'specializations');
  // }

  // submitService = () => {
  //   if (!this.serviceName) {
  //     this.toastrService.error('Enter a service name');
  //     return;
  //   }
  //   this.service
  //     .addSpeciality(this.serviceName as string)
  //     .subscribe((result: any) => {
  //       if (result.statues === 400) {
  //         this.toastrService.error(result.message);
  //       } else {
  //         this.formData.append('userId', result.data._id);
  //         this.service
  //           .uploadServiceImage(this.formData as FormData)
  //           .subscribe((res: any) => {
  //             if (res.status === 200) {
  //               this.getAllServices();
  //               this.formData.delete('profileImage');
  //               this.formData.delete('user');
  //               this.formData.delete('userId');
  //               this.serviceName = null;
  //             } else {
  //               this.toastrService.error('Upload unsuccessful.');
  //             }
  //           });
  //         this.getAllServices();
  //       }
  //     });
  // };
}
