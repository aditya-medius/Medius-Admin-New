import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl, headers } from '../Util/Util';

@Injectable({
  providedIn: 'root',
})
export class SpecialityService {
  constructor(private http: HttpClient) {}

  getServices = () => {
    return this.http.get(
      `${apiUrl}/admin/getListOfSpecialityBodyPartAndDisease`,
      {
        headers: headers,
      }
    );
  };
  addServices = () => {};
}
