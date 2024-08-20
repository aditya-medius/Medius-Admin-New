import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { apiUrl } from './Util/Util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient,
    private toastrService: ToastrService
  ) {
    // this.login();
  }
  title = 'Angular-App';

  ngOnInit(): void {
    // this.login();
  }

  onEnvChange = (url: string) => {
    localStorage.setItem('apiUrl', url);
    localStorage.removeItem('admin');
    this.router.navigate(['/auth']);
    window.location.reload();
  };
  public localUrl: string = apiUrl;
}
