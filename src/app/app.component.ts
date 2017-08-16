import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal, OSNotification } from '@ionic-native/onesignal';
import { TabsPage } from '../pages/tabs/tabs';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private oneSignal: OneSignal,
    private splashScreen: SplashScreen,
    private backgroundGeolocation: BackgroundGeolocation) {

    //inicio push
    platform.ready().then(() => {
      statusBar.styleDefault();
      this.oneSignal.startInit('fb8143c0-d762-4e12-a247-c9901f18cc96', '655454125432');
      this.oneSignal.getIds().then(data => {
      })

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
      this.oneSignal.handleNotificationReceived().subscribe((data) => {
        console.log(data);
        alert(data.payload.additionalData.teste);
      })
      this.oneSignal.handleNotificationOpened().subscribe(() => {
      });
      this.oneSignal.endInit();
      //fim push
      splashScreen.hide();
      this.geo();
    });
  }

  geo() {
    const config: BackgroundGeolocationConfig = {
      desiredAccuracy: 0,
      stationaryRadius: 0,
      distanceFilter: 0,
      startForeground:false,
      debug: true, //  enable this hear sounds for background-geolocation life-cycle.
      stopOnTerminate: false, // enable this to clear background location settings when the app terminates

    };
    this.backgroundGeolocation.configure(config)
      .subscribe((location: BackgroundGeolocationResponse) => {

        console.log(location);
        console.log('fui acionado')
        // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
        // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
        // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
        // this.backgroundGeolocation.finish(); // FOR IOS ONLY

      });

    // start recording location
    this.backgroundGeolocation.start()

    


    // If you wish to turn OFF background-tracking, call the #stop method.


  }



}
