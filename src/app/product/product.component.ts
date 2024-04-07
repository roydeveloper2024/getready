import { Component, OnInit, ErrorHandler, ChangeDetectorRef } from '@angular/core';
import { Subscription, Observable, Subject } from 'rxjs';
import { HttpEventType, HttpProgressEvent, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

//import { TOCComponent } from '../component/toc/toc.component';
import { SubmitRespon } from '../classes/submit-respon';
import { TblConfig } from '../classes/tbl-config';

import { environment as env } from '../../environments/environment';

import { MessageService } from 'primeng/api';

import { ConfirmationService } from 'primeng/api';

import { DataService } from '../services/data/data.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery-9';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  host: string;

  prod_id: string;
  prod_info: any = {};
  prod_variant: any = [];
  prod_image: any = [];
  prod_first_variant: any = {};

  order_qty: number = 1;

  constructor(private _actvRoute: ActivatedRoute, private _dataServe: DataService, private _msgServe: MessageService) {
    this.host = env.dirProject;

    this._actvRoute.params.subscribe(params => {
      this.prod_id = params['prod_id'];
    });
  }

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];



  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: '',
        medium: '',
        big: '',
      }, {
        small: '',
        medium: '',
        big: '',
      }, {
        small: '',
        medium: '',
        big: '',
      }, {
        small: '',
        medium: '',
        big: '',
      }, {
        small: '',
        medium: '',
        big: '',
      },
    ];

    this.getProductById();
  }

  getProductById() {
    this._dataServe.getProductById(this.prod_id).subscribe((event: HttpEvent<any>) => {
      if (event.type === HttpEventType.Response) {

        if (event.status == 200) {

          let body = event.body;
          let error = body.error;
          let msg = body.message;



          if (!error) {
            this.prod_info = body.data.product;

            this.prod_variant = this.prod_info.variant;

            this.prod_first_variant = this.prod_info.first_variant;

            console.log(this.prod_first_variant);
            this.prod_image = this.prod_info.image;

            let gallery = [];

            for(let x = 0; x < this.prod_image.length; x++){

              let img_url = this.host+this.prod_image[x]['prod_img_filename'];

              gallery.push({
                small: img_url,
                medium: img_url,
                big: img_url,
              });
            }

            console.log(this.prod_info);

            this.galleryImages = gallery;

          } else {
            //this.productType = [];
          }

        } else {
          alert(event.status);
        }

      }
    });

  }


  addToCart(){
		this._dataServe.addProductToCart(this.prod_info);
		this._msgServe.add({severity:'success', summary: "Item added to cart" });
	}

}
