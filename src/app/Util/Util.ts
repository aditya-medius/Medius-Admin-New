import { environment } from '../../environments/environment';

export const apiUrl = environment.apiUrl;

export const token = JSON.parse(localStorage.getItem('admin') as string).data;
