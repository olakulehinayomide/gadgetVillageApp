import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/interfaces/i-product';
import { NavigatorService } from 'src/app/services/navigator/navigator.service';
import { Pages } from 'src/app/constants/pages.const';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { ResponseMessages } from 'src/app/constants/response-messages.const';
import { HttpProductHelperService } from 'src/app/services/http-helpers/http-product-helper/http-product-helper.service';
import { IHttpResponse } from 'src/app/interfaces/i-http-response';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  products: IProduct;
  constructor(private httpProduct: HttpProductHelperService,
              private navigator: NavigatorService,
              private utils: UtilsService) {}

  getProducts(refresher?: any) {
    this.utils.showLoader();
    this.httpProduct.getProducts().subscribe((response: IHttpResponse) => {
      if (response.status === 'success') {
        this.products = response.data;
      } else {
        this.utils.presentErrorToast(response.message);
      }
      this.utils.hideLoader();
      if (refresher) {refresher.complete()}
    }, (err: Error) => {
      this.utils.hideLoader();
      if (refresher) {refresher.complete()}
      this.utils.presentErrorToast(err.message);
    });
  }

  doRefresh(event) {

    setTimeout(() => {
      this.getProducts(event.target);
    }, 2000);
  }
}
