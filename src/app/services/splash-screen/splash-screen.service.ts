import { Injectable } from '@angular/core';
import {
  Plugins,
} from '@capacitor/core';

const { SplashScreen } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class SplashScreenService {

  constructor() { }

  hideSplashScreen() {
    // Hide the splash (you should do this on app launch)
    SplashScreen.hide().catch(err => console.log(err));
  }

  showSplashScreen() {
    // Show the splash for an indefinite amount of time:
    SplashScreen.show({
      autoHide: false
    }).catch(err => console.log(err));
  }

  showSplashScreenForAWhile(seconds: number) {
    // Show the splash for two seconds and then auto hide:
    SplashScreen.show({
      showDuration: seconds,
      autoHide: true
    }).catch(err => console.log(err));
  }
}
