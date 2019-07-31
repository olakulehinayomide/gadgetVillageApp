import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsListComponent} from './products-list.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/custom_pipes/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule,
    IonicModule
  ],
  exports: [ProductsListComponent]
})
export class ProductsListModule { }
