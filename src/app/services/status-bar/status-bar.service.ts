import { Injectable } from '@angular/core';
import {
  Plugins,
  StatusBarStyle,
} from '@capacitor/core';

const { StatusBar } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class StatusBarService {

  constructor() { }

  setPrimaryColorStatusBar() {
    this.changeStatusBarToDark();
    this.setBackgroundColor('#f90000');
  }

  setLightColorStatusBar() {
    this.changeStatusBarToLight();
    this.setBackgroundColor('#ffffff');
  }

  hideStatusBar() {
    StatusBar.hide().catch(err => console.log(err));
  }

  showStatusBar() {
    StatusBar.show().catch(err => console.log(err));
  }

  private setBackgroundColor(color: string) {
    StatusBar.setBackgroundColor({
      color: `${color}`
    }).catch(err => console.log(err));
  }

  private changeStatusBarToLight(): void {
    StatusBar.setStyle({
      style: StatusBarStyle.Light
    }).catch(err => console.log(err));
  }

  private changeStatusBarToDark(): void {
    StatusBar.setStyle({
      style: StatusBarStyle.Dark
    }).catch(err => console.log(err));
  }
}
