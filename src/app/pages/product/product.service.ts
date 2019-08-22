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
export class ProductService {
  product: IProduct;
  private productId: string;
  constructor(private httpProduct: HttpProductHelperService,
              private navigator: NavigatorService,
              private utils: UtilsService) {}

  setProductId(id: string) {
    this.productId = id;
  }

  getProduct(refresher?: any) {
    this.utils.showLoader().then((loader) => {
      this.httpProduct.getProduct(this.productId).subscribe((response: IHttpResponse) => {
        if (response.status === 'success') {
          this.product = response.data;
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
    });
  }

  formatPhoneNumber(phonNumber: string) {
    if (phonNumber.charAt( 0 ) === '0') {
      phonNumber = phonNumber.slice( 1 );
      return '234' + phonNumber;
    } else {
      return '234' + phonNumber;
    }
  }

  callMerchant() {
    // call merchant
  }

  doRefresh(event) {

    setTimeout(() => {
      this.getProduct(event.target);
    }, 2000);
  }
}
