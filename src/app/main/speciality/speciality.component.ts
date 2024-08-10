import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../../Services/service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { apiUrl } from '../../Util/Util';
import { lastValueFrom } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.scss'],
})
export class SpecialityComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['srno', 'specialityName', 'specialityNameh', 'icons', 'actions'];
  dataSource: any;

  constructor(
    private service: ServiceService,
    private toastrService: ToastrService,
    private _liveAnnouncer: LiveAnnouncer,
    private dom: DomSanitizer,
    private formBuilder: FormBuilder
  ) { }

  editSpecialityForm = this.formBuilder.group({
    specialityName: new FormControl(""),
    specialityNameh: new FormControl(""),
    icons: new FormControl("")
  });

  speciality: Array<any> | null = null;
  serviceName: string | null = null;

  ngOnInit(): void {
    this.dataSource = [];
    this.getAllServices();
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
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

  getAllServices = () => {
    this.service.getAllServices().subscribe((result: any) => {
      this.speciality = result.data['Speciality'].map(
        (e: any, index: Number) => {
          return {
            srno: `#Q00${index}`,
            ...e,
            img: `${apiUrl}/${e.image}?token=${JSON.parse(
              localStorage.getItem('admin')
            )}`,
          };
        }
      );
    });
  };

  formData: FormData = new FormData();
  uploadSpecialization(fileToUpload: any) {
    fileToUpload = fileToUpload[0];
    (this.formData as FormData).append(
      'profileImage',
      fileToUpload,
      fileToUpload.name
    );
    (this.formData as FormData).append('user', 'specializations');
  }

  submitService = () => {
    if (!this.serviceName) {
      this.toastrService.error('Enter a service name');
      return;
    }
    this.service
      .uploadServiceImage(this.formData as FormData)
      .subscribe((res: any) => {
        let {
          response: { image },
        } = res.data;
        if (res.status === 200) {
          this.formData.delete('profileImage');
          this.formData.delete('user');
          // this.formData.delete('userId');
          // this.serviceName = null;
          this.service
            .addSpeciality(this.serviceName as string, image)
            .subscribe((result: any) => {
              if (result.statues === 400) {
                this.toastrService.error(result.message);
              } else {
                this.getAllServices();
                // this.formData.append('userId', result.data._id);
              }
            });
        } else {
          this.toastrService.error('Upload unsuccessful.');
        }
      });
  };

  specialityToBeEdited: string = '';
  editSpeciality = (speciality: any) => {
    this.specialityToBeEdited = speciality._id;
    this.editSpecialityForm.setValue({
      specialityName: speciality.specialityName ?? "",
      specialityNameh: speciality.specialityNameh ?? "",
      icons: speciality.img ?? ""
    })
  };

  updateSpeciality = async () => {
    let newImage: string = '';
    if (this.formData.get('profileImage')) {
      let res: any = await lastValueFrom(
        this.service.uploadServiceImage(this.formData as FormData)
      );

      if (res.status === 200) {
        let {
          response: { image },
        } = res.data;

        newImage = image;
      }
    }

    this.formData.delete('profileImage');
    this.formData.delete('user');
    const { specialityName, specialityNameh } = this.editSpecialityForm.value
    this.service
      .updateSpeciality(
        this.specialityToBeEdited,
        newImage,
        specialityName as string,
        specialityNameh as string
      )
      .subscribe((result: any) => {
        if (result.statues === 400) {
          this.toastrService.error(result.message);
        } else {
          this.toastrService.success(`${result.message}. Please close the popup`)
        }
        this.getAllServices();
      });

  };
}
