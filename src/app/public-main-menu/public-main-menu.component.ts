import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data/data.service';
import { AuthService } from '../services/auth/auth.service';
import { interval, Subscription, Observable, Subject } from 'rxjs';

import { HttpEventType, HttpProgressEvent, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-public-main-menu',
	templateUrl: './public-main-menu.component.html',
	styleUrls: ['./public-main-menu.component.scss']
})
export class PublicMainMenuComponent implements OnInit {

	public isMenuCollapsed: boolean = true;
	authenticated: boolean = false;

	private subscriptions: Subscription[] = [];

	ngOnDestroy() {
		this.subscriptions.forEach(subscriptions => subscriptions.unsubscribe());
	}

	user: any = {};

	constructor(private _router: Router, private _dataServe: DataService, private _authServ: AuthService,) {


		this.subscriptions.push(
			this._authServ._loggedInBS$.subscribe(res => {

				console.log("Auth Check ", res);
				if (res || this._authServ.getUser()) {

					this.authenticated = true;

					this.user = this._authServ.getUser().user_info;

					console.log(this.user);

				} else {
					this.authenticated = false;
				}

			})
		);


		// if (this._authServ.getUser()) {



		// } else {

		// }

	}

	productSubCategories: any[];

	selectedCountries: any[];
	selectedCountry: any;
	filteredCountries: any[];

	filterCountry(event) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered : any[] = [];
        let query = event.query;

		console.log(query);
        for(let i = 0; i < this.productSubCategories.length; i++) {
            let country = this.productSubCategories[i];
            if (country.prod_sub_categ_title.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }

	getAllProductSubCateg() {
		this._dataServe.getAllProductSubCateg().subscribe((event: HttpEvent<any>) => {
			if (event.type === HttpEventType.Response) {

				if (event.status == 200) {

					let body = event.body;
					let error = body.error;
					let msg = body.message;

					console.log(body);

					if (!error) {

						this.productSubCategories = body.data.product_sub_categories;


					} else {
						this.productSubCategories = [];

					}

				} else {
					alert(event.status);
				}

			}
		});

	}

	ngOnInit(): void {

		this.productSubCategories = [{
			"prod_sub_categ_id": 1,
			"prod_sub_categ_title": "Emergency Kit (Earthquake)"
		}];

		this.getAllProductSubCateg();
	}

	selectSubCateg(e){
		console.log(e);

		this._router.navigate(["/shop/"+e.prod_sub_categ_title+"/1"]);
	}

	displayTermsModal: boolean = false;

	openTermsModal() {
		this.displayTermsModal = true;
	}

	openCart() {
		this._dataServe.openSideCart();
	}

	logout() {
		this._authServ.logout();
		location.reload();
	}

}
