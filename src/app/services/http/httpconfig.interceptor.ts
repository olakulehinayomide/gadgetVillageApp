import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError, from } from 'rxjs';
import { map, catchError, switchMap  } from 'rxjs/operators';
import { StorageHelperService } from '../storage-helper/storage-helper.service';
import { NavigatorService } from '../navigator/navigator.service';
import { Pages } from 'src/app/constants/pages.const';
import { UtilsService } from '../utils/utils.service';

@Injectable({
    providedIn: 'root'
})

export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private storage: StorageHelperService, private navigator: NavigatorService, private utils: UtilsService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.getToken())
        .pipe(
            switchMap(token => {
                if (token) {
                    request = request.clone({ headers: request.headers.set('x-auth-token', token) });
                }
                return next.handle(request).pipe(
                    map((event: HttpEvent<any>) => {
                        if (event instanceof HttpResponse) {
                            // console.log('event--->>>', event);
                        }
                        return event;
                    }), catchError((error: HttpErrorResponse) => {
                        // console.log(data);
                        if (error.status === 401) {
                            this.utils.hideLoader();
                            this.utils.presentErrorToast(error.error.reason);
                            this.storage.removeAuth();
                            this.navigator.navigateRoot(Pages.welcome);
                        }
                        return throwError(error);
                    }));
            })
        );
    }

    getToken() {
        return this.storage.getAuth().then((auth) => {
            if (auth) {
                return auth.token;
            } else {
                return null;
            }
        });
    }
}