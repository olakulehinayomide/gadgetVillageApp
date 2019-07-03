import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { Plugins } from '@capacitor/core';
import { BehaviorSubject } from 'rxjs';

const { Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class StorageHelperService extends StorageService {
  authKey = 'auth';
  currentToken = new BehaviorSubject(null)

  constructor(storage: Storage) {
    super(storage);
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
    await super.setObject(this.authKey, value);
  }

  async getAuth() {
    const response = await super.getObject(this.authKey);
    return response;
  }

  async removeAuth() {
    await super.removeItem(this.authKey);
  }
}
