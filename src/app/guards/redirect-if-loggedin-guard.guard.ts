import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree, CanActivate,
  CanActivateChild, CanLoad,
  Router, Route
} from '@angular/router';
import { StorageHelperService } from '../services/storage-helper/storage-helper.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectIfLoggedinGuardGuard  implements CanActivate, CanActivateChild, CanLoad {
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
    // this.authService.check_if_logged_in();
    if (this.auth) {
      // Navigate to the login page with extras
      this.router.navigate(['/login'], {});
      return false;
    } else {
      return true;
    }
  }
}
