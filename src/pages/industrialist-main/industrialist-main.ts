import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AddCropPage } from '../add-crop/add-crop';
import { FarmerDetailsPage } from '../farmer-details/farmer-details';
import {WelcomeselectPage } from  '../welcomeselect/welcomeselect';

/**
 * Generated class for the IndustrialistMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-industrialist-main',
  templateUrl: 'industrialist-main.html',
})
export class IndustrialistMainPage {

  crops: FirebaseListObservable<AddCropPage[]>


  constructor(public navCtrl: NavController, public navParams: NavParams,private fdb:AngularFireDatabase) {

    this.crops = this.fdb.list('Crop-Details');




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndustrialistMainPage');
  }
  goto(){
    this.navCtrl.push(WelcomeselectPage,{

    })
  }
  goto1(){
    this.navCtrl.push(FarmerDetailsPage,{

    })
  }
 
}
