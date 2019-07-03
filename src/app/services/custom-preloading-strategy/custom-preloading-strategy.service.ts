import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategyService implements PreloadingStrategy {

  constructor() { }

  preloadedModules: string[] = [];

  preload(route: Route, load: () => void): Observable<any> {
    if (route.data && route.data['preload']) {
      setTimeout(() => {
        // add the route path to our preloaded module array
        this.preloadedModules.push(route.path);

        // log the route path to the console
        // console.log('Preloaded: ' + route.path);
        return load();
      }, 4000);
    } else {
      return null;
    }
  }
}
