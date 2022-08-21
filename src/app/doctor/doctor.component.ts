import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from '../Services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit {
  constructor(
    private doctorService: DoctorService,
    private toastrService: ToastrService
  ) {}

  doctorList: Array<any> | null = null;
  ngOnInit(): void {
    this.getAllDoctors();
  }
  getAllDoctors = () => {
    this.doctorService.getAllDoctorsList().subscribe((result: any) => {
      if (result.status === 200) {
        this.doctorList = result.data;
      } else {
        this.toastrService.error(result.message);
      }
    });
  };

  toggleVerify = (id: string) => {
    this.doctorService.verifyDoctor(id).subscribe((result: any) => {
      if (result.status === 200) {
        this.toastrService.success(result.message);
        this.getAllDoctors();
      } else {
        this.toastrService.error(result.message);
      }
    });
  };
}
