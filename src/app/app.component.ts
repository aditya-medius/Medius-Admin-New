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

  // onEnvChange = (url: string) => {
  //   localStorage.setItem('apiUrl', url);
  //   window.location.reload();
  // };

  // public localUrl: string = apiUrl;
  // login = () => {
  //   let url: string = `${apiUrl}/admin/login?phoneNumber=8826332442&password=123456`;
  //   return this.http.put(url, {}).subscribe((result: any) => {
  //     if (result.status == 200) {
  //       this.toastrService.success(`${result.message}`);
  //       localStorage.setItem('admin', JSON.stringify(result.data));
  //     } else if (result.status == 400) {
  //       if (result.type == 'JsonWebTokenError') {
  //         this.toastrService.error('Invalid OTP');
  //       }
  //       this.toastrService.error(result.message);
  //     }
  //   });
  // };

  onEnvChange = (url: string) => {
    localStorage.setItem('apiUrl', url);
    localStorage.removeItem('admin');
    this.router.navigate(['/auth']);
    // window.location.reload();
  };
  public localUrl: string = apiUrl;
}
