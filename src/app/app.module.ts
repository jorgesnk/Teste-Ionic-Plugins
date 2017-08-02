import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { OneSignal } from '@ionic-native/onesignal';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { Device } from '@ionic-native/device';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AdMobFree} from '@ionic-native/admob-free';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { CardIO } from '@ionic-native/card-io';
import { InAppPurchase } from '@ionic-native/in-app-purchase';
import { GoogleMaps } from "@ionic-native/google-maps";
import { TransitionProvider } from '../providers/transition/transition';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    AdMobFree,
    SplashScreen,
    YoutubeVideoPlayer,
    BarcodeScanner,
    CardIO,
    InAppPurchase,
    LocalNotifications,
    OneSignal,
    NativePageTransitions,
    Device,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TransitionProvider,
    TransitionProvider,
    
  ]
})
export class AppModule {}
