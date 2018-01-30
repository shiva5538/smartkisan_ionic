import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddCropPage } from '../add-crop/add-crop';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { WelcomeselectPage } from '../welcomeselect/welcomeselect'
import { isArray } from 'ionic-angular/util/util';
import { Index } from '@firebase/database/dist/esm/src/core/snap/indexes';

/**
 * Generated class for the FarmerMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-farmer-main',
  templateUrl: 'farmer-main.html',
})
export class FarmerMainPage {

  //for retrieving declaring a variable of tyoe listObservable

  crops: FirebaseListObservable<AddCropPage[]>
 
    
public data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private fb:AngularFireDatabase) {

    
    //retrieving from the table Crop-Details
    this.crops = this.fb.list('Crop-Details');
  
    console.log("Crops Details:",this.crops);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FarmerMainPage');
    //console.log(this.crops);
  }
  // goBack() {
  //   this.navCtrl.pop();
  //}
  goto(){
    this.navCtrl.push(WelcomeselectPage,{

    })
  }
 add(){
    this.navCtrl.push(AddCropPage, {
      
    })  
  }
  delete(i){
     //console.log("The key is"+i);

     //let value = this.fb.list("/Crop-Details").$ref(;
    // this.fb.list[i].object(`/Crop-Details/${i}`).remove();
    console.log("Indexing",this.crops[i]);
   
    this.fb.list("/Crop-Details/").remove(this.crops[i]);
      //find.$key[i]);
      // console.log(this.crops[i].isArray());
  }

}
