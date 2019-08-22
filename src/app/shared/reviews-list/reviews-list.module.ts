import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsListComponent } from './reviews-list.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'src/app/custom_pipes/pipes.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ReviewsListComponent],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    IonicModule
  ],
  exports: [
    ReviewsListComponent
  ]
})
export class ReviewsListModule { }
