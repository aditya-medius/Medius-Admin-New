import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { apiUrl, token } from '../Util/Util';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private headers: HttpHeaders | null = null;
  constructor(private httpClient: HttpClient) {
    const headers = new HttpHeaders({
      'auth-header': token,
    });
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Accept', 'application/json');
    this.headers = headers;
  }

  getAllServices = () => {
    return this.httpClient.get(
      `${apiUrl}/admin/getListOfSpecialityBodyPartAndDisease`
    );
  };

  addSpeciality = (specialityName: string, image: string = '') => {
    return this.httpClient.post(`${apiUrl}/admin/addSpeciality`, {
      specialityName,
      image,
    });
  };

  uploadServiceImage = (form: FormData) => {
    const headers = new HttpHeaders({
      'auth-header': token,
    });
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Accept', 'application/json');
    return this.httpClient.post(`${apiUrl}/common/uploadImage`, form, {
      headers: headers,
    });
  };

  getServices = () => {
    return this.httpClient.get(`${apiUrl}/hospital/getServices`, {});
  };

  addService = (name: string, serviceType: string) => {
    return this.httpClient.post(`${apiUrl}/admin/addHospitalService`, {
      name,
      serviceType,
    });
  };

  deleteService = (_id: string) => {
    return this.httpClient.post(
      `${apiUrl}/admin/deleteHospitalService/${_id}`,
      {},
      { headers: this.headers }
    );
  };
}
