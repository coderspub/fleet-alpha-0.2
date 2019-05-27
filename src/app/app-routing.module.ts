import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MapsComponent } from './maps/maps.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SupportComponent } from './support/support.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : "" , component:WelcomeComponent},
  {path : "signin" , component:SigninComponent},
  {path : "signup" , component:SignupComponent},
  {path : "register" , component:RegisterComponent},
  {path: "dashboard" , component:DashboardComponent,
  children : [
    {path : "",component : HomeComponent},
    {path : "maps" , component : MapsComponent},
    {path : "profile", component : ProfileComponent},
    {path:"support",component:SupportComponent}
  ]
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
