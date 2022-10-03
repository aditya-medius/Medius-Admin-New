import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl, headers } from '../Util/Util';

@Injectable({
  providedIn: 'root',
})
export class QualificationService {
  constructor(private httpClient: HttpClient) {}

  getQualificationList = () => {
    return this.httpClient.get(`${apiUrl}/admin/getQualificationList`, {
      headers: headers,
    });
  };

  addQualification = (name: string, abbreviation: string) => {
    return this.httpClient.post(
      `${apiUrl}/admin/addQualificationName`,
      { name, abbreviation },
      {
        headers: headers,
      }
    );
  };
}
