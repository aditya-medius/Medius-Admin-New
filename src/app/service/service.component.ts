import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  constructor(private service: ServiceService) {}

  speciality: Array<any> | null = null;
  serviceName: string | null = null;

  ngOnInit(): void {
    this.getAllServices();
  }

  getAllServices = () => {
    this.service.getAllServices().subscribe((result: any) => {
      this.speciality = result.data['Speciality'];
    });
  };

  submitService = () => {
    this.service
      .addSpeciality(this.serviceName as string)
      .subscribe((result: any) => {
        console.log('result', result);
        this.serviceName = null;
        this.getAllServices();
      });
  };
}
