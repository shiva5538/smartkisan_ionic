import { Component } from '@angular/core';
import {  NavController, NavParams,ToastController } from 'ionic-angular';
import { IndRegPage } from "../ind-reg/ind-reg";
import { IndustrialistMainPage } from "../industrialist-main/industrialist-main";
//import { FarmerMainPage } from "../farmer-main/farmer-main";
import { FormBuilder,Validators } from "@angular/forms";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

/**
 * Generated class for the IndustrialistloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-industrialistlogin',
  templateUrl: 'industrialistlogin.html',
})
export class IndustrialistloginPage {

  number
  pass

 

  details:FirebaseListObservable<IndRegPage[]>
  public value: any;

  public industry : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,
              public formbuild:FormBuilder,private fb:AngularFireDatabase) {

                this.industry = this.formbuild.group({

                  "number":["",Validators.compose([Validators.required,Validators.pattern('[0-9]{10}')])],
                  "pass": ["",Validators.compose([Validators.required,Validators.minLength(8)])]
              
                 });

                this.fb.list('industry-Reg',{

                }).subscribe(snapshot => {
                   console.log(snapshot );
                   for (let i=0; i<snapshot.length; i++){
                    let val = snapshot[i];
                    if (val === undefined){
                      console.log("This is Undefine");
                    }
                    else{
                      console.log("It is Define");
                    }
                    console.log("last data:"+val["industryname"])
                    if (this.number == val["industrynumber"] && this.pass == val["industrypass"]){
                      console.log("valid");
                    }
                    else{
                      console.log("Invalid");
                    }


                  }
                  
                  
                  console.log(snapshot[0]);
                  this.value = snapshot
                
                });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndustrialistloginPage');
  }
  indusReg() {
    this.navCtrl.push(IndRegPage, {

    })

  }
  indusMain(){
    for (let i=0; i<this.value.length; i++){
      let val = this.value[i];
      if (val === undefined){
        console.log("This is Undefine");
      }
      else{
        console.log("It is Define");
      }
      console.log("last data:"+val["industryname"])
      if (this.number == val["industrynumber"] && this.pass == val["industrypass"]){
        let toast = this.toastCtrl.create({
          message: 'Log-in Successfull..Welcome..!!',
          duration: 1000,
          position: 'bottom'
        });
        toast.present();
        this.navCtrl.push(IndustrialistMainPage, {
    
        })

       // console.log("valid");
      }
      else{
       // console.log("Invalid");
      //  console.log("Invalid");
      //  let toast1 = this.toastCtrl.create({
      //    message: 'Enter Valid Credentials.!',
      //    duration: 1000,
      //    position: 'middle'
         
      //  });
      //  toast1.present();
      }


    }
    

    
  }

}
