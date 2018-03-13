import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { RouterStateParamsService } from 'ng-router-state-params';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import * as moment from 'moment';
import 'moment-timezone';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  timezone; placeholderString; showtzSelector; userId; resp; loading;
  name; email; loggedIn; reservations;
  constructor(public routerStateParamsService: RouterStateParamsService, private apiService: ApiService,
    public toastr: ToastsManager, vcr: ViewContainerRef, public _router: Router) {
      this.toastr.setRootViewContainerRef(vcr);
     }

  changeTimezone(timezone) {
    // this.showtzSelector = false;
    this.timezone = timezone;
  }
  updateTimezone() {
    this.showtzSelector = true;
  }

  saveTimezone() {
    this.showtzSelector = false;
    this.apiService.updateTZ(this.userId, this.timezone).subscribe((response) => {
      this.resp = response;
    }, (error) => {
      console.log('Error :: ' + error);
    },
      () => {
        console.log(this.resp);
        if (!this.resp.status) {
          this.toastr.error(this.resp.message);
          this.getUserData(this.userId);
        } else if (this.resp.status) {
          this.toastr.success('Timezone updated successfully');
          this.timezone = this.resp.data.timezone;
        }
      });
  }

  getUserData(userId) {
    this.apiService.getUser(userId).subscribe((response) => {
      this.resp = response;
    }, (error) => {
      console.log('Error :: ' + error);
    },
      () => {
        this.loading = false;
        // console.log(this.resp);
        const mainScope = this;
        if (!this.resp.status) {
          this.toastr.error(this.resp.message);
          this._router.navigate(['login/']);
        } else if (this.resp.status) {
          this.timezone = this.resp.data.timezone;
          if (this.timezone === 'Asia/Calcutta') { // doing this due to discrepancy in npm module and moment js
            this.timezone = 'Asia/Kolkata';
          }
          this.name = this.resp.data.name;
          this.resp.data.reservations.forEach(function(item) {
            item.time = moment(item.time).tz(mainScope.timezone).format('MMM Do YYYY hA');
          });
          this.reservations = this.resp.data.reservations;
        }
      });
  }

  ngOnInit() {
    this.userId = this.routerStateParamsService.getParams().source.value.id;
    // this.timezone = null;
    this.placeholderString = 'Select timezone';
    this.showtzSelector = false;
    this.loading = true;
    this.name = null;
    this.email = null;
    this.reservations = [];
    this.getUserData(this.userId);
    this.loggedIn = localStorage.getItem('userId');
    if (this.loggedIn !== this.userId) {
      this._router.navigate(['book-slot/' + this.userId]);
    }
  }

}
