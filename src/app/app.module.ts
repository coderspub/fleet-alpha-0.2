import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MapsComponent } from './maps/maps.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SupportComponent } from './support/support.component';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { CompareValidatorDirective } from './shared/compare-validator.directive';
import { AutofocusDirective } from './shared/autofocus.directive';


import { PersontrackingdetailsComponent } from './persontrackingdetails/persontrackingdetails.component';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdddeviceComponent } from './adddevice/adddevice.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppcalendarComponent } from './appcalendar/appcalendar.component';
import { ReportsComponent } from './reports/reports.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // for FullCalendar!

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PageloaderComponent } from './pageloader/pageloader.component';
import { TokenInterceptorService } from "./token-interceptor.service";
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    WelcomeComponent,
    MapsComponent,
    DashboardComponent,
    ProfileComponent,
    SupportComponent,
    LoaderComponent,
    RegisterComponent,
    CompareValidatorDirective,
    AutofocusDirective,
   

    PersontrackingdetailsComponent,
   
 
    AdddeviceComponent,
    AppcalendarComponent,
    ReportsComponent,
    PagenotfoundComponent,
    PageloaderComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    NgxQRCodeModule,
    FullCalendarModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule, // for FullCalendar!
    SweetAlert2Module.forRoot()
  ],
  providers: [ { provide : LocationStrategy,useClass:HashLocationStrategy },AuthGuard,
    { provide : HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
