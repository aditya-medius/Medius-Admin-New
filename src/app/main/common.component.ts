import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
// import { UntypedFormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import Swal from 'sweetalert2';

interface Edit {
    data: any
}

export class CommonComponent {
    displayedColumns: string[];
    dataSource: any;
    toastrService: ToastrService;

    constructor(toastrService: ToastrService, _liveAnnouncer: LiveAnnouncer) {
        this.toastrService = toastrService
    }

    announceSortChange(sortState: Sort) {

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
                this.deleteRecord(id);
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    }

    showSuccessToaster = (message: string) => {
        this.toastrService.success(message)
    }

    public onSubmit: () => Promise<void>
    public editRecord: (id: string, values: Edit) => Promise<void>
    public deleteRecord: (id: string) => Promise<void>

}
