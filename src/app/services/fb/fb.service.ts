import { Injectable } from '@angular/core';

import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { FacebookService, InitParams } from 'ngx-facebook-fb';

@Injectable({
  providedIn: 'root'
})
export class FbService {

  constructor(private fb: FacebookService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

    //Staging 3004543589762799
    457809579224472

    if (isPlatformBrowser(platformId)) {
      let initParams: InitParams = {
        appId: '3004543589762799',
        xfbml: true,
        version: 'v2.8'
      };

      fb.init(initParams);
    }

  }
}
