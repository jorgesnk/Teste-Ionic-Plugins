import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { CardIO } from '@ionic-native/card-io';
import { InAppPurchase } from '@ionic-native/in-app-purchase';
import { LocalNotifications } from '@ionic-native/local-notifications';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public selectDate = new Date();
  constructor(private iap: InAppPurchase, private cardIO: CardIO,
    private barcodeScanner: BarcodeScanner,
    public navCtrl: NavController, private admobFree: AdMobFree,
    private youtube: YoutubeVideoPlayer,
    private localNotifications: LocalNotifications, ) {

    const bannerConfig: AdMobFreeBannerConfig = {
      id: "ca-app-pub-6792308911607879/6693551819",
      autoShow: true,
      overlap: true,
    };
    this.admobFree.banner.config(bannerConfig);
    this.admobFree.banner.prepare()
      .then(() => {
      })
      .catch(e => console.log(e));
  }


  ngOnInit() {

  

  }





  teste() {
    this.youtube.openVideo('H7MvroNuEjY');
    alert('passsie');
  }

  scaner() {
    this.barcodeScanner.scan().then((barcodeData) => {
      alert(barcodeData);
      // Success! Barcode data is here
    }, (err) => {
      // An error occurred
    });
  }

  card() {
    console.log('tentei');
    this.cardIO.canScan().then((res: boolean) => {
      if (res) {
        let options = {
          requireCardholderName: true,
          requireExpiry: true,
          requireCCV: true,
          requirePostalCode: true,
          scanInstructions: "Scan the front of your card",
          scanExpiry: true,
          scanCardHolderName: true,
          guideColor: '#12be76',
          hideCardIOLogo: true
        };
        this.cardIO.scan(options).then((data) => {
          console.log("CONSOLEEEE   >>>>>> " + data.postalCode)
        }, err => {
          console.log(err);
          // An error occurred
        });
      }

    });

  }

  pursh() {
    this.iap
      .getProducts(['prod1', 'prod2',])
      .then((products) => {
        console.log(products);
        //  [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', price: '...' }, ...]
      })
      .catch((err) => {
        console.log(err);
      });


    this.iap
      .buy('prod1')
      .then((data) => {
        console.log(data);
        // {
        //   transactionId: ...
        //   receipt: ...
        //   signature: ...
        // }
      })
      .catch((err) => {
        console.log(err);
      });

  }
  tocar() {

    var d = new Date(this.selectDate);
    console.log(d);
    this.localNotifications.schedule({
      id: 1,
      title: 'ola',
      text: 'Single ILocalNotification',
      firstAt: d
    });
  }





}



