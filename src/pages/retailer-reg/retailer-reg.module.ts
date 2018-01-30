import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RetailerRegPage } from './retailer-reg';

@NgModule({
  declarations: [
    RetailerRegPage,
  ],
  imports: [
    IonicPageModule.forChild(RetailerRegPage),
  ],
})
export class RetailerRegPageModule {}
