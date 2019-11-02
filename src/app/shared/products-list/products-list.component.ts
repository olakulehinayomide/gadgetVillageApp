import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/i-product';
import { environment } from 'src/environments/environment.prod';
import { apiRoutes } from 'src/app/constants/api-routes.const';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  @Input() products: IProduct[];
  @Output() itemSelected = new EventEmitter();
  filesPath = environment.apiEndpoint + apiRoutes.getFileApi;
  constructor() { }

  ngOnInit() {}

}
