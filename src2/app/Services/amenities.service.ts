import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl, headers } from '../Util/Util';

@Injectable({
  providedIn: 'root',
})
export class AmenitiesService {
  constructor(private httpClient: HttpClient) {}

  getAllAnemities = () => {
    return this.httpClient.get(`${apiUrl}/admin/getAllAnemities`, {
      headers: headers,
    });
  };

  addAmenity = (anemity: string, anemityType: string) => {
    return this.httpClient.post(
      `${apiUrl}/admin/addAnemities`,
      {
        name: anemity,
        anemityType: anemityType,
      },
      {
        headers: headers,
      }
    );
  };
}
