import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorService } from 'src/app/services/navigator/navigator.service';
import { UtilsService } from 'src/app/services/utils/utils.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    NavigatorService,
    UtilsService
  ]
})
export class UtilsModule { }
