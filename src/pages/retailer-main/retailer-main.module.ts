import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RetailerMainPage } from './retailer-main';

@NgModule({
  declarations: [
    RetailerMainPage,
  ],
  imports: [
    IonicPageModule.forChild(RetailerMainPage),
  ],
})
export class RetailerMainPageModule {}
