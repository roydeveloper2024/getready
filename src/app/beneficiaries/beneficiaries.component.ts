import { Component, OnInit, ErrorHandler, ChangeDetectorRef, NgZone } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { environment as env } from '../../environments/environment';
import { interval, Subscription, Observable, Subject } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { SubmitRespon } from '../classes/submit-respon';
import { HttpEventType, HttpEvent, HttpErrorResponse } from '@angular/common/http';

import { MessageService } from 'primeng/api';
import { TblConfig } from '../classes/tbl-config';

import { FacebookService, UIParams, UIResponse } from 'ngx-facebook-fb';

import { FbService } from '../services/fb/fb.service';



@Component({
	selector: 'app-beneficiaries',
	templateUrl: './beneficiaries.component.html',
	styleUrls: ['./beneficiaries.component.scss']
})
export class BeneficiariesComponent implements OnInit {

	contactForm: FormGroup;

	host: string;
	domain: string;

	get cf() { return this.contactForm.controls; }

	constructor(private fbServe: FbService, private fb: FacebookService, private _dataServe: DataService, private changeDetectorRefs: ChangeDetectorRef, private _formBuilder: FormBuilder, private _msgServe: MessageService) {
		this.host = env.dirProject;


		this.domain = env.host;

	}

	/**
   * This is a convenience method for the sake of this example project.
   * Do not use this in production, it's better to handle errors separately.
   * @param error
   */
	private handleError(error) {
		console.error('Error processing action', error);
	}

	shareById(data) {

		console.log(data);
		const options: UIParams = {
			method: 'share',
			href: this.domain + "sharepageById/donation/"+data.beneficiary_id,
		};


		this.fb.ui(options)
			.then((res: UIResponse) => {
				console.log('Got the users profile', res);
			})
			.catch(this.handleError);
	}

	share() {

		const options: UIParams = {
			method: 'share',
			href: this.domain + "sharepage/donation",
		};


		this.fb.ui(options)
			.then((res: UIResponse) => {
				console.log('Got the users profile', res);
			})
			.catch(this.handleError);

	}

	name = 'ngx sharebuttons';

	purposeOpt: any = [];

	beneficiaries = new TblConfig([

	]);

	displayWishList: boolean = false;

	selectedBeneficiary: any = {};
	beneficiaryNeeds: any = [];




	addToCart(data) {
		data['beneficiary_id'] = this.selectedBeneficiary.beneficiary_id;
		data['fullname'] = this.selectedBeneficiary.fullname;
		this._dataServe.addProductToDonateCart(data);
		this._msgServe.add({ severity: 'success', summary: "Item added to donation cart" });
	}

	openBeneficiaries(data) {

		this.displayWishList = true;
		this.selectedBeneficiary = data;
		this.beneficiaryNeeds = data.needs;

	}

	ngOnInit(): void {

		this.getAllAcceptedBeneficiaries();


		this.purposeOpt = [{
			"label": 'Choose',
			"value": null
		}, {
			"label": 'Personal Needs',
			"value": 'Personal Needs',
		}, {
			"label": 'Family Needs',
			"value": 'Family Needs',
		}, {
			"label": "Organization's Needs",
			"value": "Organization's Needs",
		}];


		this.contactForm = this._formBuilder.group({
			fullname: ['', Validators.compose([Validators.required])],
			purpose: ['', Validators.compose([Validators.required])],
			organization: ['', Validators.compose([Validators.required])],

			contact: ['', Validators.compose([Validators.required])],
			email: ['', Validators.compose([Validators.required, Validators.email])],
			address: ['', Validators.compose([Validators.required])],




		});

	}




	subOrderRes = new SubmitRespon();


	submitContact() {
		console.log(this.contactForm.value);
		if (!this.contactForm.valid || this.subOrderRes.load) return false;
		this.subOrderRes.reset();
		this.subOrderRes.load = true;

		let value = this.contactForm.value;

		this._dataServe.contactUs(value).subscribe((event: HttpEvent<any>) => {
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

					this.contactForm.reset();

					this.subOrderRes.load = false;

				} else {
					alert(event.status);
				}
			}
		}, (err: HttpErrorResponse) => {
			alert(JSON.stringify(err));
		});
	}


	getAllAcceptedBeneficiaries() {
		this._dataServe.getAllAcceptedBeneficiaries().subscribe((event: HttpEvent<any>) => {
			if (event.type === HttpEventType.Response) {

				if (event.status == 200) {

					let body = event.body;
					let error = body.error;
					let msg = body.message;

					console.log(body);

					if (!error) {
						this.beneficiaries.tblVal = body.data.beneficiary;

					} else {
						this.beneficiaries.tblVal = [];

					}


				} else {
					alert(event.status);
				}

			}
		});

	}

}
