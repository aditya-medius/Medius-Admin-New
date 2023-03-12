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

  addLocality = (locality_city: string, name: string = '') => {
    return this.http.post(
      `${apiUrl}/admin/locality`,
      {
        locality_city,
        name,
      },
      {
        headers,
      }
    );
  };

  getCityStateLocalityCountry = (
    region: string | null = null,
    page: Number = 0,
    limit: Number = 20
  ) => {
    return this.http.get(
      `${apiUrl}/admin/getCityStateLocalityCountry?${
        region && `region=${region}&page=${page}&limit=${limit}`
      }`,
      {
        headers,
      }
    );
  };

  getCityByState = (stateId: string = '') => {
    return this.http.post(
      `${apiUrl}/admin/getCityByState`,
      {
        state: stateId,
      },
      {
        headers,
      }
    );
  };
}
