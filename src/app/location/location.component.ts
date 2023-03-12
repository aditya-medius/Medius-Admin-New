import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { StateService } from '../Services/state.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  displayedColumns: string[] = ['srno', 'localityName', 'actions'];
  // displayedColumns: string[] = ['srno', 'cityName', 'localityName', 'actions'];
  inputVal: any;
  dataSource: any;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private stateService: StateService,
    private toasterService: ToastrService
  ) {}

  ngOnInit(): void {
    this.dataSource = [
      { srno: '#Q001', localityName: '' },
      { srno: '#Q002', localityName: '' },
      { srno: '#Q003', localityName: '' },
      { srno: '#Q004', localityName: '' },
    ];

    // this.getAllCitiesByState();
    this.getAllStates();
    this.getAllLocalities();
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  cityId: string = '';
  stateId: string = '';

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

  submit() {
    if (!(this.stateId && this.cityId && this.inputVal)) {
      this.toasterService.error('Enter proper values');
      return;
    }
    this.stateService
      .addLocality(this.cityId, this.inputVal)
      .subscribe((result: any) => {
        if (result.status === 200) {
          this.toasterService.success(result.message);
          this.stateId = '';
          this.cityId = '';
          this.inputVal = '';
          this.cityList = [];
          this.stateList = [];
          this.getAllLocalities();
        }
      });
  }

  cityList: Array<any> = [];
  getAllCitiesByState = () => {
    this.stateService.getCityByState(this.stateId).subscribe((result: any) => {
      if (result.status === 200) {
        let { city } = result.data[0];
        this.cityList = city?.map((e: any, index: Number) => ({
          srno: `#Q00${index}`,
          cityName: e.name,
          city_id: e['city-id'],
        }));
      }
    });
  };

  stateList: Array<any> = [];

  getAllStates = () => {
    this.stateService.getCityStateLocalityCountry().subscribe((result: any) => {
      if (result.status === 200) {
        this.stateList = result?.data.state?.map((e: any, index: Number) => ({
          state_id: e?.state_id,
          stateName: e?.name,
          id: e?._id,
        }));
      }
    });
  };

  localityCount: Number = 0;
  limit: Number = 20;
  page: Number = 0;

  handlePageEvent(e: PageEvent) {
    let { pageIndex, pageSize } = e;
    this.limit = pageSize;
    this.page = pageIndex;
    this.getAllLocalities();
  }

  getAllLocalities = () => {
    this.stateService
      .getCityStateLocalityCountry('locality', this.page, this.limit)
      .subscribe((result: any) => {
        if (result.status === 200) {
          this.localityCount = result.data.count;
          this.dataSource = result?.data?.locality?.map(
            (e: any, index: Number) => ({
              srno: `#Q00${index}`,
              localityName: e.name,
            })
          );
        }
      });
  };

  onStateIdChange = () => {
    this.getAllCitiesByState();
  };
}
