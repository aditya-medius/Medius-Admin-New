import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { AppointmentComponent } from './appointment/appointment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { ModeOfPaymentComponent } from './mode-of-payment/mode-of-payment.component';
import { QualificationComponent } from './qualification/qualification.component';
import { ServiceComponent } from './service/service.component';
import { SpecialityComponent } from './speciality/speciality.component';
import { UserComponent } from './user/user.component';
import { LocationComponent } from './location/location.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { PatientsComponent } from './patients/patients.component';
import { SuvidhaKendraComponent } from './suvidha-kendra/suvidha-kendra.component';
import { HospitalsViewComponent } from './hospitals-view/hospitals-view.component';
import { DoctorViewComponent } from './doctor-view/doctor-view.component';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { SuvidhaKendraViewComponent } from './suvidha-kendra-view/suvidha-kendra-view.component';
import { OwnershipComponent } from './ownership/ownership.component';
import { SidenavComponent } from './sidenav/sidenav.component';
// import { ImagePipe } from '../Pipes/image.pipe';
import { MainComponent } from './main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelplineComponent } from './helpline/helpline.component'

@NgModule({
  declarations: [
    DashboardComponent,
    AppointmentComponent,
    HospitalsComponent,
    DoctorComponent,
    UserComponent,
    ServiceComponent,
    SidenavComponent,
    SpecialityComponent,
    QualificationComponent,
    LocationComponent,
    ModeOfPaymentComponent,
    AmenitiesComponent,
    OwnershipComponent,
    StateComponent,
    CityComponent,
    // ImagePipe,
    PatientsComponent,
    SuvidhaKendraComponent,
    HospitalsViewComponent,
    DoctorViewComponent,
    PatientViewComponent,
    SuvidhaKendraViewComponent,
    MainComponent,
    HelplineComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
