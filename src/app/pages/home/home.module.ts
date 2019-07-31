import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ProductsListModule } from '../../shared/products-list/products-list.module';
import { HttpModule } from 'src/app/shared/http/http.module';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { HomeService } from './home.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpModule,
    UtilsModule,
    ProductsListModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage],
  providers: [
    HomeService
  ]
})
export class HomePageModule {}
