import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { ModeOfPaymentService } from '../../Services/modeofPayment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mode-of-payment',
  templateUrl: './mode-of-payment.component.html',
  styleUrls: ['./mode-of-payment.component.scss'],
})
export class ModeOfPaymentComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['srno', 'feename', 'amount', 'actions'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource: any;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private modeOfPaymentService: ModeOfPaymentService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    // this.dataSource = [
    //   { srno: '#Q001', feename: 'Convenience Fee', amount: 10 },
    //   { srno: '#Q002', feename: 'Normal Fee', amount: 20 },
    //   { srno: '#Q003', feename: 'Test Fee', amount: 30 },
    //   { srno: '#Q004', feename: 'Hospital Fee', amount: 40 },
    // ];
    this.getAllFees();
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

  getAllFees = () => {
    this.modeOfPaymentService.getAllFees().subscribe((result: any) => {
      if (result.status === 200) {
        this.dataSource = result.data.map((e: any, index: Number) => ({
          srno: index,
          feename: e.name,
          amount: e.feeAmount,
          id: e._id,
        }));
      }
    });
  };

  newFeeName: string = '';
  newFeeAmount: Number = 0;
  newFeeId: string = '';

  setNewFeeId = (id: string, name: string, amount: Number) => {
    this.newFeeId = id;
    this.newFeeName = name;
    this.newFeeAmount = amount;
  };

  editFee = () => {
    console.log(':jdhdsndsd', this.newFeeAmount);
    if (!(this.newFeeAmount || this.newFeeId || this.newFeeName)) {
      this.toastrService.error('Enter proper values');
      return;
    }
    console.log(':udsfdsv', this.newFeeAmount);
    this.modeOfPaymentService
      .editFee(this.newFeeId, this.newFeeName, this.newFeeAmount)
      .subscribe((result: any) => {
        console.log('rvddd', result);
        if (result.status === 200) {
          this.toastrService.success('Sucess');
          this.getAllFees();
        }
      });
  };
}

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
//   { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
//   { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
//   { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
//   { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
//   { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
//   { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
//   { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
//   { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
//   { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
//   { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
// ];
