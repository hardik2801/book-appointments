webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-router/app-router.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_login_signup_login_signup_component__ = __webpack_require__("../../../../../src/app/views/login-signup/login-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_my_profile_my_profile_component__ = __webpack_require__("../../../../../src/app/views/my-profile/my-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_book_slot_book_slot_component__ = __webpack_require__("../../../../../src/app/views/book-slot/book-slot.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__views_login_signup_login_signup_component__["a" /* LoginSignupComponent */],
    },
    {
        path: 'my-schedules/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__views_my_profile_my_profile_component__["a" /* MyProfileComponent */]
    },
    {
        path: 'book-slot/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__views_book_slot_book_slot_component__["a" /* BookSlotComponent */]
    },
    //   {
    //     path: 'sources/viewsources/:type',
    //     component: SourcesComponent
    //   },
    //   {
    //     path: 'sources/editsource/:id',
    //     component: EditSourceComponent
    //   },
    {
        path: '**',
        redirectTo: 'login'
        // component : HomeComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".head-band {\n    background-color: purple;\n    height: 40px;\n}\n\n.head-band-icon {\n    margin-top:10px;\n    margin-left:45%;\n    font-size: 18px;\n    color: #ffffff;\n}\n\n.right {\n    float: right;\n    padding-right: 25px;\n    padding-top: 10px;\n    font-size: 14px;\n    font-weight: bolder;\n    color: #ffffff;\n    cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-12 col-lg-12 col-sm-12 head-band\">\n      <i class=\"fa fa-sticky-note head-band-icon\"> Planguru</i>\n      <span class=\"right\" (click)=\"logout()\" [hidden]=\"loggedOut\">Logout</span>\n    </div> \n    </div>\n</section>\n\n<div class=\"content-wrapper\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'app';
    }
    AppComponent.prototype.logout = function () {
        localStorage.clear();
        this.loggedOut = true;
        this._router.navigate(['login/']);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.token = localStorage.getItem('jwtToken');
        if (!this.token) {
            this.loggedOut = true;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_router_app_router_module__ = __webpack_require__("../../../../../src/app/app-router/app-router.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_moment_timezone__ = __webpack_require__("../../../../angular-moment-timezone/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_timezone_selector__ = __webpack_require__("../../../../ng2-timezone-selector/ng2-timezone-selector.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_timezone_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_timezone_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng_router_state_params__ = __webpack_require__("../../../../ng-router-state-params/router-state-params.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_login_signup_login_signup_component__ = __webpack_require__("../../../../../src/app/views/login-signup/login-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_my_profile_my_profile_component__ = __webpack_require__("../../../../../src/app/views/my-profile/my-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_book_slot_book_slot_component__ = __webpack_require__("../../../../../src/app/views/book-slot/book-slot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__views_login_signup_login_signup_component__["a" /* LoginSignupComponent */],
                __WEBPACK_IMPORTED_MODULE_15__views_my_profile_my_profile_component__["a" /* MyProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__views_book_slot_book_slot_component__["a" /* BookSlotComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_router_app_router_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_10_angular_moment_timezone__["a" /* MomentTimezoneModule */],
                __WEBPACK_IMPORTED_MODULE_11_ng2_timezone_selector__["TimezonePickerModule"],
                __WEBPACK_IMPORTED_MODULE_17_ng_pick_datetime__["a" /* OwlDateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_17_ng_pick_datetime__["b" /* OwlNativeDateTimeModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_12_ng_router_state_params__["a" /* RouterStateParamsService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';
var ApiService = /** @class */ (function () {
    function ApiService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        // this.srcApiUrl = environment.baseUrl + environment.apiUrl + 'source/';
    }
    ApiService.prototype.login = function (email, password) {
        var login_data = {
            email: email,
            password: password
        };
        return this.http
            .post('http://127.0.0.1:3000/api/login', login_data)
            .map(function (response) {
            return response.json();
        });
    };
    ApiService.prototype.signup = function (email, password, name, timezone) {
        var login_data = {
            name: name,
            email: email,
            password: password,
            timezone: timezone
        };
        return this.http
            .post('http://127.0.0.1:3000/api/signup', login_data)
            .map(function (response) {
            return response.json();
        });
    };
    ApiService.prototype.getUser = function (userId) {
        var token = localStorage.getItem('jwtToken');
        if (!token) {
            token = '';
        }
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': token })
        };
        return this.httpClient
            .get('http://127.0.0.1:3000/api/user/' + userId, httpOptions)
            .map(function (response) {
            // console.log(response);
            return response;
        });
    };
    ApiService.prototype.updateTZ = function (userId, timezone) {
        var timezoneObj = {
            timezone: timezone
        };
        return this.httpClient
            .post('http://127.0.0.1:3000/api/updatetz/' + userId, timezoneObj)
            .map(function (response) {
            // console.log(response);
            return response;
        });
    };
    ApiService.prototype.makeReservation = function (userId, loggedIn, timeSlot, userName, loggedIn_name) {
        var objToSend = {
            userId: userId,
            userName: userName,
            loggedIn_name: loggedIn_name,
            loggedIn: loggedIn,
            timeSlot: timeSlot
        };
        return this.httpClient
            .post('http://127.0.0.1:3000/api/reserve/', objToSend)
            .map(function (response) {
            // console.log(response);
            return response;
        });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/views/book-slot/book-slot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin-custom {\n    margin-left: 10%;\n}\n\n.bottom-margin {\n    margin-bottom: 20px;\n}\n\n.bottom-margin-extra {\n    margin-bottom: 50px;\n}\n\n.btn.outline {\n    background: none;\n    margin: 10px;\n}\n\n.btn-group {\n    margin-left: 10%;\n}\n\n.btn-primary.outline {\n\tborder: 2px solid #0099cc;\n\tcolor: #0099cc;\n}\n\n/* input[type=\"radio\"] {\n    visibility:hidden;\n}\nlabel {\n    cursor: pointer;\n}\ninput[type=radio]+label {\n\tfont-weight: normal;\n}\ninput[type=radio]:checked+label {\n    font-weight: bold;\n    background: red !important;\n}\ninput[type=radio]:focus+label {\n\tborder: 1px dotted #000 !important;\n} */\n\n.footer {\n    position: fixed; \n    text-align: center;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/book-slot/book-slot.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header container\" [hidden]=\"loading\">\n  <h4>\n    <small>Making Reservations With</small>\n  </h4>\n  <h3>\n    {{name}}\n    <small>\n      {{timezone || 'No TimeZone Found'}}\n    </small>\n  </h3>\n</section>\n\n<div class=\"container bottom-margin col-md-12 col-xs-12 col-lg-12 col-sm-12\" [hidden]=\"loading\">\n  <h4 class=\"custom-color\">\n  </h4>\n  <input class=\"margin-custom\" [owlDateTime]=\"dt1\" [owlDateTimeTrigger]=\"dt1\" placeholder=\"Select Date\" [(ngModel)]=\"selectedDate\">\n  <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\n  <button class=\"btn btn-primary\" (click)=\"setDate()\">Change</button>\n</div>\n<div class=\"container\">\n  <div class=\"btn-group\" data-toggle=\"buttons\">\n    <div class=\"row\">\n\n      <label class=\"btn btn-primary outline col-md-5\" *ngFor=\"let hour of hours\">\n        <input type=\"radio\" name=\"options\" value=\"{{hour}}\" [disabled]=\"preBookedSlots.indexOf(hour) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option1\"> {{hour}}\n      </label>\n      <!-- <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"00\" [disabled]=\"preBookedSlots.indexOf(0) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option1\"> 12:00 Am\n      </label>\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"01\" [disabled]=\"preBookedSlots.indexOf(1) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option2\"> 01:00 Am\n      </label>\n    </div>\n    <div class=\"row\">\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"02\" [disabled]=\"preBookedSlots.indexOf(2) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option4\"> 02:00 Am\n      </label>\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"03\" [disabled]=\"preBookedSlots.indexOf(3) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option5\"> 03:00 Am\n      </label>\n    </div>\n    <div class=\"row\">\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"04\" [disabled]=\"preBookedSlots.indexOf(4) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option6\"> 04:00 Am\n      </label>\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"05\" [disabled]=\"preBookedSlots.indexOf(5) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option6\"> 05:00 Am\n      </label>\n    </div>\n    <div class=\"row\">\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"06\" [disabled]=\"preBookedSlots.indexOf(6) > -1\"[(ngModel)]=\"selectedSlot\" id=\"option7\"> 06:00 Am\n      </label>\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"07\" [disabled]=\"preBookedSlots.indexOf(7) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option8\"> 07:00 Am\n      </label>\n    </div>\n    <div class=\"row\">\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"08\" [disabled]=\"preBookedSlots.indexOf(8) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option9\"> 08:00 Am\n      </label>\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"09\" [disabled]=\"preBookedSlots.indexOf(9) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option10\"> 09:00 Am\n      </label>\n    </div>\n    <div class=\"row\">\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"10\" [disabled]=\"preBookedSlots.indexOf(10) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option11\"> 10:00 Am\n      </label>\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"11\" [disabled]=\"preBookedSlots.indexOf(11) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option12\"> 11:00 Am\n      </label>\n    </div>\n    <div class=\"row\">\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"12\" [disabled]=\"preBookedSlots.indexOf(12) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option12\"> 12:00 Pm\n      </label>\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"13\" [disabled]=\"preBookedSlots.indexOf(13) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option14\"> 01:00 Pm\n      </label>\n    </div>\n    <div class=\"row\">\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"14\" [disabled]=\"preBookedSlots.indexOf(14) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option15\"> 02:00 Pm\n      </label>\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"15\" [disabled]=\"preBookedSlots.indexOf(15) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option16\"> 03:00 Pm\n      </label>\n    </div>\n    <div class=\"row\">\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"16\" [disabled]=\"preBookedSlots.indexOf(16) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option17\"> 04:00 Pm\n      </label>\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"17\" [disabled]=\"preBookedSlots.indexOf(17) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option18\"> 05:00 Pm\n      </label>\n    </div>\n    <div class=\"row\">\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"18\" [disabled]=\"preBookedSlots.indexOf(18) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option19\"> 06:00 Pm\n      </label>\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"19\" [disabled]=\"preBookedSlots.indexOf(19) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option20\"> 07:00 Pm\n      </label>\n    </div>\n    <div class=\"row\">\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"20\" [disabled]=\"preBookedSlots.indexOf(20) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option21\"> 08:00 Pm\n      </label>\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"21\" [disabled]=\"preBookedSlots.indexOf(21) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option22\"> 09:00 Pm\n      </label>\n    </div>\n    <div class=\"row bottom-margin-extra\">\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"22\" [disabled]=\"preBookedSlots.indexOf(22) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option23\"> 10:00 Pm\n      </label>\n      <label class=\"btn btn-primary outline col-md-5\">\n        <input type=\"radio\" name=\"options\" value=\"23\" [disabled]=\"preBookedSlots.indexOf(23) > -1\" [(ngModel)]=\"selectedSlot\" id=\"option24\"> 11:00 Pm\n      </label> -->\n    </div>\n  </div>\n</div>\n<div class=\"footer\" [hidden]=\"!selectedSlot\">\n  <button class=\"btn btn-success\" (click)=\"reserve()\">Make Reservation</button>\n</div>\n\n<div class=\"loading loading-big\" [hidden]=\"!loading\"></div>"

/***/ }),

/***/ "../../../../../src/app/views/book-slot/book-slot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookSlotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_router_state_params__ = __webpack_require__("../../../../ng-router-state-params/router-state-params.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_timezone__ = __webpack_require__("../../../../moment-timezone/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment_timezone__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookSlotComponent = /** @class */ (function () {
    function BookSlotComponent(routerStateParamsService, _router, toastr, vcr, apiService) {
        this.routerStateParamsService = routerStateParamsService;
        this._router = _router;
        this.toastr = toastr;
        this.apiService = apiService;
        this.toastr.setRootViewContainerRef(vcr);
    }
    BookSlotComponent.prototype.getUserData = function (userId) {
        var _this = this;
        this.apiService.getUser(userId).subscribe(function (response) {
            _this.resp = response;
        }, function (error) {
            console.log('Error :: ' + error);
        }, function () {
            _this.loading = false;
            if (!_this.resp.status) {
                _this.toastr.error(_this.resp.message);
                _this._router.navigate(['login/']);
            }
            else if (_this.resp.status) {
                // console.log(this.resp.data.timezone, 'tz');
                _this.timezone = _this.resp.data.timezone;
                _this.name = _this.resp.data.name;
                _this.reservations = _this.resp.data.reservations;
            }
        });
    };
    BookSlotComponent.prototype.setDate = function () {
        var mainScope = this;
        var date_selected = new Date(this.selectedDate);
        var today = this.reservations.filter(function (item) {
            var temp = new Date(item.time);
            if (date_selected.getDay() === temp.getDay() && date_selected.getMonth() === temp.getMonth()
                && date_selected.getFullYear() === temp.getFullYear()) {
                item.time = new Date(item.time);
                mainScope.preBookedSlots.push(item.time.getHours());
            }
        });
    };
    BookSlotComponent.prototype.reserve = function () {
        var _this = this;
        if (!this.selectedDate) {
            this.toastr.error('Please Select a date');
            return;
        }
        var now = new Date();
        now.setHours(0, 0, 0, 0);
        this.selectedDate = new Date(this.selectedDate);
        this.selectedDate.setHours(this.selectedSlot);
        if (this.selectedDate <= now) {
            this.toastr.error('You cannot Select Date/ Time in the past');
            return;
        }
        this.selectedDate = this.selectedDate.toUTCString();
        this.apiService.makeReservation(this.userId, this.loggedIn, this.selectedDate, this.name, this.loggedIn_name).subscribe(function (response) {
            _this.resp = response;
        }, function (error) {
            console.log('Error :: ' + error);
        }, function () {
            if (!_this.resp.status) {
                _this.toastr.error(_this.resp.message);
                _this.getUserData(_this.userId);
            }
            else if (_this.resp.status) {
                _this.toastr.success('Reservation Made Successfully');
                _this.timezone = _this.resp.data.timezone;
            }
        });
    };
    BookSlotComponent.prototype.ngOnInit = function () {
        this.userId = this.routerStateParamsService.getParams().source.value.id;
        this.loggedIn = localStorage.getItem('userId');
        this.loggedIn_name = localStorage.getItem('logged_in_user');
        this.loading = true;
        this.selectedDate = null;
        this.selectedSlot = null;
        this.reservations = [];
        this.preBookedSlots = [];
        this.hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        var token = localStorage.getItem('jwtToken');
        if (!token) {
            this._router.navigate(['login/']);
        }
        if (this.userId === this.loggedIn) {
            this._router.navigate(['my-schedules/' + this.userId]);
        }
        this.getUserData(this.userId);
    };
    BookSlotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-slot',
            template: __webpack_require__("../../../../../src/app/views/book-slot/book-slot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/book-slot/book-slot.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng_router_state_params__["a" /* RouterStateParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng_router_state_params__["a" /* RouterStateParamsService */]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */]])
    ], BookSlotComponent);
    return BookSlotComponent;
    var _a;
}());



/***/ }),

/***/ "../../../../../src/app/views/login-signup/login-signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n    margin-bottom: 10px;\n}\n\n.title span {\n    color: grey;\n}\n\n.bottom-text {\ncolor: grey;\nposition: relative;\ntop:50px;\nleft: 30px;\n}\n\n.bottom-text a {\n    color: purple;\n}\n\n.btn-custom {\n    border-radius: 50%;\n    background-color: purple;\n    font-size: 18px;\n    font-weight:bold;\n    float: left;\n    margin-left: 20px;\n    color: #d4bdbd;\n}\n\n.forgot-text{\n    position: relative;\n    margin-top: 10px;\n    left: 75px;\n}\n\n.forgot-text a {\n    color: purple !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/login-signup/login-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"currentRoute=='login'\">\n  <div [hidden]=\"!loading\" class=\"loading loading-big\"></div>\n  <div class=\"row set-mid\" [hidden]=\"loading\">\n    <div class=\"title\">\n      <h4>Hello!</h4>\n      <span>Please Log In to Your Account.</span>\n    </div>\n    <input type=\"text\" id=\"email\" class=\"form-control form-custom\" [(ngModel)]=\"email_ip\" placeholder=\"Email Address\" required=\"required\"\n    />\n    <input type=\"password\" id=\"password\" class=\"form-control form-custom\" [(ngModel)]=\"password_ip\" placeholder=\"Password\" required=\"required\"\n    />\n    <div class=\"row\">\n      <button class=\"btn btn-custom\" (click)=\"login()\">Login</button>\n      <div class=\"forgot-text\">\n        <a href=\"#\">Forgot Password? </a>\n      </div>\n    </div>\n    <span class=\"bottom-text\">\n      Still without account?\n      <a (click)=\"navigate('signup')\">Signup</a>\n    </span>\n  </div>\n</div>\n<div class=\"container\" *ngIf=\"currentRoute == 'signup'\">\n  <div [hidden]=\"!loading\" class=\"loading loading-big\"></div>\n  <div class=\"row set-mid\" [hidden]=\"loading\">\n    <div class=\"title\">\n      <h4>Signup</h4>\n      <span>Create an account to use planguru without limits. For free.</span>\n    </div>\n    <input type=\"text\" id=\"new_name\" class=\"form-control form-custom\" [(ngModel)]=\"name_ip\" placeholder=\"Name\" required=\"required\"\n    />\n    <input type=\"text\" id=\"new_email\" class=\"form-control form-custom\" [(ngModel)]=\"email_ip\" placeholder=\"Email Address\" required=\"required\"\n    />\n    <input type=\"password\" id=\"new_password\" class=\"form-control form-custom\" [(ngModel)]=\"password_ip\" placeholder=\"Password\"\n      required=\"required\" />\n    <!-- <div class=\"form-custom\">\n      <ng2-timezone-picker [(timezone)]=\"timezone\" [placeholder]=\"placeholderString\" (change)=\"changeTimezone($event)\">\n      </ng2-timezone-picker>\n    </div> -->\n    <div class=\"row\">\n      <button class=\"btn btn-custom\" (click)=\"signup()\">Signup</button>\n    </div>\n    <span class=\"bottom-text\">\n      Already have an account?\n      <a (click)=\"navigate('login')\">Login</a>\n    </span>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/login-signup/login-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_timezone__ = __webpack_require__("../../../../moment-timezone/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment_timezone__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { MomentModule } from 'angular2-moment';
// import { MomentTimezoneModule } from 'angular-moment-timezone';


var LoginSignupComponent = /** @class */ (function () {
    function LoginSignupComponent(_router, apiService, toastr, vcr) {
        this._router = _router;
        this.apiService = apiService;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    LoginSignupComponent.prototype.navigate = function (route) {
        if (route === 'signup') {
            this.currentRoute = 'signup';
            // this._router.navigate(['/login?signup=' + true]);
        }
        else {
            this.currentRoute = 'login';
        }
    };
    LoginSignupComponent.prototype.login = function () {
        var _this = this;
        if (this.email_ip && this.password_ip) {
            this.loading = true;
            this.apiService.login(this.email_ip, this.password_ip).subscribe(function (response) {
                _this.resp = response;
            }, function (error) {
                console.log('Error :: ' + error);
            }, function () {
                _this.loading = false;
                if (!_this.resp.status) {
                    _this.toastr.error(_this.resp.message);
                }
                else if (_this.resp.status) {
                    // console.log(this.resp);
                    localStorage.setItem('jwtToken', _this.resp.data.token);
                    localStorage.setItem('userId', _this.resp.data.user._id);
                    _this.loggedOut = false;
                    localStorage.setItem('logged_in_user', _this.resp.data.user.name);
                    _this._router.navigate(['my-schedules/' + _this.resp.data.user._id]);
                }
            });
        }
        else {
            this.toastr.error('Please enter email and password!');
        }
    };
    // changeTimezone(timezone) {
    //   this.timezone = timezone;
    // }
    LoginSignupComponent.prototype.signup = function () {
        var _this = this;
        // if (!this.timezone) {
        //   this.toastr.error('Please select your timezone!');
        //   return;
        // }
        if (this.email_ip && this.password_ip) {
            this.loading = true;
            this.apiService.signup(this.email_ip, this.password_ip, this.name_ip, this.timezone).subscribe(function (response) {
                _this.resp = response;
            }, function (error) {
                console.log('Error :: ' + error);
            }, function () {
                _this.loading = false;
                console.log(_this.resp);
                if (!_this.resp.status) {
                    _this.toastr.error(_this.resp.message);
                }
                else if (_this.resp.status) {
                    _this.toastr.success('New User Created');
                    _this.email_ip = '';
                    _this.password_ip = '';
                    _this.currentRoute = 'login';
                    // this._router.navigate(['my-schedules']);
                }
            });
        }
        else {
            this.toastr.error('Please enter email and password!');
        }
    };
    LoginSignupComponent.prototype.ngOnInit = function () {
        this.loggedIn = localStorage.getItem('userId');
        this.token = localStorage.getItem('jwtToken');
        if (this.loggedIn && this.token) {
            this._router.navigate(['my-schedules/' + this.loggedIn]);
        }
        this.loading = false;
        this.currentRoute = 'login';
        this.email_ip = '';
        this.password_ip = '';
        this.timezone = __WEBPACK_IMPORTED_MODULE_4_moment__["tz"].guess();
        this.placeholderString = 'Select timezone';
    };
    LoginSignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-signup',
            template: __webpack_require__("../../../../../src/app/views/login-signup/login-signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/login-signup/login-signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], LoginSignupComponent);
    return LoginSignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/my-profile/my-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-color {\n    color: grey;\n}\n\n.btn {\n    margin-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/my-profile/my-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header container\" [hidden]=\"loading\">\n  <h3>\n    {{name}}\n  </h3>\n  <h4>\n    <small>\n      {{timezone || 'No TimeZone Found'}}\n      <a (click)=\"updateTimezone()\">Update</a>\n    </small>\n  </h4>\n</section>\n\n<div class=\"container\" [hidden]=\"loading\">\n  <div class=\"form-custom\" [hidden]=\"!showtzSelector\">\n    <ng2-timezone-picker [(timezone)]=\"timezone\" [placeholder]=\"placeholderString\" (change)=\"changeTimezone($event)\">\n    </ng2-timezone-picker>\n    <button class=\"btn btn-primary\" (click)=\"saveTimezone()\">Save</button>\n  </div>\n</div>\n\n<div class=\"container col-md-12 col-xs-12 col-lg-12 col-sm-12\" [hidden]=\"loading\">\n  <h4 class=\"custom-color\">\n    Reservations\n  </h4>\n<table class=\"table table-striped\">\n  <thead>\n    <th>\n      Date/Time\n    </th>\n    <th>Booked By</th>\n    <th>Booked For</th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let booking of reservations\">\n      <td>{{booking.time}}</td>\n      <td>{{booking.booked_by || 'Me' }}</td>\n      <td>{{booking.booked_for || 'Me' }}</td>\n    </tr>\n  </tbody>\n</table>\n</div>\n<div class=\"loading loading-big\" [hidden]=\"!loading\"></div>"

/***/ }),

/***/ "../../../../../src/app/views/my-profile/my-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_router_state_params__ = __webpack_require__("../../../../ng-router-state-params/router-state-params.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment_timezone__ = __webpack_require__("../../../../moment-timezone/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment_timezone__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(routerStateParamsService, apiService, toastr, vcr, _router) {
        this.routerStateParamsService = routerStateParamsService;
        this.apiService = apiService;
        this.toastr = toastr;
        this._router = _router;
        this.toastr.setRootViewContainerRef(vcr);
    }
    MyProfileComponent.prototype.changeTimezone = function (timezone) {
        // this.showtzSelector = false;
        this.timezone = timezone;
    };
    MyProfileComponent.prototype.updateTimezone = function () {
        this.showtzSelector = true;
    };
    MyProfileComponent.prototype.saveTimezone = function () {
        var _this = this;
        this.showtzSelector = false;
        this.apiService.updateTZ(this.userId, this.timezone).subscribe(function (response) {
            _this.resp = response;
        }, function (error) {
            console.log('Error :: ' + error);
        }, function () {
            console.log(_this.resp);
            if (!_this.resp.status) {
                _this.toastr.error(_this.resp.message);
                _this.getUserData(_this.userId);
            }
            else if (_this.resp.status) {
                _this.toastr.success('Timezone updated successfully');
                _this.timezone = _this.resp.data.timezone;
            }
        });
    };
    MyProfileComponent.prototype.getUserData = function (userId) {
        var _this = this;
        this.apiService.getUser(userId).subscribe(function (response) {
            _this.resp = response;
        }, function (error) {
            console.log('Error :: ' + error);
        }, function () {
            _this.loading = false;
            // console.log(this.resp);
            var mainScope = _this;
            if (!_this.resp.status) {
                _this.toastr.error(_this.resp.message);
                _this._router.navigate(['login/']);
            }
            else if (_this.resp.status) {
                _this.timezone = _this.resp.data.timezone;
                if (_this.timezone === 'Asia/Calcutta') {
                    _this.timezone = 'Asia/Kolkata';
                }
                _this.name = _this.resp.data.name;
                _this.resp.data.reservations.forEach(function (item) {
                    item.time = __WEBPACK_IMPORTED_MODULE_5_moment__(item.time).tz(mainScope.timezone).format('MMM Do YYYY hA');
                });
                _this.reservations = _this.resp.data.reservations;
            }
        });
    };
    MyProfileComponent.prototype.ngOnInit = function () {
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
    };
    MyProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-profile',
            template: __webpack_require__("../../../../../src/app/views/my-profile/my-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/my-profile/my-profile.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng_router_state_params__["a" /* RouterStateParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng_router_state_params__["a" /* RouterStateParamsService */]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], MyProfileComponent);
    return MyProfileComponent;
    var _a;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map