import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { DoctorComponent } from './doctor/doctor.component';
import { UserComponent } from './user/user.component';
import { ServiceComponent } from './service/service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule}from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { SpecialityComponent } from './speciality/speciality.component';
import { QualificationComponent } from './qualification/qualification.component';
import { LocationComponent } from './location/location.component';

import { ModeOfPaymentComponent } from './mode-of-payment/mode-of-payment.component';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AmenitiesComponent } from './amenities/amenities.component';
import { OwnershipComponent } from './ownership/ownership.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';



@NgModule({
  declarations: [
    AppComponent,
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
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
