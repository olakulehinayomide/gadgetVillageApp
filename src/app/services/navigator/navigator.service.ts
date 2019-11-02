import { Injectable } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  constructor(private router: Router, private navCtrl: NavController) { }

  navigateTo(page: string, params?: NavigationExtras) {
    this.router.navigate([page], params);
  }

  navigateForward(page: string, params?: NavigationExtras) {
    this.navCtrl.navigateForward(page, params);
  }

  navigateBackward(page: string, params?: NavigationExtras) {
    this.navCtrl.navigateBack(page, params);
  }
  
  navigateRoot(page: string, params?: NavigationExtras) {
    this.navCtrl.navigateRoot(page, params);
  }
}
