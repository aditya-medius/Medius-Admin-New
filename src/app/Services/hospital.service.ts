import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { apiUrl, hospitalInterceptor } from '../Util/Util';

@Injectable({
  providedIn: 'root',
})
export class HospitalService {
  constructor(private http: HttpClient) {}

  getAllHospitals = () => {
    return this.http
      .get(`${apiUrl}/admin/getAllHospitalList`)
      // .pipe(map(hospitalInterceptor));
  };

  verifyHospital = (id: string) => {
    return this.http.put(`${apiUrl}/admin/verifyHospital/${id}`, {});
  };
}
