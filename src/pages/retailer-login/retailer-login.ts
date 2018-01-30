import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RetailerRegPage } from "../retailer-reg/retailer-reg";
import { RetailerMainPage } from "../retailer-main/retailer-main";
import { FormBuilder,Validators } from "@angular/forms";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';


/**
 * Generated class for the RetailerLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-retailer-login',
  templateUrl: 'retailer-login.html',
})
export class RetailerLoginPage {

  number
  pass

  details:FirebaseListObservable<RetailerRegPage[]>

  public value: any;

  public retailer : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,
              public formbuild:FormBuilder,private fb:AngularFireDatabase) {

                this.fb.list('Retailer-Reg',{

                }).subscribe(snapshot => { console.log(snapshot );
                  
                  
                  
                  
                  console.log(snapshot[0]);
                  this.value = snapshot
                });
                console.log("data");
                //console.log(snapshot.val());
                console.log("The final value is : ");
                console.log("The final values is: " + this.value)
                


 // console.log(navParams.get('val'));
 this.retailer = this.formbuild.group({

  "number":["",Validators.compose([Validators.required,Validators.pattern('[0-9]{10}')])],
  "pass": ["",Validators.compose([Validators.required,Validators.minLength(8)])]

 });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetailerLoginPage');
  }
  RetMain(){
    for (let i=0; i<this.value.length; i++){
      let val = this.value[i];
      if (val === undefined){
        console.log("This is Undefine");
      }
      else{
        console.log("It is Define");
      }
      console.log("last data:"+val["farmername"])
      if (this.number == val["retailernumber"] && this.pass == val["retailerpass"]){
        let toast = this.toastCtrl.create({
          message: 'Log-in Successfull. WelCome!!',
          duration: 1000,
          position: 'bottom'
        });
        toast.present();
        this.navCtrl.push(RetailerMainPage,{ 
    
        })
        console.log("valid");
      }
      else{
        console.log("Invalid");
        // console.log("Invalid");
        // let toast1 = this.toastCtrl.create({
        //   message: 'Enter Valid Credentials.!',
        //   duration: 1000,
        //   position: 'middle'
          
        // });
        // toast1.present();
      }


    }
    

  }

  RetailerReg(){

    this.navCtrl.push(RetailerRegPage, {

    })
  }
}
