import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl, headers } from '../Util/Util';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login = (phoneNumber: string, password: string) => {
    return this.httpClient.put(
      `${apiUrl}/admin/login?phoneNumber=${phoneNumber}&password=${password}`,
      {},
      {
        headers: headers,
      }
    );
  };
}
