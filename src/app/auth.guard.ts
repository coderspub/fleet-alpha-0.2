import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServerService } from './server.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor(private server:ServerService,private router:Router){

  }
  canActivateChild():boolean{
    if(this.server.isLoggedIn()){
      return true
    }
    else{
      this.router.navigate(["/"]);
      return false
    }
  }
  
}
