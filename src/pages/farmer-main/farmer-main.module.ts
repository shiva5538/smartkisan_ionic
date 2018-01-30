import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FarmerMainPage } from './farmer-main';

@NgModule({
  declarations: [
    FarmerMainPage,
  ],
  imports: [
    IonicPageModule.forChild(FarmerMainPage),
  ],
})
export class FarmerMainPageModule {}
