import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomeselectPage } from './welcomeselect';

@NgModule({
  declarations: [
    WelcomeselectPage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomeselectPage),
  ],
})
export class WelcomeselectPageModule {}
