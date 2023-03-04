import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { apiUrl, doctorInterceptor, headers } from '../Util/Util';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  constructor(private http: HttpClient) {}

  getAllDoctorsList = () => {
    return this.http
      .get(`${apiUrl}/admin/getAllDoctorsList`, { headers: headers })
      // .pipe(map(doctorInterceptor));
  };

  verifyDoctor = (id: string) => {
    return this.http.put(`${apiUrl}/admin/verifyDoctors/${id}`, {});
  };
}
