import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getStateList = () => {};
  getCityList = () => {};
  getLocationList = () => {};

  addState = () => {};
  addCity = () => {};
  addLocation = () => {};
}
