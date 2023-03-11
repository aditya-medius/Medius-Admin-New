import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { apiUrl, headers, hospitalInterceptor } from '../Util/Util';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor(private http: HttpClient) {}

  addState = (name: string) => {
    return this.http.post(
      `${apiUrl}/admin/state`,
      { name },
      {
        headers: headers,
      }
    );
  };

  getCityStateLocalityCountry = () => {
    return this.http.get(`${apiUrl}/admin/getCityStateLocalityCountry`, {
      headers,
    });
  };
}
