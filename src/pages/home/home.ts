import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';


declare var navigator: any;
declare var Connection: any;
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, private platform: Platform) {


    }
}
