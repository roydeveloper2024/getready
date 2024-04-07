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


@Component({
	selector: 'app-videos',
	templateUrl: './videos.component.html',
	styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

	host: string;

	hostVid: string;

	productVidList = new TblConfig([]);


	videoList = new TblConfig([]);


	constructor(private changeDetectorRefs: ChangeDetectorRef, private _router: Router, private _actvRoute: ActivatedRoute, private _dataServe: DataService, private _msgServe: MessageService) {
		this.host = env.dirProject;

	}

	ngOnInit(): void {

		this.getAllProductVid();
		this.getAllMyVid();

		this.hostVid = env.dirVideo;
	}

	selectedVid: any = {};

	displayVideo: boolean = false;

	playVid: boolean = false;

	playVideo(data) {
		this.selectedVid = data;

		this.displayVideo = true;

	}

	displayStyle = "none";
	loadingVid: boolean = false;



	openPopup(data) {
		this.loadingVid = true;
		this.selectedVid = data;

		this.displayStyle = "block";

		// this.changeDetectorRefs.detectChanges();
		setTimeout(() => {
			this.playVid = true;
			this.loadingVid = false;
		}, 2000);

	}


	displayStyleVid = "none";
	selectedVideo: any = {};


	openPopupVid(data) {
		this.loadingVid = true;
		this.selectedVideo = data;

		this.displayStyleVid = "block";

		// this.changeDetectorRefs.detectChanges();
		setTimeout(() => {
			this.playVid = true;
			this.loadingVid = false;
		}, 2000);

	}



	closePopup() {
		this.playVid = false;
		this.loadingVid = false;
		this.displayStyle = "none";


		this.displayStyleVid = "none";

	}


	getAllMyVid() {
		this._dataServe.getAllMyVid().subscribe((event: HttpEvent<any>) => {
			if (event.type === HttpEventType.Response) {

				if (event.status == 200) {

					let body = event.body;
					let error = body.error;
					let msg = body.message;

					console.log(body);

					if (!error) {
						// this.productInfo = body.data.product;

						// this.imagesInfo = this.productInfo.image;
						this.videoList.tblVal = body.data.video;




					} else {
						this.videoList.tblVal = [];

					}

				} else {
					alert(event.status);
				}

			}
		});

	}




	getAllProductVid() {
		this._dataServe.getAllProductVid().subscribe((event: HttpEvent<any>) => {
			if (event.type === HttpEventType.Response) {

				if (event.status == 200) {

					let body = event.body;
					let error = body.error;
					let msg = body.message;

					console.log(body);

					if (!error) {
						this.productVidList.tblVal = body.data.product;

					} else {
						this.productVidList.tblVal = [];

					}



				} else {
					alert(event.status);
				}

			}
		});

	}

	addToCart(data) {
		this._dataServe.addProductToCart(data);
		this._msgServe.add({ severity: 'success', summary: "Item added to cart" });
	}

}
