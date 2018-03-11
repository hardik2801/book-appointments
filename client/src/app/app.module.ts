import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-router/app-router.module';
import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { MomentModule } from 'angular2-moment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MomentTimezoneModule} from 'angular-moment-timezone';
import { TimezonePickerModule } from 'ng2-timezone-selector';
import { RouterStateParamsService } from 'ng-router-state-params';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './views/login-signup/login-signup.component';
import { MyProfileComponent } from './views/my-profile/my-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ToastModule.forRoot(),
    MomentModule,
    MomentTimezoneModule,
    TimezonePickerModule
  ],
  providers: [
    ApiService,
    RouterStateParamsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
