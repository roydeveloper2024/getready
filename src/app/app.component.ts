import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { DataService } from './services/data/data.service';


import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'easy21';

  displaySideCart: boolean = false;

  constructor(private _dataServe: DataService, @Inject(PLATFORM_ID) private platformId: Object) {


  }


  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      const tag = document.createElement('script');
      tag.src = "https://connect.facebook.net/en_US/sdk.js";
      document.body.appendChild(tag);
    }


    this._dataServe._openCartBS$.subscribe(res => {
      console.log(res);
      if (res) {
        this.displaySideCart = true;
      }
    });

  }



}
