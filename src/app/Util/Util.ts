import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const apiUrl = environment.apiUrl;
export const token = JSON.parse(localStorage.getItem('admin') as string).data;
export const headers = new HttpHeaders({
  'auth-header': token,
});
