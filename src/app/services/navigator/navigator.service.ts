import { Injectable } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  constructor(private router: Router) { }

  navigateTo(page: string, params?: NavigationExtras) {
    return this.router.navigate([page, params]);
  }
}
