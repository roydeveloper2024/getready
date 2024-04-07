import { Component, OnInit, ErrorHandler, ChangeDetectorRef, NgZone } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { environment as env } from '../../environments/environment';
import { interval, Subscription, Observable, Subject } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { SubmitRespon } from '../classes/submit-respon';
import { HttpEventType, HttpEvent, HttpErrorResponse } from '@angular/common/http';

import { MessageService } from 'primeng/api';

import { TblConfig } from '../classes/tbl-config';


import { ConfirmationService } from 'primeng/api';
import { AuthService } from '../services/auth/auth.service';
import { CustomValidators } from '../classes/custom-validators';

@Component({
	selector: 'app-donation-program',
	templateUrl: './donation-program.component.html',
	styleUrls: ['./donation-program.component.scss']
})
export class DonationProgramComponent implements OnInit {

	host: string;

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


	displayFeaturedProduct = new TblConfig([
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

	productType: any = [];

	filterSearch: any;

	filterBy: any = ['prod_title'];
	filtered: boolean = false;

	category: string = undefined;




	contactForm: FormGroup;

	private subscriptions: Subscription[] = [];

	authenticated: boolean = false;
	displayAuth: boolean = false;

	get cf() { return this.contactForm.controls; }


	get sf() { return this.signUpForm.controls; }
	constructor(private _authServ: AuthService, private _dataServe: DataService, private changeDetectorRefs: ChangeDetectorRef, private _formBuilder: FormBuilder, private _msgServe: MessageService) {
		this.host = env.dirProject;

		this.subscriptions.push(
			this._authServ._loggedInBS$.subscribe(res => {
				console.log("Auth Check ", res);
				if (res || this._authServ.getUser()) {
					this.authenticated = true;
				} else {
					this.authenticated = false;
				}

			})
		);

	}

	purposeOpt: any = [];

	loginForm: FormGroup;
	signUpForm: FormGroup;

	genderOpt: any = [];


	displayEmergencyHotlineModal: boolean = false;
	openEmergencyHotlineModal() {
		this.displayEmergencyHotlineModal = true;
	}

	resetFilter() {
		this.filtered = false;
		this.displayFeaturedProduct.tblVal = [...this.featuredProduct.tblVal];

		//this._router.navigate(['/shop']);

		this.category = undefined;
		this.getAllProductPublic();
	}

	filterProductType(data) {
		// this.filterBy = ['prod_type_id'];
		// this.filterSearch = data.prod_type_id;
		// console.log(data);
		// this.displayFeaturedProduct.tblVal = [...this.featuredProduct.tblVal];

		this.filtered = true;
		// this.displayFeaturedProduct.tblVal = this.featuredProduct.tblVal.filter(item => item.prod_type_id === data.prod_type_id);


		this.category = data.prod_type_title;
		this.getAllProductPublic();
	}


	getAllProductType() {
		this._dataServe.getAllProductType().subscribe((event: HttpEvent<any>) => {
			if (event.type === HttpEventType.Response) {

				if (event.status == 200) {

					let body = event.body;
					let error = body.error;
					let msg = body.message;

					console.log(body);

					if (!error) {

						this.productType = body.data.productType;
					} else {
						this.productType = [];

					}

				} else {
					alert(event.status);
				}

			}
		});

	}

	getAllProductPublic() {
		this._dataServe.getAllProductPublic(this.category).subscribe((event: HttpEvent<any>) => {
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

					this.displayFeaturedProduct.tblVal = [...this.featuredProduct.tblVal];

				} else {
					alert(event.status);
				}

			}
		});

	}

	total: string = "0.00";

	wishList: any = [];

	addToCart(data) {
		this._dataServe.addProductToCart(data);
		this._msgServe.add({ severity: 'success', summary: "Item added to cart" });
	}

	sumTotal() {
		this.total = this.wishList.reduce((acc, cur) => {


			return acc + (cur['prod_var_price'] * cur['prod_qty']);
		}, 0);
	}

	emptyWish() {
		this._dataServe.emptyWish();
	}

	changeInput(data) {

		this._dataServe.updateWishList(this.wishList);
		this.sumTotal();
	}

	removeWishItem(data) {
		console.log(data);

		this._dataServe.removeWishItem(data);
	}

	ngOnInit(): void {

		this.wishList = this._dataServe.getProductFromWishList ? this._dataServe.getProductFromWishList : [];

		this.sumTotal();

		this.subscriptions.push(
			this._dataServe._newWishItemBS$.subscribe(res => {

				if (res) {

					console.log(JSON.stringify(res));

					this.wishList = res;
					this.sumTotal();

				}

			})
		);


		this.getAllProductPublic();

		this.getAllProductType();

		this.genderOpt = [{
			"label": "Select Gender",
			"value": null
		}, {
			"label": "Male",
			"value": "Male"
		}, {
			"label": "Female",
			"value": "Female"
		}, {
			"label": "LGBT",
			"value": "LGBT"
		}];

		this.loginForm = this._formBuilder.group({
			email: ['', Validators.compose([Validators.required])],
			password: ['', Validators.compose([Validators.required])],
		});


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
			"value": "Organization Needs",
		}];


		this.contactForm = this._formBuilder.group({
			fullname: ['', Validators.compose([Validators.required])],
			purpose: ['', Validators.compose([Validators.required])],

			why_need: ['', Validators.compose([Validators.required])],

			organization: [''],

			contact: ['', Validators.compose([Validators.required])],
			// email: ['', Validators.compose([Validators.required, Validators.email])],
			address: ['', Validators.compose([Validators.required])],

			tell_us_more: ['', Validators.compose([Validators.required])],
			attachment_1: [null, Validators.compose([Validators.required])],

		});


		const organization = this.contactForm.get('organization');

		this.contactForm.get('purpose').valueChanges.subscribe(res => {

			if (res == "Organization Needs") {
				organization.setValidators([Validators.required]);
			} else {
				organization.setValidators(null);
				organization.setValue(null);
			}

			organization.updateValueAndValidity();
		});


		this.signUpForm = this._formBuilder.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],

			name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
			contact: ['', Validators.compose([Validators.required, Validators.minLength(5)])],

			address: [''],

			gender: ['', Validators.compose([Validators.required])],

			password: ['',
				Validators.compose([
					Validators.minLength(6),
					Validators.required,
					// 2. check whether the entered password has a number
					// CustomValidators.patternValidator(/\d/, { hasNumber: true }),
					// 3. check whether the entered password has upper case letter
					// CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
					// 4. check whether the entered password has a lower-case letter
					// CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
					// 5. check whether the entered password has a special character
					// CustomValidators.patternValidator(this.passwordRegex, { hasSpecialChar: true })
				])
			],
			c_password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
		}, {
			validator: CustomValidators.MustMatch('password', 'c_password')
		});

	}

	public imagePath;
	imgURL: any;
	public message: string;




	onFileChange(event) {

		if (event.target.files.length === 0)
			return;

		var mimeType = event.target.files[0].type;
		if (mimeType.match(/image\/*/) == null) {
			this.message = "Only images are supported.";
			return;
		}

		const max_size = 2097152;
		const allowed_types = ['image/png', 'image/jpeg'];
		const max_height = 1200;
		const max_width = 630;


		const min_height = 600;
		const min_width = 315;


		if (event.target.files[0].size > max_size) {
			this.message =
				'Maximum size allowed is ' + max_size / 1000 + 'Mb';

			return false;
		}

		var reader = new FileReader();
		this.imagePath = event.target.files;
		reader.readAsDataURL(event.target.files[0]);
		reader.onload = (e: any) => {


			const image = new Image();
			image.src = e.target.result;

			image.onload = rs => {
				const img_height = rs.currentTarget['height'];
				const img_width = rs.currentTarget['width'];

				console.log(img_height, img_width);

				if (img_height < min_height && img_width < min_width) {
					this.message =
						'Minimum dimentions allowed ' +
						min_height +
						'*' +
						min_width +
						'px';
					return false;
				} else {
					const imgBase64Path = e.target.result;
					// this.cardImageBase64 = imgBase64Path;
					// this.isImageSaved = true;
					// this.previewImagePath = imgBase64Path;

					this.imgURL = imgBase64Path;
				}
			}



		}

		if (event.target.files.length > 0) {
			const file = event.target.files[0];
			this.contactForm.patchValue({
				attachment_1: file
			});
		}
	}

	submit = new SubmitRespon();

	submitLoginForm(e) {

		if (!this.loginForm.valid || this.submit.load) return false;
		this.submit.reset();
		this.submit.load = true;


		let value = this.loginForm.value;

		this._authServ.signIn(this.loginForm.value).subscribe((event: HttpEvent<any>) => {

			if (event.type === HttpEventType.Response) {

				if (event.status == 200) {

					let body = event.body;
					let { error, message } = body;

					console.log(body);

					if (!error) {
						this._msgServe.add({ severity: 'success', summary: message });

						this._authServ.token = body.data.token;
						this._authServ.login(body.data);

						// //location.reload();
						// // this._router.navigateByUrl(this.returnUrl);
						// this._router.navigate(['/']);



						this.submitDonor();

					} else {

						this._msgServe.add({ severity: 'error', summary: message });
					}


					this.loginForm.reset();
					this.loginForm.enable();
					this.submit.load = false;

					this.displayAuth = false;

				} else {
					alert(event.status);
				}

			}

		}, (err: HttpErrorResponse) => {

			console.log(err);
		});
	}


	subOrderRes = new SubmitRespon();


	displaySuccessDialog: boolean = false;

	submitDonor() {


		if (!this.authenticated) {

			this.displayAuth = true;
			return false;
		}


		console.log(this.contactForm.value);

		if (!this.contactForm.valid || this.subOrderRes.load) return false;
		this.subOrderRes.reset();
		this.subOrderRes.load = true;

		let value = this.contactForm.value;

		console.log(JSON.stringify(this.wishList));
		this._dataServe.submitDonor(value, this.wishList, this.contactForm.get('attachment_1').value,).subscribe((event: HttpEvent<any>) => {
			if (event.type === HttpEventType.Response) {
				if (event.status == 200) {
					let body = event.body;
					let { error, message } = body;

					console.log(body);
					if (!error) {
						//this._msgServe.add({ severity: 'success', summary: message });
					} else {
						//this._msgServe.add({ severity: 'error', summary: message });
					}

					this.contactForm.reset();

					this.subOrderRes.load = false;

					this.displaySuccessDialog = true;

					this.emptyWish();

					this.imgURL = undefined;

				} else {
					alert(event.status);
				}
			}
		}, (err: HttpErrorResponse) => {
			alert(JSON.stringify(err));
		});
	}

	submitSignUp = new SubmitRespon();

	submitSignUpForm(e) {



		if (!this.signUpForm.valid || this.submit.load) return false;


		this.submit.reset();
		this.submit.load = true;


		let value = this.signUpForm.value;

		this._dataServe.userRegister(this.signUpForm.value).subscribe((event: HttpEvent<any>) => {

			if (event.type === HttpEventType.Response) {

				if (event.status == 200) {

					let body = event.body;
					let { error, message } = body;

					console.log(body);

					if (!error) {
						this._msgServe.add({ severity: 'success', summary: message });



						this._authServ.token = body.data.token;
						this._authServ.login(body.data);
						// this._router.navigate(['/welcome']);
						// this._router.navigateByUrl(this.returnUrl);

						this.submitDonor();

					} else {

						this._msgServe.add({ severity: 'error', summary: message });
					}

					this.signUpForm.reset();
					this.signUpForm.enable();
					this.submit.load = false;

					this.displayAuth = false;

				} else {
					alert(event.status);
				}

			}

		}, (err: HttpErrorResponse) => {

			console.log(err);
		});
	}

	needModal: boolean = false;

	addToWishList(data) {
		this._dataServe.addProductToWishList(data);
		this._msgServe.add({ severity: 'success', summary: "Item added to wish list" });
	}


}
