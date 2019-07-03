import { Injectable } from '@angular/core';
import { HttpService } from '../../http/http.service';
import { apiRoutes } from 'src/app/enums/api-routes.const';
import { ILogin } from 'src/app/interfaces/auth/i-login';
import { ISignup } from 'src/app/interfaces/auth/i-signup';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthHelperService {

  constructor(private http: HttpService) { }

  signIn(body: ILogin) {
    return this.http.post(apiRoutes.signinApi, body);
  }

  signUp(body: ISignup) {
    return this.http.post(apiRoutes.signupApi, body);
  }
}
