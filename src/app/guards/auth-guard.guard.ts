import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, CanActivateChild, CanLoad, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageHelperService } from '../services/storage-helper/storage-helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate, CanActivateChild, CanLoad  {
  auth: any;
  constructor(private router: Router, private storage: StorageHelperService) {
    this.auth = this.storage.getAuth();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    const url = `/${route.path}`;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    this.auth = this.storage.getAuth();
    if (this.auth) {
      if (this.auth.user.banks === 0 || this.auth.user.plans === 0) {
        this.router.navigate(['/user/add-plan'], {});
        return false;
      }  else {
        return true;
      }
    } else {
      // Store the attempted URL for redirecting

      // Navigate to the login page with extras
      this.router.navigate(['/account/login'], {});
      return false;
    }

  }
}
