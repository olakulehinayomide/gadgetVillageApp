import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageHelperService } from 'src/app/services/storage-helper/storage-helper.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    StorageHelperService,
    StorageService
  ]
})
export class StorageModule { }
