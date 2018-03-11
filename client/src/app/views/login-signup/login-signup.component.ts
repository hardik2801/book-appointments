import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { MomentModule } from 'angular2-moment';
import { MomentTimezoneModule } from 'angular-moment-timezone';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  currentRoute; loading; timezone; placeholderString;
  email_ip; password_ip; name_ip; resp;
  constructor(public _router: Router, private apiService: ApiService, public toastr: ToastsManager, vcr: ViewContainerRef,
    private moment: MomentModule) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  navigate(route) {
    if (route === 'signup') {
      this.currentRoute = 'signup';
      // this._router.navigate(['/login?signup=' + true]);
    } else {
      this.currentRoute = 'login';
    }
  }

  login() {
    if (this.email_ip && this.password_ip) {
      this.loading = true;
      this.apiService.login(this.email_ip, this.password_ip).subscribe((response) => {
        this.resp = response;
      }, (error) => {
        console.log('Error :: ' + error);
      },
        () => {
          this.loading = false;
          if (!this.resp.status) {
            this.toastr.error(this.resp.message);
          } else if (this.resp.status) {
            // console.log(this.resp);
            localStorage.setItem('jwtToken', this.resp.data.token);
            this._router.navigate(['my-schedules/' + this.resp.data.user._id]);
          }
        });
    } else {
      this.toastr.error('Please enter email and password!');
    }
  }

  changeTimezone(timezone) {
    console.log(timezone, 'timezone changed');
    this.timezone = timezone;
  }

  signup() {
    if (!this.timezone) {
      this.toastr.error('Please select your timezone!');
      return;
    }
    if (this.email_ip && this.password_ip) {
      this.loading = true;
      this.apiService.signup(this.email_ip, this.password_ip, this.name_ip, this.timezone).subscribe((response) => {
        this.resp = response;
      }, (error) => {
        console.log('Error :: ' + error);
      },
        () => {
          this.loading = false;
          console.log(this.resp);
          if (!this.resp.status) {
            this.toastr.error(this.resp.message);
          } else if (this.resp.status) {
            this.toastr.success('New User Created');
            this.email_ip = '';
            this.password_ip = '';
            this.currentRoute = 'login';
            // this._router.navigate(['my-schedules']);
          }
        });
    } else {
      this.toastr.error('Please enter email and password!');
    }
  }

  ngOnInit() {

    this.loading = false;
    this.currentRoute = 'login';
    this.email_ip = '';
    this.password_ip = '';
    this.timezone = null;
    this.placeholderString = 'Select timezone';
  }
}
