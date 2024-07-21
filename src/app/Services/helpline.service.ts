import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Result } from '../Util/Util';

@Injectable({
  providedIn: 'root'
})
export class HelplineService extends CommonService {

  constructor(private httpClient: HttpClient) {
    super()

  }

  getAllHelplineNumbers = (): Observable<Result> => {
    return this.httpClient.get(`${this.apiUrl}/admin/helplineNumber`, { headers: this.headers }).pipe(map(this.mapRecords))
  }

  addHelplineNumber = (number: string): Observable<Result> => {
    return this.httpClient.post(`${this.apiUrl}/admin/helplineNumber`, { number }, { headers: this.headers }).pipe(map(this.mapRecords))
  }
}
