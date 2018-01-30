import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from "../Login/login";
import { IndustrialistloginPage } from "../industrialistlogin/industrialistlogin";
import { RetailerLoginPage } from "../retailer-login/retailer-login";

/**
 * Generated class for the WelcomeselectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcomeselect',
  templateUrl: 'welcomeselect.html',
})
export class WelcomeselectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomeselectPage');
  }
  farmerLogin(){
    this.navCtrl.push(LoginPage, {

    })
  }
  industrialistLogin(){
    this.navCtrl.push(IndustrialistloginPage, {

    })
  }
  retailerLogin(){
    this.navCtrl.push(RetailerLoginPage, {
      
    })

  }
  
}
