import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {

  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    private callNumber: CallNumber,
 
    public backgroundGeolocation: BackgroundGeolocation) {

  }

  ngOnInit() {
    console.log(this.navParams.get('teste'))
  }

  ligar() {
    this.callNumber.callNumber("18001010101", true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));

  }

  push() {

    this.backgroundGeolocation.stop();

  }

  start() {
    this.backgroundGeolocation.start();
  }

  

}
