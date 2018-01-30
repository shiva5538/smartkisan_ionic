import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndustrialistMainPage } from './industrialist-main';

@NgModule({
  declarations: [
    IndustrialistMainPage,
  ],
  imports: [
    IonicPageModule.forChild(IndustrialistMainPage),
  ],
})
export class IndustrialistMainPageModule {}
