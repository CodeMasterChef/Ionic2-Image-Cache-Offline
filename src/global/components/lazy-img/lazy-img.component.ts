import { Component, ElementRef, Input, OnInit} from '@angular/core';
import {Platform} from 'ionic-angular';

import * as ImgCache from 'imgcache.js';

/**
 * This component will be in charge of caching images and use them when the app is offline
 */
@Component({
  selector: 'lazy-img',
  template: `
    <div [ngClass]="{ 'placeholder': hidden }">
      <img [ngClass]="{ 'active': !hidden }" [src]="src" (load)="load()" (error)="error()" />
    </div>
  `
})
export class LazyImgComponent implements OnInit {

  @Input() src: string;

  public img: HTMLImageElement;
  public hidden: boolean;

  constructor(public el: ElementRef , public platform : Platform) {
    this.hidden = true;
  };
private checkImgCacheReady(): Promise<boolean> {
    return new Promise(resolve => {
      if (ImgCache.ready) {
        resolve(true);
      }
      else {
        document.addEventListener('ImgCacheReady', () => {
          resolve(true);
        }, false);
      }
    });
  }
  ngOnInit() {
    this.img = this.el.nativeElement.querySelector('img');
    this.img.crossOrigin = 'Anonymous';
    this.checkImgCacheReady().then( ()=> {
      ImgCache.isCached(encodeURI(this.src), (path: string, success: boolean) => {
      // if not, it will be cached
      if (success) {
        alert("load cached image");
        ImgCache.useCachedFile(this.img, () => { });

      } else {
        alert("save image to cache");
        ImgCache.cacheFile(this.src, () => {
          console.log("use cached image")
        });

      }

    });
    })  
  }

  /**
   * This function will show the image when it has loaded
   */
  load(): void {
    this.hidden = false;
  }

  /**
   * This function will be triggered when http request fails
   */
  error(): void {
   //this.img.remove();
  }

}
