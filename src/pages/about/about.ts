import { Component ,OnInit } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {

  constructor( public navParams:NavParams,public navCtrl: NavController) {

  }

  ngOnInit(){
    console.log(this.navParams.get('teste'))
  }

 

}
