import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { Component } from '@angular/core';
import { OwnershipComponent } from './ownership/ownership.component';
import { compileClassMetadata } from '@angular/compiler';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  {path :"dashboard", 
  component :DashboardComponent
},

  {path :"appointment", 
  component :AppointmentComponent
},
  {path :"hospital", 
  component :HospitalsComponent
},

  {path :"doctor", 
  component :DoctorComponent
},

  {path :"user", 
  component :UserComponent
},
  {
    path :'services',
   component :ServiceComponent
  },

  {path :'speciality', 
  component :SpecialityComponent
},
  {path :'qualification', 
  component :QualificationComponent
},
  {path :'location', 
  component :LocationComponent
},

  {path :'payment', 
  component :ModeOfPaymentComponent
},
{
  path :'amenities',
  component:AmenitiesComponent
},

{
  path : 'Ownership',
  component:OwnershipComponent
},
{
  path: 'state',
  component: StateComponent
},
{
  path:'city',
  component: CityComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
