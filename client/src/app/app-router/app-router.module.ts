import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginSignupComponent } from '../views/login-signup/login-signup.component';
import { MyProfileComponent } from '../views/my-profile/my-profile.component';
import { BookSlotComponent } from '../views/book-slot/book-slot.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginSignupComponent,
  },
  {
    path: 'my-schedules/:id',
    component: MyProfileComponent
  },
  {
    path: 'book-slot/:id',
    component: BookSlotComponent
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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
