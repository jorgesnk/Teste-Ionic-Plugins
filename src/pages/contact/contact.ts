import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransitionProvider } from '../../providers/transition/transition'
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker,
} from '@ionic-native/google-maps';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {

  public build: GoogleMap
  constructor(private ts: TransitionProvider, public navCtrl: NavController,
    private googleMaps: GoogleMaps,) {
  }



  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    var element: HTMLElement = document.getElementById('map');
    this.build = this.googleMaps.create(element);
    // listen to MAP_READY event
    // You must wait for this event to fire before adding something to the map or modifying it in anyway
    this.build.one(GoogleMapsEvent.MAP_READY).then(
      () => {
        console.log('Map is ready!');
        let position: CameraPosition = {
          target: {
            lat: 43.0741904,
            lng: -89.3809802
          },
          zoom: 18,
          tilt: 30
        };

        // move the map's camera to position
        this.build.moveCamera(position);

        var lat = new LatLng(43.0741902, -89.3809805);

        var makOpt: MarkerOptions;
        makOpt = { icon: 'blue', position: lat, title: 'ola' };
        

        this.build.addMarker(makOpt)
      
          .then((marker: Marker) => {
            marker.showInfoWindow();
            marker.setDisableAutoPan(true);
            marker.addEventListener(GoogleMapsEvent.INFO_CLICK).subscribe(function(){
              console.log('foiii');
              alert('foi mesmo');
            })
          });

      }
    );


  }

  teste() {
    var lat = new LatLng(43.0741902, -89.3809805);
    var a
    a = this.googleMaps._encoding.decodePath("htpoCn_pzGqE|@eCn@oG^qAEaEc@gK\\qFRsBLqCxAuBzAsElE_BbBo@hB_@lA{@vBS^a@VcArAi@^q@P{@ToAt@sBhBmBlDsAfCsChGcQh\\e@lAu@`BWLq@V{@r@_CnEIx@Jb@\\d@Vr@S~@u@^_@NoHOgPa@aFSuBc@}BcAqBaBkFkG}DiFaCaEk@qA_BkH}AgJoAeE_A}BoAkBeDgDi@k@uJyGiG}DoBu@uDq@eKk@yCy@mAo@kL}IaDoDkD{G_CsDw@s@iCoA{Ba@{BG{W\\uJKeYo@aEIsCO_AO{B_AuCkCyGsHoGgHkAgBkAoCgBiIw@wBeAkBuFcG}BeBuCiAqCg@sBIoCJsCh@oY`IaM`A_Bf@yAz@kDrDyB~AuCx@sMv@cNh@iMVmCU_Fq@_FuAuBgA_C}AeB{@yAa@sDYyAH{B\\wEr@qA?mBM{@QoBq@mDuAmDe@{AAaCVsQvCgCj@oBp@eD|AwKhF{G|ByJhDmEnA{CVkCEiAOeZkC{Kk@kLoA_Ug@{ER{Dl@cGn@iLVaKRsFV_NvBmCf@mBl@qa@|PcEtBqBvAeCxBqCdCwDfDmI~GiFvDoB`AcDnAoBh@aSxDiBJcBOwBg@gLiEsIyCgD]gIb@mB?sAQyGsAuBCyANoCx@qAx@yDjC}Aj@cE`@sEPkCHcBIuG{AcCe@oBEyALmBt@eFnDyDbBiEfAcGp@qBImA[oAo@kDsD_DiDaAs@aCaAkFuAcNeF_BcAeCeCgA}@q@]s@SqAOyAFwA\\yBbAsA\\oALcBEeJmAqBKqEBaGPqWf@}@Eq@Si@a@a@s@Mu@?}@\\iA^e@\\Ql@Cn@V^hAHRhAdJdBdPt@vHZtE`@~DR~F@pALb@Y`IcBnMmArHm@`CqAdEsBvE}CnF{EjGuNfSsBbDqAxCm@~Au@dDe@`EMzFx@~T\\xMSzH}End@aApK]tGU|HC~FJ|Ir@rNbBtNpA~HtA|FdCpIxBfGnF|LfHnLfFfInBdErI|UrD`HnChDl[t]zCxDdHlKfU`^zLzQpBtBtCnBnClAlEdAzPnB~Dd@rDt@~Ap@nBjAnBhBbBbCp@zAt@fCb@lCl@pHdAjIpArErAxChAjBdBtBdCtB`CnA`F~AbFv@fIt@pCFvCEtBNjAn@d@v@VdAfAlI@v@GhAa@pBo@|@y@Xo@@WLcEqAuRgIgHiCqDe@sAC}Rx@yNr@WGoDBaFAoHQkBSkAa@gAw@{GgJKI_@KyDgGi@{@aHoKiJoNiDsFwHwMmDiGaB}CGk@_DqGkO{XcLiS")
    console.log(a)
    this.build.addPolyline({ points: a })
  }


  rota() {

  }

  limpar() {
    this.build.clear();
  }



}
