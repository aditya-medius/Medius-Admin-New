import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiUrl } from './Util/Util';
import { AuthService, Environment } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }
  title = 'Angular-App';

  isLoggedIn: Boolean = false
  _envName: string = ""
  _environments: Array<Environment> = []

  get environments(): Array<Environment> {
    return this._environments
  }

  set environments(value: Array<Environment>) {
    this._environments = value
  }

  get envName(): string {
    return this._envName
  }

  set envName(value: string) {
    this._envName = value
  }

  ngOnInit(): void {
    this.authService.isLoggedin.subscribe((isLoggedIn: Boolean) => this.isLoggedIn = isLoggedIn)
    this.authService.environment.subscribe((env: string) => this.envName = env)
    this.authService.environments.subscribe((envs: Array<Environment>) => this.environments = envs)
  }

  logout(): void {
    localStorage.removeItem('admin');
    this.router.navigate(['/auth']);
    window.location.reload();
  }

  onEnvChange = (url: string) => {
    localStorage.setItem('apiUrl', url);
    localStorage.removeItem('admin');
    this.router.navigate(['/auth']);
    window.location.reload();
  };
  public localUrl: string = apiUrl;
}
