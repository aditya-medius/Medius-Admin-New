import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  constructor(
    private service: ServiceService,
    private toastrService: ToastrService,
    private fb: FormBuilder
  ) {}

  speciality: Array<any> | null = null;
  serviceName: string | null = null;

  ngOnInit(): void {
    this.getAllServices();
  }

  serviceForm = this.fb.group({
    name: ['', Validators.required],
    serviceType: ['', Validators.required],
  });

  getAllServices = () => {
    this.service.getServices().subscribe((result: any) => {
      this.speciality = result.data;
    });
  };

  submitService = () => {
    if (!this.serviceForm.valid) {
      this.toastrService.error('Enter proper values');
      return;
    }
    let { name, serviceType } = this.serviceForm.value;
    let type = serviceType ? 'Primary' : 'Secondary';
    this.service.addService(name, type).subscribe((result: any) => {
      if (result.status === 400) {
        this.toastrService.error(result.message);
      } else {
        this.toastrService.success(result.message);
        this.serviceForm.reset();
        this.getAllServices();
      }
    });
  };
}
