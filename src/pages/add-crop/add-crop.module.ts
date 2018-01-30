import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCropPage } from './add-crop';

@NgModule({
  declarations: [
    AddCropPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCropPage),
  ],
})
export class AddCropPageModule {}
