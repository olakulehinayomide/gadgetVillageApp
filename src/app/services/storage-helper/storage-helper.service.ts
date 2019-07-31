import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { Plugins } from '@capacitor/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageHelperService {
  authKey = 'auth';
  currentToken = new BehaviorSubject(null);

  constructor(private storageService: StorageService) {

  }

  setToken(token) {
    this.currentToken.next({ token: `${token}`});
  }

  getToken() {
    let token: any = null;
    this.currentToken.subscribe((value) => {
      token = token.token;
    });
    return token;
  }

  async setAuth(value: object) {
    await this.storageService.setObject(this.authKey, value);
  }

  async getAuth() {
    const response = await this.storageService.getObject(this.authKey);
    return response;
  }

  async removeAuth() {
    await this.storageService.removeItem(this.authKey);
  }
}
