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
	selector: 'app-shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

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

	category: string = null;

	sub: string = null;
	constructor(private _router: Router, private _actvRoute: ActivatedRoute, private _dataServe: DataService, private _msgServe: MessageService) {
		this.host = env.dirProject;

		this._actvRoute.params.subscribe(params => {
			this.category = params['category'];
			this.sub = params['sub'];

			console.log(this.sub);
			console.log(this.category);
		});
	}

	ngOnInit(): void {

		this.getAllProductPublic();

		this.getAllProductType();
	}

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
		this._dataServe.getAllProductPublic(this.category, this.sub).subscribe((event: HttpEvent<any>) => {
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

	addToCart(data) {
		this._dataServe.addProductToCart(data);
		this._msgServe.add({ severity: 'success', summary: "Item added to cart" });
	}

}
