import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RetailerLoginPage } from './retailer-login';

@NgModule({
  declarations: [
    RetailerLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(RetailerLoginPage),
  ],
})
export class RetailerLoginPageModule {}
