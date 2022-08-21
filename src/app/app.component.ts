import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { apiUrl } from './Util/Util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.login();
  }
  title = 'Angular-App';

  ngOnInit(): void {
    // this.login();
  }
  login = () => {
    let url: string = `${apiUrl}/admin/login?phoneNumber=8826332442&password=123456`;
    return this.http.put(url, {}).subscribe((result: any) => {
      if (result.status == 200) {
        this.toastrService.success(`${result.message}`);
        localStorage.setItem('admin', JSON.stringify(result));
      } else if (result.status == 400) {
        if (result.type == 'JsonWebTokenError') {
          this.toastrService.error('Invalid OTP');
        }
        this.toastrService.error(result.message);
      }
    });
  };
}
