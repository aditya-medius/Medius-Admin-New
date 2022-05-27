import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.scss'],
})
export class SpecialityComponent implements OnInit {
  constructor(
    private service: ServiceService,
    private toastrService: ToastrService
  ) {}

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

  formData: FormData = new FormData();
  uploadSpecialization(fileToUpload: any) {
    fileToUpload = fileToUpload[0];
    (this.formData as FormData).append(
      'profileImage',
      fileToUpload,
      fileToUpload.name
    );
    (this.formData as FormData).append('user', 'specializations');
  }

  submitService = () => {
    if (!this.serviceName) {
      this.toastrService.error('Enter a service name');
      return;
    }
    this.service
      .addSpeciality(this.serviceName as string)
      .subscribe((result: any) => {
        if (result.statues === 400) {
          this.toastrService.error(result.message);
        } else {
          this.formData.append('userId', result.data._id);
          this.service
            .uploadServiceImage(this.formData as FormData)
            .subscribe((res: any) => {
              if (res.status === 200) {
                this.getAllServices();
                this.formData.delete('profileImage');
                this.formData.delete('user');
                this.formData.delete('userId');
                this.serviceName = null;
              } else {
                this.toastrService.error('Upload unsuccessful.');
              }
            });
          this.getAllServices();
        }
      });
  };
}
