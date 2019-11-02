import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { iosTransitionAnimation } from '@ionic/core/dist/collection/utils/transition/ios.transition.js';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UtilsModule } from './shared/utils/utils.module';
import { HttpConfigInterceptor } from './services/http/httpconfig.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    AuthLayoutComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    UtilsModule,
    IonicModule.forRoot({
      navAnimation: iosTransitionAnimation,
    }),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
