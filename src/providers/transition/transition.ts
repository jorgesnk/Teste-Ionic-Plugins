import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the TransitionProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TransitionProvider {

  constructor() {
    console.log('Hello TransitionProvider Provider');
  }



  retornar() {
    var cord = {
    "geocoded_waypoints": [
        {
            "geocoder_status": "OK",
            "place_id": "ChIJHQ1oeeZrzpQRBTwK_o0Jx40",
            "types": [
                "street_address"
            ]
        },
        {
            "geocoder_status": "OK",
            "place_id": "EkRWaWEgTGF0ZXJhbCBOb3J0ZSwgMTI5LTQwOSAtIFBvcnRvIGRhIElncmVqYSwgR3VhcnVsaG9zIC0gU1AsIEJyYXNpbA",
            "types": [
                "street_address"
            ]
        }
    ],
    "routes": [
        {
            "bounds": {
                "northeast": {
                    "lat": -23.4722364,
                    "lng": -46.4398223
                },
                "southwest": {
                    "lat": -23.683409,
                    "lng": -46.5613214
                }
            },
            "copyrights": "Dados cartográficos ©2017 Google",
            "legs": [
                {
                    "distance": {
                        "text": "28,1 mi",
                        "value": 45207
                    },
                    "duration": {
                        "text": "50 minutos",
                        "value": 3023
                    },
                    "end_address": "Via Lateral Norte, 129-409 - Porto da Igreja, Guarulhos - SP, Brasil",
                    "end_location": {
                        "lat": -23.4826892,
                        "lng": -46.5355599
                    },
                    "start_address": "Av. Cap. João, 2052 - Matriz, Mauá - SP, 09360-120, Brasil",
                    "start_location": {
                        "lat": -23.683409,
                        "lng": -46.45383959999999
                    },
                    "steps": [
                        {
                            "distance": {
                                "text": "1,1 mi",
                                "value": 1744
                            },
                            "duration": {
                                "text": "3 minutos",
                                "value": 188
                            },
                            "end_location": {
                                "lat": -23.6699241,
                                "lng": -46.4599073
                            },
                            "html_instructions": "Siga na direção <b>norte</b> na <b>Av. Cap. João</b> em direção à <b>R. Marne</b>",
                            "polyline": {
                                "points": "htpoCn_pzG{@No@JYFMBODWFE@ODYJOD[HMDMDMBOBE?I@e@DG@wBLM@Q@q@@M@E?G?M?E?MAG?MAKAG?EAEAGAKAICOCQCQCGAG?IAOAQCOAO?QAOAG@MAq@BeBJgBHoAFmBHmAF_@?U@[?]@i@FOBKBE@UJKDEDGBYPu@d@o@`@[TWRQNqAnAqAnAi@h@EBIJA?KJi@h@GFOPEFEHIPIRUx@GPWz@Qn@i@fAKRGJKJUJABIJMRi@n@UTSHYJWD[FA?KDQFQJIFC@KDMFIFA@"
                            },
                            "start_location": {
                                "lat": -23.683409,
                                "lng": -46.45383959999999
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0,2 mi",
                                "value": 374
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 52
                            },
                            "end_location": {
                                "lat": -23.6679133,
                                "lng": -46.4627997
                            },
                            "html_instructions": "Continue em frente para permanecer na <b>Av. Cap. João</b>",
                            "maneuver": "straight",
                            "polyline": {
                                "points": "~_noCleqzGIFaAt@a@^GFGJWh@OZe@x@_@l@EPGL]j@g@z@w@jBYl@"
                            },
                            "start_location": {
                                "lat": -23.6699241,
                                "lng": -46.4599073
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0,5 mi",
                                "value": 743
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 81
                            },
                            "end_location": {
                                "lat": -23.6642687,
                                "lng": -46.4689038
                            },
                            "html_instructions": "Continue para <b>Av. João Ramalho</b>",
                            "polyline": {
                                "points": "lsmoCnwqzGc@|@]p@qMhVqB~DGP]z@k@zA"
                            },
                            "start_location": {
                                "lat": -23.6679133,
                                "lng": -46.4627997
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0,3 mi",
                                "value": 418
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 35
                            },
                            "end_location": {
                                "lat": -23.6626604,
                                "lng": -46.4719039
                            },
                            "html_instructions": "Vire à <b>direita</b> em direção à <b>SP-017</b> (placas para <b>Avenida Jacu-Pêssego</b>)",
                            "maneuver": "turn-right",
                            "polyline": {
                                "points": "t|loCr}rzGIDQHEBIDEBI@WJSJKHQRIH_AjBm@bAMVCFELALAP?J@F@FBHBHDDBFNPBDFLDHDJBN?PCRGNGHEDEDEDGBEBG@G@E@C@E@EBOF"
                            },
                            "start_location": {
                                "lat": -23.6642687,
                                "lng": -46.4689038
                            },
                            "travel_mode": "DRIVING"
                        },
                    
                        {
                            "distance": {
                                "text": "0,1 mi",
                                "value": 222
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 13
                            },
                            "end_location": {
                                "lat": -23.5174406,
                                "lng": -46.4553447
                            },
                            "html_instructions": "Mantenha-se à <b>esquerda</b> para continuar em <b>Av. Jacu-Pêssego Nova Trabalhadores</b>",
                            "maneuver": "keep-left",
                            "polyline": {
                                "points": "fspnC`jpzGeAH[@g@@Q@a@AQAQASCUEWEk@Mw@Q"
                            },
                            "start_location": {
                                "lat": -23.5193995,
                                "lng": -46.4555294
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0,4 mi",
                                "value": 598
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 34
                            },
                            "end_location": {
                                "lat": -23.5124828,
                                "lng": -46.4567543
                            },
                            "html_instructions": "Continue para <b>Viaduto Antônio Sanches de Larragoiti Júnior</b>",
                            "polyline": {
                                "points": "~fpnCzhpzGu@Qi@MSEQCSC[E_@Ai@AU?U?O@O@YB_@FYFa@Hm@Re@RQJMHEBk@^uAdAy@j@ULSJOHSH]L[HUD[Fm@F"
                            },
                            "start_location": {
                                "lat": -23.5174406,
                                "lng": -46.4553447
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "2,1 mi",
                                "value": 3302
                            },
                            "duration": {
                                "text": "4 minutos",
                                "value": 245
                            },
                            "end_location": {
                                "lat": -23.4852089,
                                "lng": -46.4528571
                            },
                            "html_instructions": "Continue para <b>Av. Jacu-Pêssego Nova Trabalhadores</b>",
                            "polyline": {
                                "points": "~gonCtqpzGcBJQ?oBJa@@o@BmADS@S@U?W?UA[CYCYE]GQEOE{A_@QEa@Kk@Ou@QSE_@GYE_@C[A_@AS@U@O@[DWBQFQDg@Ra@Ra@VQLc@XOJSPk@b@g@\\UNg@VWLu@\\cA^i@PYHo@NuAZeANq@Ji@FUBMBW@O@U@]?_@?e@EMC[GOEOEQGOEMGYOWQ_@[_@_@UWuA_BkAsAe@i@_@_@MKWSKIMIOKSKQIe@Su@Wu@Sg@MkBg@a@K_A[kBq@a@OyAi@{@[QIsAg@YOYOUOYQUQWSUS_AcAWYQQMMSQSKMIECWMEAOGQEEAKCWEUCOCSA]?]@G@UBOB[D_@LKDGBOH{@`@e@ROF[HOBWFO@[DK@WBK?[@[A_@EK?UC[EQEqB]m@IeAMo@G]CQAWAi@Co@?[?[?iBBe@@K@"
                            },
                            "start_location": {
                                "lat": -23.5124828,
                                "lng": -46.4567543
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0,7 mi",
                                "value": 1127
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 76
                            },
                            "end_location": {
                                "lat": -23.4807382,
                                "lng": -46.4536991
                            },
                            "html_instructions": "Pegue a rampa de acesso à <b>SP-70</b> à <b>esquerda</b> em direção a <b>Ayrton Senna</b>/<b>Aerop. Guarulhos</b>/<b>Marg. Tietê</b>",
                            "polyline": {
                                "points": "p}inCjyozGG@E?G@S@eA@_BDoABsCFiADmADu@@{BBkEFW@W?M?KAKCOCICKCKGMIIEIGGIKKGMGKEMCKCICOAOAM?S?K@OBMF[HQFMHOFGFIDCFGFCDCFAHCL?N?D?D@D@F@D@DBB@DDDBBBDF@BBFBFBJDP@JBJ@@?@BBF@`AbJ"
                            },
                            "start_location": {
                                "lat": -23.4852089,
                                "lng": -46.4528571
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "7,4 mi",
                                "value": 11908
                            },
                            "duration": {
                                "text": "8 minutos",
                                "value": 491
                            },
                            "end_location": {
                                "lat": -23.5065548,
                                "lng": -46.551613
                            },
                            "html_instructions": "Mantenha-se à <b>esquerda</b>, siga as indicações para <b>São Paulo</b>/<b>Aeroporto</b> e pegue a <b>Rod. Ayrton Senna</b>",
                            "maneuver": "keep-left",
                            "polyline": {
                                "points": "rainCr~ozGrAjMPxAPdBJdAJ~@JjANdBBd@FhAFL?@@FBX@VBXDh@Fp@Fx@@V@P@X@X@X@^?l@?~@@PDPFPEzBE`BG~@Eb@Gt@SxASlBs@pEu@bFWnA_@|AMb@Sp@Mb@Of@_@fAk@tAUh@[r@Ub@S`@KRINWd@U^Wb@W`@U\\ORY`@Y^UZm@t@Y^YZ_@f@_@b@[`@QPW\\i@v@sDnFy@jAwB|C]h@c@n@Wd@Yb@Wj@MVOX[z@[p@Ql@Wz@]hBMz@Ij@Gf@Ep@En@Ev@AdA?lADjBBv@VdGVtGLbDFxADrA@fC?vACjAIjBEj@IfAGl@m@lFq@pGUjBgAlJ?VMfAEh@KfA[vCSfCMbBEtAEh@Cp@Ab@Cb@Aj@Ch@Ad@CdAAZAVAXAbBAr@@lA@rB@rBBp@BbABnAFvA@ZFdADn@Fz@Fz@F`AFj@HfANxALdALdAHf@Hr@P~@PhARzAVpARfANn@TbAPp@\\vAb@bBj@nBNf@d@tAd@xAVp@d@nATj@Xt@Xn@Rh@R`@N\\r@~At@`BXj@NVTd@PXPXHN~@~AHNhC|DdBjC`A|Ad@t@Xf@l@jAXl@Rd@Rd@j@zA^fA|@fCDHjBnFp@hBVn@L\\P`@`@|@R`@PZR^b@t@LPRZ`@j@LPFHTVPTZ\\DHLJZ^^`@x@~@x@z@r@x@LL~AhBjArAj@l@r@x@xA`BHFfCpCDBvA|AdAjAf@j@NNDFTXPTHJRXV^l@|@LRLNj@z@LP~@tAFJxAzBLTfDfFFJvAzBT^Zd@FHNX\\f@d@t@f@v@r@fAz@pAb@p@xA|BLPLRNTb@r@LPZf@fAbBRXdA`Bd@r@f@t@Zd@V\\TZFHFHDDHJXZNPDDJJTRJHHJHFLJTPLJ`@VPJPLRJNHTLNHPFLFPHRFRHb@Nh@L\\JPDPDRBRDTD`@Fj@FrBTfCZbAJd@F|@JhAL|@JvAN\\FJ@`AN^Hd@Jj@NVJPFNFd@T^Rj@ZTNLJXR\\Z\\\\XZVX`@l@V`@PXNZP^DLHPL\\Nh@Pl@DPDRDTJp@Jp@B^Dd@XnDHz@Bb@VzBTbB"
                            },
                            "start_location": {
                                "lat": -23.4807382,
                                "lng": -46.4536991
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0,7 mi",
                                "value": 1193
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 58
                            },
                            "end_location": {
                                "lat": -23.5150826,
                                "lng": -46.5569583
                            },
                            "html_instructions": "Continue para <b>Av. Marginal Tietê</b>",
                            "polyline": {
                                "points": "|bnnCpbc{GRfANn@Ld@Pl@`@nAVp@LZT`@Vh@Xh@LPPVNVRXb@f@PTZ\\VTXX^\\r@f@f@Xd@Xf@VJBbAb@j@RtA^ZF`@HhARj@HjANlBRbALl@DfBLXBX@l@@n@?f@?f@?XAl@C"
                            },
                            "start_location": {
                                "lat": -23.5065548,
                                "lng": -46.551613
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0,4 mi",
                                "value": 612
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 60
                            },
                            "end_location": {
                                "lat": -23.5156286,
                                "lng": -46.5613214
                            },
                            "html_instructions": "Pegue a saída em direção a <b>BR-116</b>/<b>Dutra</b>/<b>BR-381</b>/<b>Fernão Dias</b>",
                            "maneuver": "ramp-right",
                            "polyline": {
                                "points": "fxonC~cd{GHBF@J@\\?N@L@J@N@LDHBDBLFLFDDDDDDJJFHHPFNFNBLDRDRt@lFNhA@H?J@J?J?N?N?REb@AH?F@JOn@K`@GRABQ\\MNMJQJSFC@OBI@K?S@EAE@E@CBGD"
                            },
                            "start_location": {
                                "lat": -23.5150826,
                                "lng": -46.5569583
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0,9 mi",
                                "value": 1479
                            },
                            "duration": {
                                "text": "2 minutos",
                                "value": 130
                            },
                            "end_location": {
                                "lat": -23.5029144,
                                "lng": -46.5589284
                            },
                            "html_instructions": "Vire à <b>direita</b> na <b>Av. Educador Paulo Freire</b>",
                            "maneuver": "turn-right",
                            "polyline": {
                                "points": "t{onCf_e{GA?]Ik@QWIWIUIWIYMsAk@c@SqF}BkGiCsCkAc@Oc@OkA]c@Ky@MaAIQASAOAY?U?]@yAFoBH{BH}@DO@iBHaBHwFVkCNqAFc@BG?G@"
                            },
                            "start_location": {
                                "lat": -23.5156286,
                                "lng": -46.5613214
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "220 pés",
                                "value": 67
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 4
                            },
                            "end_location": {
                                "lat": -23.5023375,
                                "lng": -46.5588875
                            },
                            "html_instructions": "Vire à <b>direita</b> na rampa de acesso para <b>Guarulhos</b>/<b>R. Janeiro</b>/<b>BR-381</b>",
                            "polyline": {
                                "points": "dlmnChpd{GCECCCAA?E?s@@Y?O@"
                            },
                            "start_location": {
                                "lat": -23.5029144,
                                "lng": -46.5589284
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0,5 mi",
                                "value": 759
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 43
                            },
                            "end_location": {
                                "lat": -23.4964223,
                                "lng": -46.5563444
                            },
                            "html_instructions": "Continue para <b>Av. Aricanduva</b>",
                            "polyline": {
                                "points": "rhmnC`pd{GY?k@@m@?O?k@?U?Y?W?[AS?WAwACoACoBGg@CUC[EQEQCQGUIQKSKQMQMOOOOOQMO[e@uBwCw@gAU]MQEEEC_@K"
                            },
                            "start_location": {
                                "lat": -23.5023375,
                                "lng": -46.5588875
                            },
                            "travel_mode": "DRIVING"
                        },
                     
                        {
                            "distance": {
                                "text": "0,1 mi",
                                "value": 189
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 13
                            },
                            "end_location": {
                                "lat": -23.4874077,
                                "lng": -46.54295219999999
                            },
                            "html_instructions": "Pegue a saída em direção a <b>Cd Telhanorte</b>/<b>Codema</b>/<b>Sodré Santoro</b>",
                            "maneuver": "ramp-right",
                            "polyline": {
                                "points": "ppjnCjva{GCc@CGMWi@oA_AgBg@aA"
                            },
                            "start_location": {
                                "lat": -23.4882543,
                                "lng": -46.5445435
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0,6 mi",
                                "value": 919
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 73
                            },
                            "end_location": {
                                "lat": -23.4826892,
                                "lng": -46.5355599
                            },
                            "html_instructions": "Continue para <b>Via Lateral Norte</b>",
                            "polyline": {
                                "points": "hkjnClla{G_@o@[o@u@sAsBqDu@sAqBwD{AsCa@u@{@yAAAc@w@wByD_D{Fi@_A"
                            },
                            "start_location": {
                                "lat": -23.4874077,
                                "lng": -46.54295219999999
                            },
                            "travel_mode": "DRIVING"
                        }
                    ],
                    "traffic_speed_entry": [],
                    "via_waypoint": []
                }
            ],
            "overview_polyline": {
                "points": "htpoCn_pzGqE|@eCn@oG^qAEaEc@gK\\qFRsBLqCxAuBzAsElE_BbBo@hB_@lA{@vBS^a@VcArAi@^q@P{@ToAt@sBhBmBlDsAfCsChGcQh\\e@lAu@`BWLq@V{@r@_CnEIx@Jb@\\d@Vr@S~@u@^_@NoHOgPa@aFSuBc@}BcAqBaBkFkG}DiFaCaEk@qA_BkH}AgJoAeE_A}BoAkBeDgDi@k@uJyGiG}DoBu@uDq@eKk@yCy@mAo@kL}IaDoDkD{G_CsDw@s@iCoA{Ba@{BG{W\\uJKeYo@aEIsCO_AO{B_AuCkCyGsHoGgHkAgBkAoCgBiIw@wBeAkBuFcG}BeBuCiAqCg@sBIoCJsCh@oY`IaM`A_Bf@yAz@kDrDyB~AuCx@sMv@cNh@iMVmCU_Fq@_FuAuBgA_C}AeB{@yAa@sDYyAH{B\\wEr@qA?mBM{@QoBq@mDuAmDe@{AAaCVsQvCgCj@oBp@eD|AwKhF{G|ByJhDmEnA{CVkCEiAOeZkC{Kk@kLoA_Ug@{ER{Dl@cGn@iLVaKRsFV_NvBmCf@mBl@qa@|PcEtBqBvAeCxBqCdCwDfDmI~GiFvDoB`AcDnAoBh@aSxDiBJcBOwBg@gLiEsIyCgD]gIb@mB?sAQyGsAuBCyANoCx@qAx@yDjC}Aj@cE`@sEPkCHcBIuG{AcCe@oBEyALmBt@eFnDyDbBiEfAcGp@qBImA[oAo@kDsD_DiDaAs@aCaAkFuAcNeF_BcAeCeCgA}@q@]s@SqAOyAFwA\\yBbAsA\\oALcBEeJmAqBKqEBaGPqWf@}@Eq@Si@a@a@s@Mu@?}@\\iA^e@\\Ql@Cn@V^hAHRhAdJdBdPt@vHZtE`@~DR~F@pALb@Y`IcBnMmArHm@`CqAdEsBvE}CnF{EjGuNfSsBbDqAxCm@~Au@dDe@`EMzFx@~T\\xMSzH}End@aApK]tGU|HC~FJ|Ir@rNbBtNpA~HtA|FdCpIxBfGnF|LfHnLfFfInBdErI|UrD`HnChDl[t]zCxDdHlKfU`^zLzQpBtBtCnBnClAlEdAzPnB~Dd@rDt@~Ap@nBjAnBhBbBbCp@zAt@fCb@lCl@pHdAjIpArErAxChAjBdBtBdCtB`CnA`F~AbFv@fIt@pCFvCEtBNjAn@d@v@VdAfAlI@v@GhAa@pBo@|@y@Xo@@WLcEqAuRgIgHiCqDe@sAC}Rx@yNr@WGoDBaFAoHQkBSkAa@gAw@{GgJKI_@KyDgGi@{@aHoKiJoNiDsFwHwMmDiGaB}CGk@_DqGkO{XcLiS"
            },
            "summary": "SP-017",
            "warnings": [],
            "waypoint_order": []
        }
    ],
    "status": "OK"
}
    return cord;

  }

}
