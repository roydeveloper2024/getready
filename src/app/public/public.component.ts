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
	selector: 'app-public',
	templateUrl: './public.component.html',
	styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

	host: string;

	displayVideo: boolean = false;

	featuredProduct = new TblConfig([
		{ field: "prod_id", header: 'prod_id' },
		{ field: "prod_title", header: 'prod_title' },
		{ field: "prod_desc", header: 'prod_desc' },
		{ field: "prod_details", header: 'prod_details' },
		{ field: "prod_disclaimer", header: 'prod_disclaimer' },
		{ field: "featured", header: 'featured' },
		{ field: "prod_gh_percent", header: 'prod_gh_percent' },
		{ field: "prod_G360", header: 'prod_G360' },
		{ field: "created_at", header: 'created_at' },
		{ field: "updated_at", header: 'updated_at' },
		{ field: "prod_type_id", header: 'prod_type_id' },
		{ field: "product_type", header: 'product_type' },
		{ field: "featured_image", header: 'featured_image' }
	]);

	newImage = new TblConfig([]);

	constructor(private _dataServe: DataService, private changeDetectorRefs: ChangeDetectorRef, private _formBuilder: FormBuilder, private _msgServe: MessageService) {
		this.host = env.dirProject;

	}

	trainingForm: FormGroup;

	get tf() { return this.trainingForm.controls; }

	ngOnInit(): void {

		this.newImage.tblVal = [{
			filename: "n1.png"
		},{
			filename: "n2.png"
		},{
			filename: "n3.png"
		},{
			filename: "n4.png"
		},{
			filename: "n5.png"
		},{
			filename: "n6.png"
		},{
			filename: "n7.png"
		},{
			filename: "n8.png"
		}]

		this.getAllFeaturedProduct();


		this.trainingForm = this._formBuilder.group({
			preference: ['', Validators.compose([Validators.required])],
			email: ['', Validators.compose([Validators.required, Validators.email])],

			training_type: ['', Validators.compose([Validators.required])],
			first_name: ['', Validators.compose([Validators.required])],

			last_name: ['', Validators.compose([Validators.required])],
			middle_name: [''],
			location: [''],
			mobile_number: ['', Validators.compose([Validators.required])],
			number_of_attendee: ['', Validators.compose([Validators.required])],
			attendee_type: ['', Validators.compose([Validators.required])],
			company_name: ['', Validators.compose([Validators.required])],
			company_size: ['', Validators.compose([Validators.required])],
			company_desc: ['', Validators.compose([Validators.required])],
			further_desc: [''],
		});
	}

	displayEmergencyHotlineModal: boolean = false;
	openEmergencyHotlineModal() {
		this.displayEmergencyHotlineModal = true;
	}

	displayNeedHelp: boolean = false;
	displayWillingToHelp: boolean = false;



	getAllFeaturedProduct() {
		this._dataServe.getAllFeaturedProduct().subscribe((event: HttpEvent<any>) => {
			if (event.type === HttpEventType.Response) {

				if (event.status == 200) {

					let body = event.body;
					let error = body.error;
					let msg = body.message;

					console.log(body);

					if (!error) {
						this.featuredProduct.tblVal = body.data.product;

					} else {
						this.featuredProduct.tblVal = [];

					}

				} else {
					alert(event.status);
				}

			}
		});

	}

	addToCart(data){
		this._dataServe.addProductToCart(data);
		this._msgServe.add({severity:'success', summary: "Item added to cart" });
	}

	subOrderRes = new SubmitRespon();

	submitTrainingForm() {
		console.log(this.trainingForm.value);
		if (!this.trainingForm.valid || this.subOrderRes.load) return false;
		this.subOrderRes.reset();
		this.subOrderRes.load = true;

		let value = this.trainingForm.value;

		this._dataServe.addTraining(value).subscribe((event: HttpEvent<any>) => {
			if (event.type === HttpEventType.Response) {
				if (event.status == 200) {
					let body = event.body;
					let { error, message } = body;

					console.log(body);
					if (!error) {
						this._msgServe.add({ severity: 'success', summary: message });
					} else {
						this._msgServe.add({ severity: 'error', summary: message });
					}

					this.trainingForm.reset();

					this.subOrderRes.load = false;

				} else {
					alert(event.status);
				}
			}
		}, (err: HttpErrorResponse) => {
			alert(JSON.stringify(err));
		});
	}

}
