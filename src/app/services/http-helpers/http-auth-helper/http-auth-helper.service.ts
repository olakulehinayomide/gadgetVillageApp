import { Injectable } from '@angular/core';
import { HttpService } from '../../http/http.service';
import { apiRoutes } from 'src/app/constants/api-routes.const';
import { ILogin } from 'src/app/interfaces/auth/i-login';
import { ISignup } from 'src/app/interfaces/auth/i-signup';
import { StorageHelperService } from 'src/app/services/storage-helper/storage-helper.service';
import { IAuth } from 'src/app/interfaces/auth/i-auth';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthHelperService {

  constructor(private http: HttpService,
              private storage: StorageHelperService
              ) { }

  signIn(body: ILogin) {
    return this.http.post(apiRoutes.signinApi, body);
  }

  signUp(body: ISignup) {
    return this.http.post(apiRoutes.signupApi, body);
  }

  setAuth(auth: IAuth) {
    const setAuth = this.storage.setAuth(auth);
    const setToken = this.storage.setToken(auth.token);
    return Promise.all([setAuth, setToken]);
  }
}
