import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/Login/login";
import { WelcomeselectPage } from '../pages/welcomeselect/welcomeselect';
import { IndustrialistloginPage } from '../pages/industrialistlogin/industrialistlogin';
import { FarmregPage } from "../pages/farmreg/farmreg";
import { IndRegPage } from "../pages/ind-reg/ind-reg";
import { RetailerLoginPage } from '../pages/retailer-login/retailer-login';
import { RetailerRegPage } from "../pages/retailer-reg/retailer-reg";
import { FarmerMainPage } from "../pages/farmer-main/farmer-main";
import { IndustrialistMainPage } from "../pages/industrialist-main/industrialist-main";
import { RetailerMainPage } from "../pages/retailer-main/retailer-main";
import { AddCropPage } from '../pages/add-crop/add-crop';
import { FarmerDetailsPage } from '../pages/farmer-details/farmer-details';

//import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database';

var config = {
  apiKey: "AIzaSyAuERAS5Zq2ZpdoBWWKuIcanFmcMwjBO2E",
  authDomain: "smartkisandb.firebaseapp.com",
  databaseURL: "https://smartkisandb.firebaseio.com",
  projectId: "smartkisandb",
  storageBucket: "",
  messagingSenderId: "57829941133"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    WelcomeselectPage,
    IndustrialistloginPage,
    FarmregPage,
    IndRegPage,
    RetailerLoginPage,
    RetailerRegPage,
    FarmerMainPage,
    IndustrialistMainPage,
    RetailerMainPage,
    AddCropPage,
    FarmerDetailsPage

  
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    WelcomeselectPage,
    IndustrialistloginPage,
    FarmregPage,
    IndRegPage,
    RetailerLoginPage,
    RetailerRegPage,
    FarmerMainPage,
    IndustrialistMainPage,
    RetailerMainPage,
    AddCropPage,
    FarmerDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,    

    HttpModule,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
