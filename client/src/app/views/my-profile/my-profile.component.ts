import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { RouterStateParamsService } from 'ng-router-state-params';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  timezone; placeholderString; showtzSelector; userId; resp; loading;
  name; email;
  constructor(public routerStateParamsService: RouterStateParamsService, private apiService: ApiService,
    public toastr: ToastsManager, vcr: ViewContainerRef, public _router: Router) {
      this.toastr.setRootViewContainerRef(vcr);
     }

  changeTimezone(timezone) {
    this.showtzSelector = false;
    this.timezone = timezone;
  }
  updateTimezone() {
    this.showtzSelector = true;
  }

  getUserData(userId) {
    this.apiService.getUser(userId).subscribe((response) => {
      this.resp = response;
    }, (error) => {
      console.log('Error :: ' + error);
    },
      () => {
        this.loading = false;
        console.log(this.resp);
        if (!this.resp.status) {
          this.toastr.error(this.resp.message);
          this._router.navigate(['login/']);
        } else if (this.resp.status) {
          this.timezone = this.resp.data.timezone;
          this.name = this.resp.data.name;
        }
      });
  }

  ngOnInit() {
    this.userId = this.routerStateParamsService.getParams().source.value.id;
    this.timezone = null;
    this.placeholderString = 'Select timezone';
    this.showtzSelector = false;
    this.loading = true;
    this.name = null;
    this.email = null;
    this.getUserData(this.userId);
  }

}
