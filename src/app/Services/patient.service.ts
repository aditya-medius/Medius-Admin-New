import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { apiUrl, headers, patientInterceptor } from '../Util/Util';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}

  getAllPatientList = () => {
    return this.http.get(`${apiUrl}/admin/getAllPatientList`);
  };
}
