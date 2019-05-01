import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MapsComponent } from './maps/maps.component';

const routes: Routes = [
  {path : "" , component:WelcomeComponent},
  {path : "signin" , component:SigninComponent},
  {path : "signup" , component:SignupComponent},
  {path : "home" , component:HomeComponent},
  {path : "maps" , component:MapsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
