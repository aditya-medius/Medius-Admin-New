import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { QualificationService } from '../Services/qualification.service';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
})
export class QualificationComponent implements OnInit {
  constructor(
    private qualificationService: QualificationService,
    private fb: FormBuilder,
    private toastrService: ToastrService
  ) {}

  qualificationForm = this.fb.group({
    name: ['', Validators.required],
    abbreviation: ['', Validators.required],
  });

  qualifications: Array<any> | null = null;
  ngOnInit(): void {
    this.getQualification();
  }

  getQualification = () => {
    this.qualificationService
      .getQualificationList()
      .subscribe((result: any) => {
        this.qualifications = result.data;
      });
  };

  submitQualification = () => {
    if (!this.qualificationForm.valid) {
      this.toastrService.error('Enter proper values');
      return;
    }

    let { name, abbreviation } = this.qualificationForm.value;
    this.qualificationService
      .addQualification(name, abbreviation)
      .subscribe((result: any) => {
        this.getQualification();
        this.toastrService.success(result.message);
        this.qualificationForm.reset();
      });
  };
}
