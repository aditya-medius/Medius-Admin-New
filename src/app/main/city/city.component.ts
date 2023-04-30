import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { StateService } from '../../Services/state.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit, AfterViewInit {
  state: any;
  inputVal: any;
  // displayedColumns: string[] = ['srno', 'stateName', 'cityName', 'actions'];
  displayedColumns: string[] = ['srno', 'cityName', 'actions'];

  // displayedColumns: string[] = ['srno', 'stateName', 'cityName', 'test', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'actions'];

  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource: any;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private stateService: StateService,
    private toasterService: ToastrService
  ) {}

  ngOnInit(): void {
    this.dataSource = [{ srno: '#Q001', cityName: '' }];
    this.getAllCities();
    this.getAllStates();
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  selectedState: string = '';

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
    this.stateService
      .addCity(this.selectedState, this.inputVal)
      .subscribe((result: any) => {
        if (result.status === 200) {
          this.toasterService.success(result.message);
          this.getAllCities();
          this.selectedState = '';
          this.inputVal = '';
        }
      });
  }

  getAllCities = () => {
    this.stateService
      .getCityStateLocalityCountry('city')
      .subscribe((result: any) => {
        if (result.status === 200) {
          this.dataSource = result?.data?.city?.map(
            (e: any, index: Number) => ({
              srno: `#Q00${index}`,
              cityName: e.name,
            })
          );
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
}
