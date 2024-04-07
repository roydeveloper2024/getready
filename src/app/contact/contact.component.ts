import { Component, OnInit, ErrorHandler, ChangeDetectorRef, NgZone } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { environment as env } from '../../environments/environment';
import { interval, Subscription, Observable, Subject } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { SubmitRespon } from '../classes/submit-respon';
import { HttpEventType, HttpEvent, HttpErrorResponse } from '@angular/common/http';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  get cf() { return this.contactForm.controls; }

  constructor(private _dataServe: DataService, private changeDetectorRefs: ChangeDetectorRef, private _formBuilder: FormBuilder, private _msgServe: MessageService) {


	}

  ngOnInit(): void {

    this.contactForm = this._formBuilder.group({
			name: ['',  Validators.compose([Validators.required])],
			email: ['', Validators.compose([Validators.required, Validators.email])],
      contact: ['',  Validators.compose([Validators.required])],
      message: ['', Validators.compose([Validators.required])],
		});

  }


  subOrderRes = new SubmitRespon();


  submitContact(){
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

}
