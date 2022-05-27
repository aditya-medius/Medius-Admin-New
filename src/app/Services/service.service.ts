import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { apiUrl } from '../Util/Util';

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
}
