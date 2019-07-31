import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpAuthHelperService } from 'src/app/services/http-helpers/http-auth-helper/http-auth-helper.service';
import { HttpService } from 'src/app/services/http/http.service';
import { ExternalHttpService } from 'src/app/services/external-http/external-http.service';
import { HttpClientModule } from '@angular/common/http';
import { StorageModule } from '../storage/storage.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StorageModule
  ],
  providers: [
    HttpAuthHelperService,
    HttpService,
    ExternalHttpService,
  ]
})
export class HttpModule { }
