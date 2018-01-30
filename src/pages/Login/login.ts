import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { FarmregPage } from "../farmreg/farmreg";
import { FarmerMainPage } from "../farmer-main/farmer-main";
import { FormBuilder,Validators } from "@angular/forms";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  number
  pass

  details:FirebaseListObservable<FarmregPage[]>

  public value: any;

  public farmerLogData : any;

    constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,
                 public formbuild:FormBuilder,private fb:AngularFireDatabase) {

                 

                   this.fb.list('farmer-Reg',{

                  }).subscribe(snapshot => { console.log(snapshot );
                    
                    for (let i=0; i<snapshot.length; i++){
                      let val = snapshot[i];
                      if (val === undefined){
                        console.log("This is Undefine");
                      }
                      else{
                        console.log("It is Define");
                      }
                      console.log("last data:"+val["farmername"])
                      if (this.number == val["farmernumber"] && this.pass == val["farmerpass"]){
                        console.log("valid");
                      }
                      else{
                        console.log("Invalid");
                      }


                    }
                    
                    
                    console.log(snapshot[0]);
                    this.value = snapshot
                  });
                  console.log("data");
                  //console.log(snapshot.val());
                  console.log("The final value is : ");
                  console.log("The final values is: " + this.value)
                  


   // console.log(navParams.get('val'));
   this.farmerLogData = this.formbuild.group({

    "number":["",Validators.compose([Validators.required,Validators.pattern('[0-9]{10}')])],
    "pass": ["",Validators.compose([Validators.required,Validators.minLength(8)])]

   });

}
goBack() {
  this.navCtrl.pop();
}
farmerMain() {
  console.log("hello");
  for (let i=0; i<this.value.length; i++){
    let val = this.value[i];
    if (val === undefined){
      console.log("This is Undefine");
    }
    else{
      console.log("It is Define");
    }
    console.log("last data:"+val["farmername"])
  
    if (this.number == val["farmernumber"] && this.pass == val["farmerpass"]){
      let toast = this.toastCtrl.create({
        message: 'log-in successfull..Welcome..!',
        duration: 1000,
        position: 'middle'
      });
      toast.present();

      this.navCtrl.push(FarmerMainPage, {
      })

      console.log("valid");
    }
    else{
      console.log("Invalid");
      // let toast1 = this.toastCtrl.create({
      //   message: 'Enter Valid Credentials.!',
      //   duration: 1000,
      //   position: 'middle'
        
      // });
      // toast1.present();
    
    }

  }


  console.log("jhgsdjf"+this.value);

}
farmReg(){
  this.navCtrl.push(FarmregPage, {

  })
}

}
