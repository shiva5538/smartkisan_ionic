import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FarmerDetailsPage } from './farmer-details';

@NgModule({
  declarations: [
    FarmerDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FarmerDetailsPage),
  ],
})
export class FarmerDetailsPageModule {}
