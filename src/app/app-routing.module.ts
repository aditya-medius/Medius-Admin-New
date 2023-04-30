import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { compileClassMetadata } from '@angular/compiler';
<<<<<<< Updated upstream
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { PatientsComponent } from './patients/patients.component';
import { SuvidhaKendraComponent } from './suvidha-kendra/suvidha-kendra.component';
import { HospitalsViewComponent } from './hospitals-view/hospitals-view.component';
import { DoctorViewComponent } from './doctor-view/doctor-view.component';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { SuvidhaKendraViewComponent } from './suvidha-kendra-view/suvidha-kendra-view.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },

  { path: 'appointment', component: AppointmentComponent },
  { path: 'hospital', component: HospitalsComponent },

  { path: 'doctor', component: DoctorComponent },

  { path: 'user', component: UserComponent },
  { path: 'patients', component: PatientsComponent },
  {
    path: 'services',
    component: ServiceComponent,
  },

  { path: 'speciality', component: SpecialityComponent },
  { path: 'qualification', component: QualificationComponent },
  { path: 'location', component: LocationComponent },

  { path: 'payment', component: ModeOfPaymentComponent },
  {
    path: 'amenities',
    component: AmenitiesComponent,
  },

  {
    path: 'Ownership',
    component: OwnershipComponent,
  },
  {
    path: 'state',
    component: StateComponent,
  },
  {
    path: 'city',
    component: CityComponent,
  },
  {
    path: 'suvidha-kendra',
    component: SuvidhaKendraComponent,
  },
  {
    path: 'hospital-view',
    component: HospitalsViewComponent,
  },
  {
    path: 'doctor-view',
    component: DoctorViewComponent,
  },
  {
    path: 'patient-view',
    component: PatientViewComponent,
  },
  {
    path: 'suvidha-kendra-view',
    component: SuvidhaKendraViewComponent,
  },
=======
import { LoginComponent } from './login/login';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'main', loadChildren: () => import ('./main/main.module').then(m => m.MainModule) },
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
