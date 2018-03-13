import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { RouterStateParamsService } from 'ng-router-state-params';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ApiService } from '../../services/api.service';
// import { MomentModule } from 'angular2-moment';
// import { MomentTimezoneModule } from 'angular-moment-timezone';
import * as moment from 'moment';
import 'moment-timezone';

@Component({
  selector: 'app-book-slot',
  templateUrl: './book-slot.component.html',
  styleUrls: ['./book-slot.component.css']
})
export class BookSlotComponent implements OnInit {
  userId; loggedIn; resp; loading; timezone; name; selectedDate; selectedSlot;
  hours; loggedIn_name; reservations; preBookedSlots;

  constructor(public routerStateParamsService: RouterStateParamsService, public _router: Router,
    public toastr: ToastsManager, vcr: ViewContainerRef, private apiService: ApiService) {
    this.toastr.setRootViewContainerRef(vcr);
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
          this.reservations = this.resp.data.reservations;
        }
      });
  }

  setDate() {
    const mainScope = this;
    console.log(this.reservations);
    this.selectedDate = moment(this.selectedDate).tz(this.timezone).format();
    const dayReserv = this.reservations.filter(function (reservation) {
      reservation.time = new Date(reservation.time);
      reservation.time.setHours(0, 0, 0, 0);
      reservation.time = moment(reservation.time).tz(mainScope.timezone).format();
      return mainScope.selectedDate === reservation.time;
    });

    dayReserv.forEach(function(item) {
      const index = mainScope.reservations.findIndex(x => x._id === item._id);
      if (index > -1) {
        item.time = mainScope.reservations[index].time;
      }
      const d = new Date(item.time);
      mainScope.preBookedSlots.push(d.getHours());
    });
    console.log(this.preBookedSlots, 'hours');

    // console.log(this.selectedDate, 'date selected');
    // console.log(this.selectedDate.toUTCString(), 'utc converted');
    // console.log(moment(this.selectedDate).tz(this.timezone).format(), 'timezone converted');

  }

  reserve() {
    if (!this.selectedDate) {
      this.toastr.error('Please Select a date');
      return;
    }
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    this.selectedDate = new Date(this.selectedDate);
    this.selectedDate.setHours(this.selectedSlot);
    if (this.selectedDate <= now) {
      this.toastr.error('You cannot Select Date/ Time in the past');
      return;
    }
    this.selectedDate = this.selectedDate.toUTCString();
    this.apiService.makeReservation(this.userId, this.loggedIn, this.selectedDate, this.name, this.loggedIn_name).subscribe((response) => {
      this.resp = response;
    }, (error) => {
      console.log('Error :: ' + error);
    },
      () => {
        if (!this.resp.status) {
          this.toastr.error(this.resp.message);
          this.getUserData(this.userId);
        } else if (this.resp.status) {
          this.toastr.success('Reservation Made Successfully');
          this.timezone = this.resp.data.timezone;
        }
      });
  }

  ngOnInit() {
    this.userId = this.routerStateParamsService.getParams().source.value.id;
    this.loggedIn = localStorage.getItem('userId');
    this.loggedIn_name = localStorage.getItem('logged_in_user');
    this.loading = true;
    this.selectedDate = null;
    this.selectedSlot = null;
    this.reservations = [];
    this.preBookedSlots = [];
    this.hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

    const token = localStorage.getItem('jwtToken');
    if (!token) {
      this._router.navigate(['login/']);
    }
    if (this.userId === this.loggedIn) {
      this._router.navigate(['my-schedules/' + this.userId]);
    }
    this.getUserData(this.userId);
  }

}
