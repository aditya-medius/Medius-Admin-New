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
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { SpecialityComponent } from './speciality/speciality.component';
import { QualificationComponent } from './qualification/qualification.component';
import { LocationComponent } from './location/location.component';

import { ModeOfPaymentComponent } from './mode-of-payment/mode-of-payment.component';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AmenitiesComponent } from './amenities/amenities.component';
import { OwnershipComponent } from './ownership/ownership.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ImagePipe } from './Pipes/image.pipe';

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
    ImagePipe,
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
    MatSlideToggleModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
