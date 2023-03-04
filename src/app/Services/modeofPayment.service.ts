import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl, headers } from '../Util/Util';

@Injectable({
  providedIn: 'root',
})
export class ModeOfPaymentService {
  constructor(private httpClient: HttpClient) {}

  getAllFees = () => {
    return this.httpClient.get(`${apiUrl}/admin/getFees`, { headers });
  };
}
