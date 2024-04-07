import { Component, OnInit, ErrorHandler,ChangeDetectorRef, NgZone } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { environment as env } from '../../environments/environment';
import { interval, Subscription, Observable, Subject} from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { SubmitRespon } from '../classes/submit-respon';
import { HttpEventType, HttpEvent, HttpErrorResponse } from '@angular/common/http';

import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  total: any = "0.00";
  totalDonate: string = "0.00";

  cartList: any = [];

  cartListDonate: any = [];

  host: string;

  private subscriptions: Subscription[] = [];

  contactForm: FormGroup;

  get cf() { return this.contactForm.controls; }

  countryListOpt: any = [];
  paymentListOpt: any = [];
  stateListOpt: any = [];

  constructor(private _dataServe: DataService, private changeDetectorRefs: ChangeDetectorRef, private _formBuilder: FormBuilder, private _msgServe: MessageService) {
    this.host = env.dirProject;

  }


  ngOnDestroy(){
		this.subscriptions.forEach(subscriptions => subscriptions.unsubscribe());
	}


  ngOnInit(): void {

    this.paymentListOpt = [{
			"label": 'Choose',
			"value": null
		},{
			"label": 'Cash on Delivery',
			"value": 'cod',
		},{
			"label": 'Online Transfer',
			"value": 'online-bank-transfer',
		},{
			"label": 'Over-The-Counter or OTC Bank Deposit',
			"value": 'otc',
		},{
			"label": 'G-cash',
			"value": 'gcash',
		}];

    this.countryListOpt =  [{
			"label": 'Choose',
			"value": null,
      "code": null
		},{
			"label": 'Philippines',
			"value": 'Philippines',
      "code": 'PH'
		}];

    this.stateListOpt = [{
			"label": 'Choose',
			"value": null,
		},{
      "label": "Abra",
      "value": "Abra"
    },{
      "label": "Agusan del Norte",
      "value": "Agusan del Norte"
    },{
      "label": "Agusan del Sur",
      "value": "Agusan del Sur"
    },{
      "label": "Aklan",
      "value": "Aklan"
    },{
      "label": "Albay",
      "value": "Albay"
    },{
      "label": "Antique",
      "value": "Antique"
    },{
      "label": "Apayao",
      "value": "Apayao"
    },{
      "label": "Aurora",
      "value": "Aurora"
    },{
      "label": "Basilan",
      "value": "Basilan"
    },{
      "label": "Bataan",
      "value": "Bataan"
    },{
      "label": "Batanes",
      "value": "Batanes"
    },{
      "label": "Batangas",
      "value": "Batangas"
    },{
      "label": "Benguet",
      "value": "Benguet"
    },{
      "label": "Biliran",
      "value": "Biliran"
    },{
      "label": "Bohol",
      "value": "Bohol"
    },{
      "label": "Bukidnon",
      "value": "Bukidnon"
    },{
      "label": "Bulacan",
      "value": "Bulacan"
    },{
      "label": "Cagayan",
      "value": "Cagayan"
    },{
      "label": "Camarines Norte",
      "value": "Camarines Norte"
    },{
      "label": "Camarines Sur",
      "value": "Camarines Sur"
    },{
      "label": "Camiguin",
      "value": "Camiguin"
    },{
      "label": "Capiz",
      "value": "Capiz"
    },{
      "label": "Catanduanes",
      "value": "Catanduanes"
    },{
      "label": "Cavite",
      "value": "Cavite"
    },{
      "label": "Cebu",
      "value": "Cebu"
    },{
      "label": "Cotabato",
      "value": "Cotabato"
    },{
      "label": "Davao de Oro",
      "value": "Davao de Oro"
    },{
      "label": "Davao del Norte",
      "value": "Davao del Norte"
    },{
      "label": "Davao del Sur",
      "value": "Davao del Sur"
    },{
      "label": "Davao Occidental",
      "value": "Davao Occidental"
    },{
      "label": "Davao Oriental",
      "value": "Davao Oriental"
    },{
      "label": "Dinagat Islands",
      "value": "Dinagat Islands"
    },{
      "label": "Eastern Samar",
      "value": "Eastern Samar"
    },{
      "label": "Guimaras",
      "value": "Guimaras"
    },{
      "label": "Ifugao",
      "value": "Ifugao"
    },{
      "label": "Ilocos Norte",
      "value": "Ilocos Norte"
    },{
      "label": "Ilocos Sur",
      "value": "Ilocos Sur"
    },{
      "label": "Iloilo",
      "value": "Iloilo"
    },{
      "label": "Isabela",
      "value": "Isabela"
    },{
      "label": "Kalinga",
      "value": "Kalinga"
    },{
      "label": "La Union",
      "value": "La Union"
    },{
      "label": "Laguna",
      "value": "Laguna"
    },{
      "label": "Lanao del Norte",
      "value": "Lanao del Norte"
    },{
      "label": "Lanao del Sur",
      "value": "Lanao del Sur"
    },{
      "label": "Leyte",
      "value": "Leyte"
    },{
      "label": "Maguindanao",
      "value": "Maguindanao"
    },{
      "label": "Marinduque",
      "value": "Marinduque"
    },{
      "label": "Masbate",
      "value": "Masbate"
    },{
      "label": "Misamis Occidental",
      "value": "Misamis Occidental"
    },{
      "label": "Misamis Oriental",
      "value": "Misamis Oriental"
    },{
      "label": "Metro Manila",
      "value": "Metro Manila"
    },{
      "label": "Mountain Province",
      "value": "Mountain Province"
    },{
      "label": "Negros Occidental",
      "value": "Negros Occidental"
    },{
      "label": "Negros Oriental",
      "value": "Negros Oriental"
    },{
      "label": "Northern Samar",
      "value": "Northern Samar"
    },{
      "label": "Nueva Ecija",
      "value": "Nueva Ecija"
    },{
      "label": "Nueva Vizcaya",
      "value": "Nueva Vizcaya"
    },{

      "label": "Occidental Mindoro",
      "value": "Occidental Mindoro"
    },{
      "label": "Oriental Mindoro",
      "value": "Oriental Mindoro"
    },{
      "label": "Palawan",
      "value": "Palawan"
    },{
      "label": "Pampanga",
      "value": "Pampanga"
    },{
      "label": "Pangasinan",
      "value": "Pangasinan"
    },{
      "label": "Quezon",
      "value": "Quezon"
    },{
      "label": "Quirino",
      "value": "Quirino"
    },{
      "label": "Rizal",
      "value": "Rizal"
    },{
      "label": "Romblon",
      "value": "Romblon"
    },{
      "label": "Samar",
      "value": "Samar"
    },{
      "label": "Sarangani",
      "value": "Sarangani"
    },{
      "label": "Siquijor",
      "value": "Siquijor"
    },{
      "label": "Sorsogon",
      "value": "Sorsogon"
    },{
      "label": "South Cotabato",
      "value": "South Cotabato"
    },{
      "label": "Southern Leyte",
      "value": "Southern Leyte"
    },{
      "label": "Sultan Kudarat",
      "value": "Sultan Kudarat"
    },{
      "label": "Sulu",
      "value": "Sulu"
    },{
      "label": "Surigao del Norte",
      "value": "Surigao del Norte"
    },{
      "label": "Surigao del Sur",
      "value": "Surigao del Sur"
    },{
      "label": "Tarlac",
      "value": "Tarlac"
    },{
      "label": "Tawi-Tawi",
      "value": "Tawi-Tawi"
    },{
      "label": "Zambales",
      "value": "Zambales"
    },{
      "label": "Zamboanga del Norte",
      "value": "Zamboanga del Norte"
    },{
      "label": "Zamboanga del Sur",
      "value": "Zamboanga del Sur"
    },{
      "label": "Zamboanga Sibugay",
      "value": "Zamboanga Sibugay"
    }];

    this.contactForm = this._formBuilder.group({
      fullname: ['',  Validators.compose([Validators.required])],
			email: ['', Validators.compose([Validators.required, Validators.email])],

      mobile: ['',  Validators.compose([Validators.required])],
      address: ['',  Validators.compose([Validators.required])],

      city: ['',  Validators.compose([Validators.required])],
      state: ['',  Validators.compose([Validators.required])],
      country: ['',  Validators.compose([Validators.required])],
      payment: ['',  Validators.compose([Validators.required])],

		});

    this.cartList = this._dataServe.getProductFromCart ? this._dataServe.getProductFromCart : [];

    this.cartListDonate = this._dataServe.getProductFromCartDonate ? this._dataServe.getProductFromCartDonate : [];

    console.log(this.cartListDonate);

    this.sumTotal();
    this.sumTotalDonate();

    this.subscriptions.push(
      this._dataServe._newCartItemBS$.subscribe(res => {

        if (res) {

          this.cartList = res;
          this.sumTotal();

        }

      })
    );



    this.subscriptions.push(
      this._dataServe._newCartItemBSDonate$.subscribe(res => {

        if (res) {

          this.cartListDonate = res;
          this.sumTotalDonate();

        }

      })
    );

  }

  displayCartList: boolean = false;

  changeInput(data){

    this._dataServe.updateCart(this.cartList);
    this.sumTotal();
  }

  changeInputDonate(data){

    this._dataServe.updateCartDonate(this.cartListDonate);
    this.sumTotalDonate();
  }


  sumTotal() {
    this.total = this.cartList.reduce((acc, cur) => {


      return acc + (cur['prod_var_price'] * cur['prod_qty']);
    }, 0);
  }


  sumTotalDonate() {
    this.totalDonate = this.cartListDonate.reduce((acc, cur) => {

      return acc + (cur['prod_var_price'] * cur['prod_qty']);
    }, 0);
  }

  emptyCart() {
    this._dataServe.emptyCart()
  }

  emptyCartDonate() {
    this._dataServe.emptyCartDonate()
  }



  removeCartItem(data) {
    console.log(data);

    this._dataServe.removeCartItem(data);
  }

  removeCartItemDonate(data) {
    console.log(data);

    this._dataServe.removeCartItemDonate(data);
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

	submitOrderForm(){
		console.log(this.contactForm.value);
		if (!this.contactForm.valid || this.subOrderRes.load) return false;
		this.subOrderRes.reset();
		this.subOrderRes.load = true;

		let value = this.contactForm.value;

		this._dataServe.orderProduct(value, this.cartList, this.total).subscribe((event : HttpEvent<any>) => {
			if (event.type === HttpEventType.Response) {
				if (event.status == 200) {
					let body  = event.body;
					let { error, message } = body;

          console.log(body);
					if (!error) {
						this._msgServe.add({severity:'success', summary: message });

            this.emptyCart();

					}else{
						this._msgServe.add({severity:'error', summary: message });
					}

					this.contactForm.reset();

					this.subOrderRes.load = false;

          this.displayCartList = false;

				}else{
					alert(event.status);
				}
			}
		}, (err : HttpErrorResponse) => {
			alert(JSON.stringify(err));
		});
	}


  submitCart(type){

    if(this.contactForm.value.payment == "cod" && this.total >= 4000){
      this._msgServe.add({severity:'error', summary: "Sorry we are not accepting COD greater then 4000 pesos" });

      return false;
    }

    if(type == 'mycart'){
      this.submitOrderForm();
    }else{
      this.storeDonate();
    }
  }


  // subOrderRes = new SubmitRespon();

	storeDonate(){
		console.log(this.contactForm.value);
		if (!this.contactForm.valid || this.subOrderRes.load) return false;
		this.subOrderRes.reset();
		this.subOrderRes.load = true;

		let value = this.contactForm.value;

		this._dataServe.storeDonate(value, this.cartListDonate, this.totalDonate).subscribe((event : HttpEvent<any>) => {
			if (event.type === HttpEventType.Response) {
				if (event.status == 200) {
					let body  = event.body;
					let { error, message } = body;

          console.log(body);
					if (!error) {
						this._msgServe.add({severity:'success', summary: message });

            this.emptyCartDonate();

					}else{
						this._msgServe.add({severity:'error', summary: message });
					}

					this.contactForm.reset();

					this.subOrderRes.load = false;

          this.displayCartList = false;

				}else{
					alert(event.status);
				}
			}
		}, (err : HttpErrorResponse) => {
			alert(JSON.stringify(err));
		});
	}

}