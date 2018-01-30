import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage  } from "../Login/login";


import { FormGroup,FormBuilder,Validators } from '@angular/forms';

import { AngularFireDatabase} from 'angularfire2/database';





/**
 * Generated class for the FarmregPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-farmreg',
  templateUrl: 'farmreg.html',
})
export class FarmregPage {

  arrData = []
  name
  number
  email
  password
  cpassword
  address

  farmer: FormGroup;
  


  constructor(public navCtrl: NavController, public navParams: NavParams,
                 public toastCtrl: ToastController, 
                 private formBuilder: FormBuilder,private fbd:AngularFireDatabase ) {

                  this.fbd.list("/farmer-Reg").valueChanges().subscribe(_data => {
                    this.arrData = _data;
                    console.log(this.arrData);
                  });
                 
   this.farmer = this.formBuilder.group({
     
    "name":["",Validators.compose([Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z" "]*')])],
    "number":["",Validators.compose([Validators.required,Validators.pattern('[0-9]{10}')])],
    "email":["",Validators.compose([Validators.required,Validators.email,Validators.pattern('[a-zA-Z0-9@.]*')])],
    "password": ["",Validators.compose([Validators.required,Validators.minLength(8)])],
    "cpassword": ["",Validators.compose([Validators.required,Validators.minLength(8)])],
    "address": ["",Validators.compose([Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9,-]*')])]

    
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FarmregPage');
  }

  add(){
    
    this.fbd.list("/farmer-Reg").push({
                                       farmername: this.name,
                                       farmernumber:this.number,
                                       farmerpass:this.password,
                                       farmercpass:this.cpassword,
                                       farmeremail:this.email,                                       
                                       farmeradd:this.address});
    
  

  /*farmlog(value) {
consol.log("hgfhgf number ");
    console.log(value);
    this.farmerService.registerUser(value).subscribe(data => {
        console.log("Registration Response:=",data);
        //handle response here...
    });*/

   //this.farmerService.info('Farmregpage: farmlog()');
    //this.farmerService.info('Email: ' + this.farmer.controls['fname'].value);
    //this.farmerService.info('Password: ' + this.farmer.controls['lname'].value);

   // if(this.farmer.valid){
      //console.log("details:",this.farmer.controls['fname']);
     
    //}


     // console.log("Register Obj:=",data);

     // if(data.farmerregistrationsuccess != null)

   // });
      
         let toast = this.toastCtrl.create({
           
        message: 'Registered successfully',
         duration: 3000,
         showCloseButton: true,
         closeButtonText: "ok"
         
       });
       toast.present();
       
    
     this.navCtrl.push(LoginPage, {

     })
  }

}
