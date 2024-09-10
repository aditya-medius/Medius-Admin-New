import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
// import { UntypedFormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AmenitiesService } from '../../Services/amenities.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.scss'],
})
export class AmenitiesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['srno', 'amenityName', 'actions'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource: any;

  constructor(
    private amenitiesServices: AmenitiesService,
    // private fb: UntypedFormBuilder,
    private toastrService: ToastrService,
    private _liveAnnouncer: LiveAnnouncer
  ) {
    this.getAllAmenities();
  }

  ngOnInit(): void {
    // this.getAllAmenities();
    this.dataSource = [];
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
        this.deleteAmenity(id);
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  // amenityForm = this.fb.group({
  //   amenity: ['', Validators.required],
  //   isPrimary: ['', Validators.required],
  // });

  amenitiesArray: Array<any> | null = [];
  // amenityName: string | null = null;

  getAllAmenities = () => {
    this.amenitiesServices.getAllAnemities().subscribe((result: any) => {
      this.amenitiesArray = result.data;
      this.dataSource = this.amenitiesArray.map((e: any, index: Number) => ({
        _id: e._id,
        srno: `#Q0${index}`,
        amenityName: e.name,
      }));
    });
  };

  // addAmenity = () => {
  // if (!this.amenityForm.valid) {
  //   this.toastrService.error('Enter proper values');
  //   return;
  // }

  // let { amenity, isPrimary } = this.amenityForm.value,
  //   type;
  // if (isPrimary) {
  //   type = 'Primary';
  // } else {
  //   type = 'Secondary';
  // }

  // this.amenitiesServices
  //   .addAmenity(amenity, type)
  //   .subscribe((result: any) => {
  //     this.toastrService.success(result.message);
  //     this.getAllAmenities();
  //   });
  // };

  public amenityName: string = '';

  // public getAmenityList = async () => {
  //   this.amenitiesServices.getAllAnemities().subscribe((result: any) => {
  //     console.log('Result', result);
  //   });
  // };

  public onSubmit = async () => {
    this.amenitiesServices
      .addAmenity(this.amenityName, 'Primary')
      .subscribe((result: any) => {
        // console.log('result', result);
        this.toastrService.success(result.message);
        this.getAllAmenities();
      });
  };

  public editAmenity = async () => {
    this.amenitiesServices;
  };

  public deleteAmenity = async (id: string) => {
    this.amenitiesServices.deleteAmenity(id).subscribe((result: any) => {
      // if
      this.getAllAmenities();
    });
  };
}
