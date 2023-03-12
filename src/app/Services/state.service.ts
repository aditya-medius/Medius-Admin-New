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

  addCity = (city_state: string, name: string) => {
    return this.http.post(
      `${apiUrl}/admin/city`,
      { city_state, name },
      {
        headers,
      }
    );
  };

  getCityStateLocalityCountry = (region: string | null = null) => {
    return this.http.get(
      `${apiUrl}/admin/getCityStateLocalityCountry?${
        region && `region=${region}`
      }`,
      {
        headers,
      }
    );
  };
}
