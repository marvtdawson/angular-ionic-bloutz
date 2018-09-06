import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SiteDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SiteDataProvider {

  siteName = "Bloutz";
  siteDomain = "https://www.bloutz.com";
  siteLogo = '';

  constructor() {
    console.log('Hello SiteDataProvider Provider');
  }

}
