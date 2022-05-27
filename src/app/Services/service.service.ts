import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { apiUrl, token } from '../Util/Util';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private httpClient: HttpClient) {}

  getAllServices = () => {
    return this.httpClient.get(
      `${apiUrl}/admin/getListOfSpecialityBodyPartAndDisease`
    );
  };

  addSpeciality = (specialityName: string) => {
    return this.httpClient.post(`${apiUrl}/admin/addSpeciality`, {
      specialityName,
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
}
