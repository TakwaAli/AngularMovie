import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';


import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(private _AuthService :AuthService ,private _Router:Router){}
 canActivate(
 route: ActivatedRouteSnapshot,
 state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 
 if (this._AuthService.userData.getValue() != null) {
  return true;
 }
  else
  {
this._Router.navigate(['login'])
    return false;
  }
 }
 
}
/* export const authGuard: CanActivateFn = (route, state,) => {
 
if () {
  
}

  return true;
}; */

