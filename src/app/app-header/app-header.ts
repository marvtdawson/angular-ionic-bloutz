import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SiteDataProvider} from "../../providers/site-data/site-data";

/**
 * Generated class for the AppHeaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-app-header',
  templateUrl: 'app-header.html',
})
export class AppHeaderPage {

  pageTitle: any;
  siteName = this.siteData.siteName;

  constructor(public navCtrl: NavController, public navParams: NavParams, private siteData: SiteDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppHeaderPage');
  }

}
