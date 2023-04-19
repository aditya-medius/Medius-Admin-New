import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl, headers } from '../Util/Util';

@Injectable({
  providedIn: 'root',
})
export class OwnershipService {
  constructor(private httpClient: HttpClient) {}

  getAllOwnership = () => {
    return this.httpClient.get(`${apiUrl}/admin/getOwnership`, {
      headers: headers,
    });
  };

  addOwnership = (obj: { owner: string }) => {
    return this.httpClient.post(`${apiUrl}/admin/addOwnership`, obj, {
      headers: headers,
    });
  };

  deleteOwnership = (id: string) => {
    return this.httpClient.post(
      `${apiUrl}/admin/deleteOwnership/${id}`,
      {},
      {
        headers,
      }
    );
  };
}
