import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import * as ImgCache from 'imgcache.js';

@Component({
  templateUrl: 'app.html',

})
export class MyApp {
  rootPage = TabsPage;



  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      // activated debug mode
      ImgCache.options.debug = true;
      // page is set until img cache has started
      ImgCache.init(() => {
        console.log("cache is init");
      },
        () => { console.error('ImgCache init: error! Check the log for errors'); });
    });
  }
}
