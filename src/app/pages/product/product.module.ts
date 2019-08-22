import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductPage } from './product.page';
import { HttpModule } from 'src/app/shared/http/http.module';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { ProductService } from './product.service';
import { PipesModule } from 'src/app/custom_pipes/pipes.module';
import { ReviewsListModule } from 'src/app/shared/reviews-list/reviews-list.module';

const routes: Routes = [
  {
    path: '',
    component: ProductPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpModule,
    UtilsModule,
    PipesModule,
    ReviewsListModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductPage],
  providers: [
    ProductService
  ]
})
export class ProductPageModule {}
