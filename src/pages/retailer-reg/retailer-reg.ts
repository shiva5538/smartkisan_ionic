import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { RetailerLoginPage } from '../retailer-login/retailer-login';

import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AngularFireDatabase} from 'angularfire2/database';


/**
 * Generated class for the RetailerRegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-retailer-reg',
  templateUrl: 'retailer-reg.html',
})
export class RetailerRegPage {

  arrdata = []
  name
  number
  email
  password
  cpassword
  address

  retRegFormData: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public toastCtrl:ToastController,
              private formBuilder: FormBuilder,private fdb:AngularFireDatabase) {

                this.fdb.list("/farmer-Reg").valueChanges().subscribe(_data => {
                  this.arrdata = _data;
                  console.log(this.arrdata);
                });

               
                this.retRegFormData = this.formBuilder.group({
     
      "name":["",Validators.compose([Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z" "]*')])],
      "number":["", Validators.compose([Validators.required,Validators.pattern('[0-9]{10}')])],
      "email":["",Validators.compose([Validators.required,Validators.email])],
      "password":["",Validators.compose([Validators.required,Validators.minLength(8)])],
      "cpassword":["",Validators.compose([Validators.required,Validators.minLength(8)])],
       "address":["",Validators.compose([Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9," "]*')])]

                 });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetailerRegPage');
  }
  
  add(){

    this.fdb.list("/Retailer-Reg").push({retailername:this.name,
      retailernumber:this.number,
      retailerpass:this.password,
      retailercpass:this.cpassword,
      retaileremail:this.email,
      retaileradd:this.address});

    let toast = this.toastCtrl.create({
           
      message: 'Registered successfully',
       duration: 3000,
       showCloseButton: true,
       closeButtonText: "ok"
       
     });
     toast.present();
     
  
   this.navCtrl.push(RetailerLoginPage, {

   })


  }
   
  /*RetailerLog(value){

    this.retailerService.registerRetailer(value).subscribe(data => {
      console.log("Register Obj:=",data);

     // if(data.farmerregistrationsuccess != null)

    });

    
  }*/

}
