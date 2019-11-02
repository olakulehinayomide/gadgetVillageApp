import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loaderToShow: any;

  constructor(public loadingController: LoadingController, public toastCtrl: ToastController) {
  }

  showLoader(message?: string) {
    this.loadingController.create({
      message: message ? message : 'Please wait...',
      duration: 15000,
    }).then((res) => {
      this.loaderToShow = res;
      this.loaderToShow.present();

      this.loaderToShow.onDidDismiss().then((dis) => {
        // console.log('Loading dismissed!');
      });
    });
  }

  hideLoader() {
    this.loaderToShow.dismiss();
  }

  async presentToast(messageValue) {
    const toast = await this.toastCtrl.create({
      message: messageValue,
      position: 'top',
      duration: 6000,
      cssClass: 'toast-app'
    });
    toast.present();
  }

  async presentSuccessToast(messageValue) {
    const toast = await this.toastCtrl.create({
      message: messageValue,
      position: 'top',
      duration: 6000,
      cssClass: 'toast-success'
    });
    toast.present();
  }

  async presentErrorToast(messageValue) {
    const toast = await this.toastCtrl.create({
      message: messageValue,
      position: 'top',
      animated: true,
      duration: 6000,
      cssClass: 'toast-error',
      translucent: true,
      buttons: [
        {
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
}
