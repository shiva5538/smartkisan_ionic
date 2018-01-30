import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AddCropPage } from '../add-crop/add-crop';

import { WelcomeselectPage } from '../welcomeselect/welcomeselect'

/**
 * Generated class for the FarmerDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-farmer-details',
  templateUrl: 'farmer-details.html',
})
export class FarmerDetailsPage {

  crops: FirebaseListObservable<AddCropPage[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,private fdb:AngularFireDatabase) {

    this.crops = this.fdb.list('Crop-Details');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FarmerDetailsPage');
  }
  goto1(){
    this.navCtrl.push(WelcomeselectPage,{

    })
  }

}
