import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  sub: any;
  descriptionTruncValue = 400;
  constructor(public productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: any) => {
      this.productService.setProductId(params.id);
      this.productService.getProduct();
    });
  }

}
