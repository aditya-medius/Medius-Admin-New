import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HospitalService } from '../Services/hospital.service';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss'],
})
export class HospitalsComponent implements OnInit {
  constructor(
    private hospitalService: HospitalService,
    private toastrService: ToastrService
  ) {}

  hospitalList: Array<any> | null = null;
  ngOnInit(): void {
    this.getAllHospitals();
  }

  getAllHospitals = () => {
    this.hospitalService.getAllHospitals().subscribe((result: any) => {
      if (result.status === 200) {
        this.hospitalList = result.data;
        this.toastrService.success(result.message);
      } else {
        this.toastrService.error(result.message);
      }
    });
  };

  toggleVerify = (id: string) => {
    this.hospitalService.verifyHospital(id).subscribe((result: any) => {
      if (result.status === 200) {
        this.toastrService.success(result.message);
        this.getAllHospitals();
      } else {
        this.toastrService.error(result.message);
      }
    });
  };
}
