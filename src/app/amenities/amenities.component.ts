import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AmenitiesService } from '../Services/amenities.service';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.scss'],
})
export class AmenitiesComponent implements OnInit {
  constructor(
    private amenitiesServices: AmenitiesService,
    private fb: FormBuilder,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllAmenities();
  }

  amenityForm = this.fb.group({
    amenity: ['', Validators.required],
    isPrimary: ['', Validators.required],
  });

  amenitiesArray: Array<any> | null = null;
  amenityName: string | null = null;

  getAllAmenities = () => {
    this.amenitiesServices.getAllAnemities().subscribe((result: any) => {
      this.amenitiesArray = result.data;
    });
  };

  addAmenity = () => {
    if (!this.amenityForm.valid) {
      this.toastrService.error('Enter proper values');
      return;
    }

    let { amenity, isPrimary } = this.amenityForm.value,
      type;
    if (isPrimary) {
      type = 'Primary';
    } else {
      type = 'Secondary';
    }

    this.amenitiesServices
      .addAmenity(amenity, type)
      .subscribe((result: any) => {
        this.toastrService.success(result.message);
        this.getAllAmenities();
      });
  };
}
