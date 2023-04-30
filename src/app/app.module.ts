import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
<<<<<<< Updated upstream
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ImagePipe } from './Pipes/image.pipe';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { PatientsComponent } from './patients/patients.component';
import { SuvidhaKendraComponent } from './suvidha-kendra/suvidha-kendra.component';
import { HospitalsViewComponent } from './hospitals-view/hospitals-view.component';
import { DoctorViewComponent } from './doctor-view/doctor-view.component';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { SuvidhaKendraViewComponent } from './suvidha-kendra-view/suvidha-kendra-view.component';
import {MatTabsModule} from '@angular/material/tabs';
=======
import { MatTabsModule } from '@angular/material/tabs';
>>>>>>> Stashed changes
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
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
    PatientsComponent,
    SuvidhaKendraComponent,
    HospitalsViewComponent,
    DoctorViewComponent,
    PatientViewComponent,
    SuvidhaKendraViewComponent,
=======
    LoginComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatTabsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
