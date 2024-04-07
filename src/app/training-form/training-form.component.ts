import { Component, OnInit, ErrorHandler, ChangeDetectorRef, NgZone } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { environment as env } from '../../environments/environment';
import { interval, Subscription, Observable, Subject } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { SubmitRespon } from '../classes/submit-respon';
import { HttpEventType, HttpEvent, HttpErrorResponse } from '@angular/common/http';

import { MessageService } from 'primeng/api';
@Component({
	selector: 'app-training-form',
	templateUrl: './training-form.component.html',
	styleUrls: ['./training-form.component.scss']
})
export class TrainingFormComponent implements OnInit {

	host: string;

	private subscriptions: Subscription[] = [];

	trainingForm: FormGroup;

	get tf() { return this.trainingForm.controls; }

	preferenceTypeOpt: any = [];
	trainingTypeOpt: any = [];
	attendeeTypeOpt: any = [];

	constructor(private _dataServe: DataService, private changeDetectorRefs: ChangeDetectorRef, private _formBuilder: FormBuilder, private _msgServe: MessageService) {
		this.host = env.dirProject;

	}

	ngOnDestroy() {

	}

	ngOnInit(): void {

		this.preferenceTypeOpt = [{
			"label": 'Choose',
			"value": null
		}, {
			"label": 'Online Video',
			"value": 'Online Video',
		}, {
			"label": 'In-house/On premise',
			"value": 'In-house/On premise',
		}, {
			"label": 'Outdoor',
			"value": 'Outdoor',
		}];

		this.trainingTypeOpt = [{
			"label": 'Choose',
			"value": null,
			"code": null
		}, {
			"label": 'Basic Life Support, Basic First Aid, CPR Training',
			"value": 'Basic Life Support, Basic First Aid, CPR Training',
		}, {
			"label": 'Earthquake Preparedness Seminar',
			"value": 'Earthquake Preparedness Seminar',
		}, {
			"label": 'Outdoor Survival Training',
			"value": 'Outdoor Survival Training',
		}, {
			"label": 'Water Rescue Training',
			"value": 'Water Rescue Training',
		}, {
			"label": 'Shallow Water Egress Training',
			"value": 'Shallow Water Egress Training',
		}, {
			"label": 'Emergency Evacuation',
			"value": 'Emergency Evacuation',
		}, {
			"label": 'High Angle Rescue Training',
			"value": 'High Angle Rescue Training',
		}, {
			"label": 'Fire Prevention and Preparedness Training',
			"value": 'Fire Prevention and Preparedness Training',
		}];


		this.attendeeTypeOpt = [{
			"label": 'Choose',
			"value": null,
		}, {
			"label": 'Individual',
			"value": 'Individual',
		}, {
			"label": 'Family',
			"value": 'Family',
		}, {
			"label": 'Company',
			"value": 'Company',
		}, {
			"label": 'Organization',
			"value": 'Organization',
		}];

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



	findWithAttr(array, attr, value) {
		for (var i = 0; i < array.length; i += 1) {
			if (array[i][attr] === value) {
				return i;
			}
		}
		return -1;
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