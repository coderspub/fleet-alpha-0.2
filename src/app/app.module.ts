import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { Loader2Component } from './loader2/loader2.component';
import { PersontrackingComponent } from './persontracking/persontracking.component';
import { PersontrackingdetailsComponent } from './persontrackingdetails/persontrackingdetails.component';
import { PersontrackingnavComponent } from './persontrackingnav/persontrackingnav.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdddeviceComponent } from './adddevice/adddevice.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppcalendarComponent } from './appcalendar/appcalendar.component'; // for FullCalendar!
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
    Loader2Component,
    PersontrackingComponent,
    PersontrackingdetailsComponent,
    PersontrackingnavComponent,
    PagenotfoundComponent,
    AdddeviceComponent,
    AppcalendarComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    NgxQRCodeModule,
    FullCalendarModule // for FullCalendar!
  ],
  providers: [ { provide : LocationStrategy,useClass:HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
