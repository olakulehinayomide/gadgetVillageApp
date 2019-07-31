import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  // JSON "set" example
  async setObject(key: string, value: object) {
    await Storage.set({
      key: `${key}`,
      value: JSON.stringify(value)
    });
  }
  
  // JSON "get" example
  async getObject(key) {
    const ret = await Storage.get({ key: `${key}` });
    return JSON.parse(ret.value);
  }
  
  async setItem(key: string, value: string) {
    await Storage.set({
      key: `${key}`,
      value: `${value}`
    });
  }
  
  async getItem(key: string) {
    const value = await Storage.get({ key: `${key}` });
    return value;
  }
  
  async removeItem(key: string) {
    await Storage.remove({ key: `${key}` });
  }
  
  async keys() {
    const keys = await Storage.keys();
    return keys;
  }

  async clear() {
    await Storage.clear();
  }
}
