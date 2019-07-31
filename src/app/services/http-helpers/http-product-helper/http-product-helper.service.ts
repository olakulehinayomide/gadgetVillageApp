import { Injectable } from '@angular/core';
import { HttpService } from '../../http/http.service';
import { apiRoutes } from 'src/app/constants/api-routes.const';
import { StorageHelperService } from '../../storage-helper/storage-helper.service';

@Injectable({
  providedIn: 'root'
})
export class HttpProductHelperService {

  constructor(private http: HttpService,
              private storage: StorageHelperService
              ) { }

  getProducts() {
    return this.http.get(apiRoutes.getProductsApi);
  }
}
