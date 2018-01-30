import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, Events } from 'ionic-angular';
import { FarmerMainPage } from '../farmer-main/farmer-main';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

/**
 * Generated class for the AddCropPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-crop',
  templateUrl: 'add-crop.html',
})
export class AddCropPage {

  arrdata = []
  name
  number
  address
  crop
  variety
  type
  quantity
  price

  farmer: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams,
               public toastCtrl: ToastController,public events: Events,
               private fdb:AngularFireDatabase,private formBuilder: FormBuilder) {

                  this.fdb.list("/Crop-Details").valueChanges().subscribe(_data => {
                    this.arrdata = _data;
                    console.log(this.arrdata);
                  });

                  this.farmer = this.formBuilder.group({
     
                    "name":["",Validators.compose([Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z" "]*')])],
                    "number":["",Validators.compose([Validators.required,Validators.pattern('[0-9]{10}')])],
                    "quantity":["",Validators.compose([Validators.required,Validators.pattern('[0-9]{2,5}')])],
                    "price": ["",Validators.compose([Validators.required,Validators.pattern('[0-9]{2,5}')])],
                    "crop": ["",Validators.compose([Validators.required])],
                    "variety": ["",Validators.compose([Validators.required])],
                    "type": ["",Validators.compose([Validators.required])],
                    "address": ["",Validators.compose([Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9,-]*')])]
                
                    
                    });


              }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCropPage');
  }

  addcrop() {

//let this.fdb.list.
this.fdb.list("/Crop-Details/").push({
                                    farmername:this.name,
                                    farmernumber:this.number,
                                    farmeraddress:this.address,
                                    cropname:this.crop,
                                    cropvariety:this.variety,
                                    cropprice:this.price,
                                    cropquantity:this.quantity,
                                    croptype:this.type});




    let toast = this.toastCtrl.create({
      message: 'Added successfully',
      duration: 2000,
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: "ok"
    });
    
   
  //this.events.publish("shareObject", dummy, 2);

    toast.present();

    this.navCtrl.push(FarmerMainPage, {
     // param1: 'John', param2: 'Johnson'

    })
  }
}
