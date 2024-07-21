import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Result } from '../Util/Util';
import { apiUrl, headers } from '../Util/Util';

export class CommonService {

  apiUrl: string = apiUrl
  headers: HttpHeaders = headers

  constructor() { }

  mapRecords = (record: any): Result => {
    return { data: record?.data, status: record?.status, message: record.message }
  }
}
