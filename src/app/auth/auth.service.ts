import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl, headers } from '../Util/Util';
import { BehaviorSubject, Observable } from 'rxjs';
import { env } from 'process';


export interface Environment {
  name: string,
  url: string,
  selected?: boolean
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {
    this._environments.forEach((env: Environment) => {
      if (apiUrl === env.url) {
        env.selected = true
        this.setEnvironment(env.name)
      }
    })
    this.setEnvironments(this._environments)
  }

  private _environments: Array<Environment> = [
    { name: "Local", url: "http://localhost:3000" },
    { name: "Production", url: "http://13.235.135.237:3000" },
    { name: "Testing", url: "http://15.207.210.44:3000" },
  ]

  private _isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private _isLoggedIn: Observable<boolean> = this._isLoggedInSubject.asObservable();

  private _environmentSubject: BehaviorSubject<string> = new BehaviorSubject<string>("")
  private _environment: Observable<string> = this._environmentSubject.asObservable();

  private _environmentsSubject: BehaviorSubject<Array<Environment>> = new BehaviorSubject<Array<Environment>>(this._environments)
  private _environments$: Observable<Array<Environment>> = this._environmentsSubject.asObservable();


  public get environments(): Observable<Array<Environment>> {
    return this._environments$
  }

  public setEnvironments(value: Array<Environment>) {
    this._environmentsSubject.next(value)
  }

  public get environment() {
    return this._environment
  }

  public setEnvironment(value: string) {
    this._environmentSubject.next(value)
  }

  public get isLoggedin() {
    return this._isLoggedIn
  }

  public setIsLoggedIn(value: boolean) {
    this._isLoggedInSubject.next(value)
  }


  login = (phoneNumber: string, password: string) => {
    const envName = this._environments.find((env: Environment) => env.url === apiUrl).name
    this.setEnvironment(envName);

    return this.httpClient.put(
      `${apiUrl}/admin/login?phoneNumber=${phoneNumber}&password=${password}`,
      {},
      {
        headers: headers,
      }
    );
  };

}
