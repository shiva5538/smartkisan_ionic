import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { IndustrialistloginPage } from "../industrialistlogin/industrialistlogin";

import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AngularFireDatabase} from 'angularfire2/database';

/**
 * Generated class for the IndRegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ind-reg',
  templateUrl: 'ind-reg.html',
})
export class IndRegPage {

  arrdata = []
  name
  number
  email
  password
  cpassword
  orgname
  orgadd

  industry: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public toastCtrl: ToastController,
              private formBuilder: FormBuilder,private fdb:AngularFireDatabase ) {

                this.fdb.list("/farmer-Reg").valueChanges().subscribe(_data => {
                  this.arrdata = _data;
                  console.log(this.arrdata);
                });

                this.industry = this.formBuilder.group({
     
                  "name":["",Validators.compose([Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z" "]*')])],
                  "number":["", Validators.compose([Validators.required,Validators.pattern('[0-9]{10}')])],
                  "email":["",Validators.compose([Validators.required,Validators.email])],
                  "password":["",Validators.compose([Validators.required,Validators.minLength(8)])],
                  "cpassword":["",Validators.compose([Validators.required,Validators.minLength(8)])],
                  "orgname":["",Validators.compose([Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9" "]*')])],
                  "orgadd":["",Validators.compose([Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9," "]*')])]         
                 
                 });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndRegPage');
  }

add(){

this.fdb.list("/industry-Reg").push({industryname:this.name,
  industrynumber:this.number,
  industryemail:this.email,
  industrypass:this.password,
  industrycpassword:this.cpassword,
  industryorgname:this.orgname,
  industryorgadd:this.orgadd});



  let toast = this.toastCtrl.create({
    message: 'Registered successfully',
    duration: 2000,
    showCloseButton: true,
    closeButtonText: "ok"
  });
  toast.present();

  this.navCtrl.push(IndustrialistloginPage, {
  })




}



  /*indLog(value){
    console.log(value);

    this.industryservice.registerIndustry(value).subscribe(data => {
      console.log("Register Obj:=",data);
    
    });
    
  }*/

}
