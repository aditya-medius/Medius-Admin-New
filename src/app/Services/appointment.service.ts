import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { apiUrl, doctorInterceptor, headers } from '../Util/Util';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {}

  getAllAppointments = () => {
    return this.http.get(`${apiUrl}/admin/getAllAppointments`, {
      headers,
    });
  };
}
