import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar,
    private oneSignal: OneSignal, splashScreen: SplashScreen) {
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

    });
  }
}
