import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  @Input('products') products: any;
  @Output() itemSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
