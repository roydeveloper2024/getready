import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, share, shareReplay, tap, } from 'rxjs/operators';





@Injectable({
	providedIn: 'root'
})
export class DataService {

	private _openCartBS = new BehaviorSubject<any>(false);
	_openCartBS$ = this._openCartBS.asObservable();


	private _newCartItemBS = new BehaviorSubject<any>(false);
	_newCartItemBS$ = this._newCartItemBS.asObservable();

	private _newCartItemDonateBS = new BehaviorSubject<any>(false);
	_newCartItemBSDonate$ = this._newCartItemDonateBS.asObservable();



	private _newWishItemBS = new BehaviorSubject<any>(false);
	_newWishItemBS$ = this._newWishItemBS.asObservable();



	constructor(private _httpClient: HttpClient) {

	}

	forgotPassword(formVal) {

		let body = {

			"email": formVal.email,
		}

		return this._httpClient.post(env.host + 'api/' + env.apiVersion + '/forgotPassword', body, { observe: 'response', reportProgress: true });
	}

	newPassword(formVal, token) {
		let body = {
			"new_password": formVal.password,
			"c_new_password": formVal.c_password,
			"token": token,
		}

		return this._httpClient.post(env.host + 'api/' + env.apiVersion + '/newPassword', body, { observe: 'response', reportProgress: true });
	}



	checkForgotPassToken(token) {

		let body = {

			"token": token,
		}

		return this._httpClient.post(env.host + 'api/' + env.apiVersion + '/checkForgotPassToken', body, { observe: 'response', reportProgress: true });
	}



	getProductById(prod_id) {

		return this._httpClient.get(env.host + 'api/' + env.apiVersion + '/product/getProductById/' + prod_id, { observe: 'response', reportProgress: true });
	}


	getAllFeaturedProduct() {

		return this._httpClient.get(env.host + 'api/' + env.apiVersion + '/getAllFeaturedProduct', { observe: 'response', reportProgress: true });
	}

	getAllProductPublic(category = undefined, sub = undefined) {

		return this._httpClient.get(env.host + 'api/' + env.apiVersion + '/product/getAllProductPublic/' + category + '/' + sub, { observe: 'response', reportProgress: true });
	}

	getAllProductVid() {

		return this._httpClient.get(env.host + 'api/' + env.apiVersion + '/product/getAllProductVid', { observe: 'response', reportProgress: true });
	}

	getAllProductType() {

		return this._httpClient.get(env.host + 'api/' + env.apiVersion + '/product_type/getAllProductType', { observe: 'response', reportProgress: true });
	}

	getAllProductSubCateg(){

		return this._httpClient.get(env.host+'api/'+env.apiVersion+'/product_type/getAllProductSubCateg', { observe: 'response', reportProgress: true });
  }


	orderProduct(formVal, or_items: any = [], or_total) {

		let body = {
			"email": formVal.email,
			"customer_name": formVal.fullname,
			"customer_address": formVal.address,
			"customer_country": formVal.country,
			"customer_city": formVal.city,
			"customer_state": formVal.state,
			"payment_method": formVal.payment,
			"or_items": JSON.stringify(or_items),

			"or_total": or_total,
			'or_subtotal': or_total

		}

		console.log(JSON.stringify(or_items));

		return this._httpClient.post(env.host + 'api/' + env.apiVersion + '/order/store', body, { observe: 'response', reportProgress: true });
	}


	getAllMyOrder(){
		return this._httpClient.get(env.host + 'api/' + env.apiVersion + '/order/getAllMyOrder', { observe: 'response', reportProgress: true });
	}


	getAllMyBeneficiaries(){
		return this._httpClient.get(env.host + 'api/' + env.apiVersion + '/donor/getAllMyBeneficiaries', { observe: 'response', reportProgress: true });
	}



	storeDonate(formVal, or_items: any = [], or_total) {

		let body = {
			"email": formVal.email,
			"customer_name": formVal.fullname,
			"customer_address": formVal.address,
			"customer_country": formVal.country,
			"customer_city": formVal.city,
			"customer_state": formVal.state,
			"payment_method": formVal.payment,
			"or_items": JSON.stringify(or_items),

			"or_total": or_total,
			'or_subtotal': or_total

		}

		return this._httpClient.post(env.host + 'api/' + env.apiVersion + '/order/storeDonate', body, { observe: 'response', reportProgress: true });
	}




	addTraining(formVal) {

		let body = {
			"preference": formVal.preference,
			"training_type": formVal.training_type,
			"first_name": formVal.first_name,
			"last_name": formVal.last_name,
			"middle_name": formVal.middle_name,
			"mobile_number": formVal.mobile_number,
			"email": formVal.email,
			"number_of_attendee": formVal.number_of_attendee,
			"attendee_type": formVal.attendee_type,
			"company_name": formVal.company_name,
			"company_size": formVal.company_size,
			"company_desc": formVal.company_desc,
			"further_desc": formVal.further_desc,
			"location": formVal.location,
		}

		return this._httpClient.post(env.host + 'api/' + env.apiVersion + '/training/store', body, { observe: 'response', reportProgress: true });
	}

	contactUs(formVal) {

		let body = {
			"name": formVal.name,
			"email": formVal.email,
			"contact": formVal.contact,
			"message": formVal.message,

		}

		return this._httpClient.post(env.host + 'api/' + env.apiVersion + '/contactUs', body, { observe: 'response', reportProgress: true });
	}


	submitDonor(formVal, wishList, attachment_1) {


		const body = new FormData();


		body.append('fullname', formVal.fullname);
		body.append('purpose', formVal.purpose);
		body.append('why_need', formVal.why_need);
		body.append('formVal', formVal.formVal);
		body.append('organization', formVal.organization);
		body.append('contact', formVal.contact);
		body.append('address', formVal.address);
		body.append('wish_list', JSON.stringify(wishList));
		body.append('attachment_1', attachment_1);
		// body.append('attachment_1', attachment_1);
		body.append('tell_us_more', formVal.tell_us_more);






		return this._httpClient.post(env.host + 'api/' + env.apiVersion + '/donor/store', body, { observe: 'response', reportProgress: true });
	}


	userRegister(formVal) {

		let body = {
			"name": formVal.name,
			"email": formVal.email,
			"contact": formVal.contact,
			"password": formVal.password,
			"c_password": formVal.c_password,
			"gender": formVal.gender,
			"address": formVal.address,
		}
		return this._httpClient.post(env.host + 'api/' + env.apiVersion + '/userRegister', body, { observe: 'response', reportProgress: true });
	}

	getAllAcceptedBeneficiaries() {

		return this._httpClient.get(env.host + 'api/' + env.apiVersion + '/donor/getAllAcceptedBeneficiaries', { observe: 'response', reportProgress: true });
	}




	openSideCart() {
		this._openCartBS.next(true);
	}

	addProductToCart(data) {
		let cartItem = JSON.parse(localStorage.getItem('cartItem'));

		let dataInfo = {
			"prod_id": data.prod_id,
			"prod_title": data.prod_title,
			"prod_var_price": data.first_variant ? data.first_variant.prod_var_price : 0,
			"prod_var_id": data.first_variant ? data.first_variant.id : null,
			"prod_qty": 1,
			"featured_image": data.featured_image ? data.featured_image.prod_img_filename : null,
			"prod_var_stock": data.first_variant.prod_var_stock
		}

		if (cartItem) {

			let index = this.findWithAttr(cartItem, 'prod_var_id', data.first_variant.id);

			if (index !== -1) {

				if (data.first_variant.prod_var_stock < cartItem[index]['prod_qty'] + 1) {
					alert("Stock limit");
				} else {
					cartItem[index]['prod_qty']++;
				}

			} else {


				if (!data.first_variant.prod_var_stock) {
					alert("Sorry this item out of stock");
				} else {
					cartItem.push(dataInfo);
				}
			}

		} else {
			if (!data.first_variant.prod_var_stock) {
				alert("Sorry this item out of stock");
			} else {
				cartItem = [dataInfo]
			}


		}

		localStorage.setItem('cartItem', JSON.stringify(cartItem));

		this._newCartItemBS.next(cartItem);

	}

	findWithAttr(array, attr, value) {
		for (var i = 0; i < array.length; i += 1) {
			if (array[i][attr] === value) {
				return i;
			}
		}
		return -1;
	}


	get getProductFromCart() {
		return JSON.parse(localStorage.getItem('cartItem'));
	}

	get getProductFromCartDonate() {
		return JSON.parse(localStorage.getItem('cartItemDonate'));
	}



	removeCartItem(data) {

		let cartItem = JSON.parse(localStorage.getItem('cartItem'));

		let index = this.findWithAttr(cartItem, 'prod_var_id', data.prod_var_id);

		cartItem.splice(index, 1);

		localStorage.setItem('cartItem', JSON.stringify(cartItem));


		this._newCartItemBS.next(cartItem);
	}


	removeCartItemDonate(data) {

		let cartItemDonate = JSON.parse(localStorage.getItem('cartItemDonate'));

		let index = this.findWithAttr(cartItemDonate, 'prod_var_id', data.prod_var_id);

		cartItemDonate.splice(index, 1);

		localStorage.setItem('cartItemDonate', JSON.stringify(cartItemDonate));


		this._newCartItemDonateBS.next(cartItemDonate);
	}










	updateCart(cartItem: any = []) {

		localStorage.setItem('cartItem', JSON.stringify(cartItem));
	}

	updateCartDonate(cartItemDonate: any = []) {

		localStorage.setItem('cartItemDonate', JSON.stringify(cartItemDonate));
	}



	emptyCart() {

		localStorage.setItem('cartItem', JSON.stringify([]));
		this._newCartItemBS.next([]);
	}

	emptyCartDonate() {
		localStorage.setItem('cartItemDonate', JSON.stringify([]));
		this._newCartItemDonateBS.next([]);
	}

	async clearProductFromCart() {
		//this.loggedIn.next(false);
		return await localStorage.removeItem('cartItem');
	}


	updateWishList(wishItem: any = []) {

		localStorage.setItem('wishItem', JSON.stringify(wishItem));
	}





	emptyWish() {

		localStorage.setItem('wishItem', JSON.stringify([]));
		this._newWishItemBS.next([]);
	}

	removeWishItem(data) {

		let wishItem = JSON.parse(localStorage.getItem('wishItem'));

		let index = this.findWithAttr(wishItem, 'prod_var_id', data.prod_var_id);

		wishItem.splice(index, 1);

		localStorage.setItem('wishItem', JSON.stringify(wishItem));


		this._newWishItemBS.next(wishItem);
	}

	get getProductFromWishList() {
		return JSON.parse(localStorage.getItem('wishItem'));
	}

	addProductToWishList(data) {
		let wishItem = JSON.parse(localStorage.getItem('wishItem'));

		let dataInfo = {
			"prod_id": data.prod_id,
			"prod_title": data.prod_title,
			"prod_var_price": data.first_variant ? data.first_variant.prod_var_price : 0,
			"prod_var_id": data.first_variant ? data.first_variant.id : null,
			"prod_qty": 1,
			"featured_image": data.featured_image ? data.featured_image.prod_img_filename : null,
			"prod_var_stock": data.first_variant.prod_var_stock
		}

		if (wishItem) {

			let index = this.findWithAttr(wishItem, 'prod_var_id', data.first_variant.id);

			if (index !== -1) {

				if (data.first_variant.prod_var_stock < wishItem[index]['prod_qty'] + 1) {
					alert("Stock limit");
				} else {
					wishItem[index]['prod_qty']++;
				}

			} else {


				if (!data.first_variant.prod_var_stock) {
					alert("Sorry this item out of stock");
				} else {
					wishItem.push(dataInfo);
				}
			}

		} else {
			if (!data.first_variant.prod_var_stock) {
				alert("Sorry this item out of stock");
			} else {
				wishItem = [dataInfo]
			}


		}

		localStorage.setItem('wishItem', JSON.stringify(wishItem));

		this._newWishItemBS.next(wishItem);

	}




	addProductToDonateCart(data) {
		let cartItemDonate = JSON.parse(localStorage.getItem('cartItemDonate'));

		let dataInfo = {
			"prod_id": data.prod_id,
			"prod_title": data.prod_var_title,
			"prod_var_price": data.prod_var_price ? data.prod_var_price : 0,
			"prod_var_id": data.product_variant_id ? data.product_variant_id : null,
			"prod_qty": 1,
			"featured_image": data.prod_img_filename ? data.prod_img_filename : null,
			"prod_var_stock": data.prod_var_stock,
			"beneficiary_id": data.beneficiary_id,
			"fullname": data.fullname
		}

		if (cartItemDonate) {

			let index = this.findWithAttr(cartItemDonate, 'prod_var_id', data.product_variant_id);

			if (index !== -1) {

				if (data.prod_var_stock < cartItemDonate[index]['prod_qty'] + 1) {
					alert("Stock limit");
				} else {
					cartItemDonate[index]['prod_qty']++;
				}

			} else {


				if (!data.prod_var_stock) {
					alert("Sorry this item out of stock");
				} else {
					cartItemDonate.push(dataInfo);
				}
			}

		} else {
			if (!data.prod_var_stock) {
				alert("Sorry this item out of stock");
			} else {
				cartItemDonate = [dataInfo]
			}


		}

		localStorage.setItem('cartItemDonate', JSON.stringify(cartItemDonate));

		this._newCartItemDonateBS.next(cartItemDonate);

	}


	getAllMyVid() {
		return this._httpClient.get(env.host + 'api/' + env.apiVersion + '/getAllMyVid', { observe: 'response', reportProgress: true });
	}



}
