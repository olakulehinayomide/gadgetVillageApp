import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreenService } from './services/splash-screen/splash-screen.service';
import { StatusBarService } from './services/status-bar/status-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreenService,
    private statusBar: StatusBarService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.setLightColorStatusBar();
      this.splashScreen.hideSplashScreen();
    });
  }
}
