import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { apiUrl, headers, hospitalInterceptor } from '../Util/Util';

@Injectable({
  providedIn: 'root',
})
export class SuvidhaService {
  constructor(private http: HttpClient) {}

  getAllSuvidhaUsers = () => {
    return this.http.get(`${apiUrl}/admin/getAllSuvedhaList`, {
      headers,
    });
  };
}
