import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { OwnershipService } from '../../Services/ownership.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ownership',
  templateUrl: './ownership.component.html',
  styleUrls: ['./ownership.component.scss'],
})
export class OwnershipComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['srno', 'ownership', 'actions'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource: any;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private ownershipService: OwnershipService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllOwnershipTypes();
  }

  ownershipType: string | null = null;

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
        this.deleteOwnership(id).subscribe((result: any) => {
          if (result.status === 200) {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            this.getAllOwnershipTypes();
          }
        });
      }
    });
  }

  getAllOwnershipTypes = async () => {
    this.ownershipService.getAllOwnership().subscribe((result: any) => {
      if (result.status === 200) {
        this.dataSource = result.data.map((e: any, index: Number) => ({
          id: e._id,
          ownership: e.owner,
          srno: index,
        }));
      }
    });
  };

  submitOwnershipType = () => {
    this.ownershipService
      .addOwnership({ owner: this.ownershipType })
      .subscribe((result: any) => {
        if (result.status === 200) {
          this.toastrService.success(result.message);
          this.getAllOwnershipTypes();
        }
      });
  };

  deleteOwnership = (id: string) => {
    return this.ownershipService.deleteOwnership(id);
  };
}
