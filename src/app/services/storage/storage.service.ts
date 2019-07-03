import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { 
    
  }

  // JSON "set" example
  async setObject(key: string, value: object) {
    await this.storage.set({
      key: `${key}`,
      value: JSON.stringify(value)
    });
  }
  
  // JSON "get" example
  async getObject(key) {
    const ret = await this.storage.get({ key: `${key}` });
    return JSON.parse(ret.value);
  }
  
  async setItem(key: string, value: string) {
    await this.storage.set({
      key: `${key}`,
      value: `${value}`
    });
  }
  
  async getItem(key: string) {
    const value = await this.storage.get({ key: `${key}` });
    return value;
  }
  
  async removeItem(key: string) {
    await Storage.remove({ key: `${key}` });
  }
  
  async keys() {
    const keys = await this.storage.keys();
    return keys;
  }

  async clear() {
    await this.storage.clear();
  }
}
