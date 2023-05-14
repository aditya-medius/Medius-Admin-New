import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { StateService } from '../../Services/state.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class StateComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['srno', 'stateName', 'actions'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource: any;

  stateName: string | null = null;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private stateService: StateService,
    private toasterService: ToastrService
  ) {}

  ngOnInit(): void {
    this.dataSource = [];
    this.getAllStates();
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

  getAllStates = () => {
    this.stateService.getCityStateLocalityCountry().subscribe((result: any) => {
      if (result.status === 200) {
        this.dataSource = result?.data.state?.map((e: any, index: Number) => {
          return {
            srno: `#Q00${index}`,
            stateName: e?.name,
          };
        });
        console.log('lh dndsdsd', result);
      }
    });
  };

  submitState = () => {
    this.stateService.addState(this.stateName).subscribe((result: any) => {
      if (result.status === 200) {
        this.toasterService.success(result.message);
        this.getAllStates();
      }
    });
  };
}
