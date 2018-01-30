import { Component, ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import { WelcomeselectPage } from "../welcomeselect/welcomeselect";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides:Slides;
  SkipMsg:string = "GO!";
  
  constructor(public navCtrl: NavController) {
    
  }
  loadWelcomeSelect() {
    this.navCtrl.push(WelcomeselectPage, {
    })
  }

  slideChanged(){
    if(this.slides.isEnd()) {

      this.SkipMsg = "That's Awesome";
    } else {
      this.SkipMsg = "Go!"
    }
  }
  next(){
    this.slides.slideNext();
  }
  
  slider = [
    {
        title:"Welcome to Smart Kisan",
        Content:"Smart Kisan is a cross-platform mobile application developed to solve the problem of marketing to the farmer",
        image:"assets/imgs/2.jpg"
    },
    {
      title:"Sell Your Crops",
      Content:"Producers(Farmers) can Sell their Crops here...",
      image:"assets/imgs/sell.jpg"
    },
    {
    title:"Buy Crops",
    Content:"Industrialists or Retailers(who buys bulk qty) can buy their desired crops here...",
    image:"assets/imgs/buy.jpg"
    }
  
  ];



}
