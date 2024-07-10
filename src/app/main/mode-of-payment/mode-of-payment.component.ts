import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { ModeOfPaymentService } from '../../Services/modeofPayment.service';
import { ToastrService } from 'ngx-toastr';
import { Fee } from 'src/app/Model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mode-of-payment',
  templateUrl: './mode-of-payment.component.html',
  styleUrls: ['./mode-of-payment.component.scss'],
})
export class ModeOfPaymentComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['srno', 'feename', 'amount', 'actions'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource: Array<Fee> = []

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private modeOfPaymentService: ModeOfPaymentService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
  ) { }

  feeForm = this.formBuilder.group({
    name: new FormControl("", Validators.required),
    feeAmount: new FormControl(0, Validators.required)
  });


  ngOnInit(): void {
    this.getAllFees();
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() { }

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
    if (!(this.newFeeAmount || this.newFeeId || this.newFeeName)) {
      this.toastrService.error('Enter proper values');
      return;
    }
    this.modeOfPaymentService
      .editFee(this.newFeeId, this.newFeeName, this.newFeeAmount)
      .subscribe((result: any) => {
        if (result.status === 200) {
          this.toastrService.success('Sucess');
          this.getAllFees();
        }
      });
  };

  createFee(): void {
    if (!this.feeForm.valid) {
      this.toastrService.error("Invalid Values")
      return;
    }
    const { name, feeAmount } = this.feeForm.value
    this.modeOfPaymentService.createFee(name, feeAmount).subscribe((result: any) => {
      if (result.status === 200) {
        this.toastrService.success('Sucess');
        this.getAllFees();
        this.feeForm.reset()
      }
    })
  }
}