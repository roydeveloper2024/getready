import { Component, OnInit, Output, Input, ViewChild, ElementRef, NgZone, EventEmitter, ChangeDetectorRef, Inject, PLATFORM_ID  } from '@angular/core';


import { isPlatformBrowser } from '@angular/common';
 




import { MapsAPILoader, AgmMap } from '@agm/core';
import { environment as env } from '../../environments/environment';
import { Subscription, Observable, Subject} from 'rxjs';
import { HttpEventType, HttpProgressEvent, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SubmitRespon } from '../classes/submit-respon';
import { TblConfig } from '../classes/tbl-config';

import { GoogleMapStyle } from '../classes/google-map-style';

import { FacebookService, InitParams } from 'ngx-facebook-fb';

// import { Options, LabelType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

	latitude: number;
  	longitude: number;
  	zoom: number = 15;
 
  	private geoCoder;
 
  	// @ViewChild('search')
  	// public searchElementRef: ElementRef;

  	 @ViewChild('fb_chat') private draggableElement: ElementRef;


  	loading: boolean = false;

  	mapStyle = [];

	constructor(private fb: FacebookService,
             @Inject(PLATFORM_ID) private platformId: Object, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, 
		private changeDetectorRefs: ChangeDetectorRef, private facebookService: FacebookService) { 

		this.mapStyle = new GoogleMapStyle().getRetro();
		
	} 	

	provTbl = new TblConfig();

	ngOnInit(): void {

		//load Places Autocomplete
	    this.mapsAPILoader.load().then(() => {
	      	
	      	// this.geoCoder = new google.maps.Geocoder;
	 
	      	// let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
	       //  	types: ["address"]
	      	// });
	      	// autocomplete.addListener("place_changed", () => {
	       //  	this.ngZone.run(() => {
	        		
	       //  		this.onloadingChange(true);
	       //    		//get the place result
	       //    		let place: google.maps.places.PlaceResult = autocomplete.getPlace();
	 
	       //    		//verify result
	       //    		if (place.geometry === undefined || place.geometry === null) {
	       //      		return;
	       //    		}
	 
	       //    		//set latitude, longitude and zoom
	       //    		this.latitude = place.geometry.location.lat();
	       //    		this.longitude = place.geometry.location.lng();
	       //    		this.zoom = 12;


	       //    		this.getAddress(this.latitude, this.longitude);
	       //  	});
	      	// });


	      	this.setCurrentLocation();
	      	
	      	this.initProviders();
	    });

	    
	}

	private initFacebookService(): void {
      const initParams: InitParams = { xfbml: true, version:'v3.2'};
      this.facebookService.init(initParams);
    }

    fbChat: boolean = false;

    page_id: any;

    public phone = "972 52-568-8585"
  	public title = "Hello Easy Provider";

  	

    chatMsgr(){
    	this.fbChat = true;
    	this.whatsapp = false;
    	this.page_id = this.providerDetails.prov_fb_id;
    	// providerDetails
    	this.initFacebookService();

    	this.changeDetectorRefs.detectChanges();
    }


    whatsapp: boolean = false;

    chatWA(){
    	this.phone = this.providerDetails.prov_whatsapp_num;
    	this.whatsapp = true;
    	this.fbChat = false;
    	this.changeDetectorRefs.detectChanges();
    }

    

    closeProvDetail(){
    	this.displayProvDetails = false;
    	this.whatsapp = false;
    	this.fbChat = false;
    }

    filterList(){

    }
  

	initProviders(){

		this.provTbl.tblVal = [{
			'prov_id': 1,
			'prov_name': 'Gallardo Luandry Shop',
			'prov_category': 'Luandry',
			'prov_address': 'Quezon City PH',
			'prov_lat': 14.6710134,
			'prov_lng': 121.0867975,
			'prov_rating': 5,
			'prov_profile': 'https://media.easy.co.il/images/StaticLogo/8714705_1.jpg',
			'prov_fb_id': 105738334419344,
			'prov_whatsapp_num': "972 52-568-8585",
			'prov_services': [{
				'prov_serv_id': 1,
				'prov_serv_name': 'Wash',
				'prov_serv_rate': '$10'

			},{
				'prov_serv_id': 2,
				'prov_serv_name': 'Dry',
				'prov_serv_rate': '$10'

			},{
				'prov_serv_id': 3,
				'prov_serv_name': 'Fold',
				'prov_serv_rate': '$20'

			}]

		},
		{
			'prov_id': 2,
			'prov_name': 'Auto Shop',
			'prov_category': 'Automotive',
			'prov_address': 'Payata City PH',
			'prov_lat': 14.6733273,
			'prov_lng': 121.0591013,
			'prov_rating': 3,
			'prov_profile': 'https://media.easy.co.il/images/UserPics/5980200_1486558794856.jpg',
			'prov_fb_id': 103130941580546,
			'prov_whatsapp_num': "63 9270213589",
			'prov_services': [{
				'prov_serv_id': 1,
				'prov_serv_name': 'Repair',
				'prov_serv_rate': '$20'
			},{
				'prov_serv_id': 2,
				'prov_serv_name': 'Replace',
				'prov_serv_rate': '$25'

			},{
				'prov_serv_id': 3,
				'prov_serv_name': 'Accessories',
				'prov_serv_rate': '$30'

			}]

		},{
			'prov_id': 3,
			'prov_name': 'Auto Shop 2',
			'prov_category': 'Automotive',
			'prov_address': 'Payata City PH',
			'prov_lat': 14.6733273,
			'prov_lng': 121.0591013,
			'prov_rating': 3,
			'prov_profile': 'https://media.easy.co.il/images/UserPics/5980200_1486558794856.jpg',
			'prov_fb_id': 103130941580546,
			'prov_whatsapp_num': "63 9270213589",
			'prov_services': [{
				'prov_serv_id': 1,
				'prov_serv_name': 'Repair',
				'prov_serv_rate': '$20'
			},{
				'prov_serv_id': 2,
				'prov_serv_name': 'Replace',
				'prov_serv_rate': '$25'

			},{
				'prov_serv_id': 3,
				'prov_serv_name': 'Accessories',
				'prov_serv_rate': '$30'

			}]

		},{
			'prov_id': 4,
			'prov_name': 'Auto Shop 4',
			'prov_category': 'Automotive',
			'prov_address': 'Payata City PH',
			'prov_lat': 14.6733273,
			'prov_lng': 121.0591013,
			'prov_rating': 3,
			'prov_profile': 'https://media.easy.co.il/images/UserPics/5980200_1486558794856.jpg',
			'prov_fb_id': 103130941580546,
			'prov_whatsapp_num': "63 9270213589",
			'prov_services': [{
				'prov_serv_id': 1,
				'prov_serv_name': 'Repair',
				'prov_serv_rate': '$20'
			},{
				'prov_serv_id': 2,
				'prov_serv_name': 'Replace',
				'prov_serv_rate': '$25'

			},{
				'prov_serv_id': 3,
				'prov_serv_name': 'Accessories',
				'prov_serv_rate': '$30'

			}]

		}];

		console.log(this.provTbl.tblVal);

	}

	openProvInfo(prov){
		console.log(prov);
	}
	// markerDragEnd($event: MouseEvent) {
 //    	console.log($event);
 //    	// this.onloadingChange(true);
 //    	// this.latitude = $event.coords.lat;
 //    	// this.longitude = $event.coords.lng;
 //    	// this.getAddress(this.latitude, this.longitude);

 //  	}

  	getAddress(latitude, longitude) {
    	this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      		// console.log(results);
      		// console.log(status);
      		if (status === 'OK') {
        		if (results[0]) {
		          	this.zoom = 12;
		          	//this.address = results[0].formatted_address;

		          	//this.onLongLatChange();
		        } else {
		          window.alert('No results found');
		        }
		    } else {
		        window.alert('Geocoder failed due to: ' + status);
		    }
    	});
  	}

	 // Get Current Location Coordinates
    private setCurrentLocation() {
      	if ('geolocation' in navigator) {
        	navigator.geolocation.getCurrentPosition((position) => {
        		this.zoom = 15;
          		this.latitude = position.coords.latitude;
          		this.longitude = position.coords.longitude;
          		

          		console.log(this.latitude + " " + this.longitude);


          		this.changeDetectorRefs.detectChanges();
          		//this.getAddress(this.latitude, this.longitude);
        	});
      	}
    }

    locate(){
    	this.setCurrentLocation();
    }


    providerListFilter = new TblConfig();


    selectedProvider: any;

    filteredProvider: any = [];

    filterSearch(event) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered : any[] = [];
        let query = event.query;
        for(let i = 0; i < this.provTbl.tblVal.length; i++) {
            let provider = this.provTbl.tblVal[i];
            if (provider.prov_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(provider);
            }
        }
        
        this.filteredProvider = filtered;

    }

    selectFilterListProvider(event){
    	console.log(event);

    	this.providerListFilter.tblVal = this.provTbl.tblVal;
    }

    submitLoginForm(event){
    	console.log(this.selectedProvider);

    	this.providerListFilter.tblVal = this.provTbl.tblVal;
    }

    displayProvDetails: boolean = false;

    providerDetails: any;

    openProviderModal(l){

    	this.providerDetails = l;

    	this.displayProvDetails = true;
    }

    val1: number;
    rangeValues: number[] = [20,80];
    priceValues: number[] = [20,80];
    distanceValues: number[] = [20,80];
    rateValues: number[] = [1,100];




  //   minValue: number = 0;
 	// maxValue: number = 400;

  // 	options: Options = {
	 //    floor: 0,
	 //    ceil: 100,
	 //    translate: (value: number, label: LabelType): string => {
	 //    	return "";
	 //      	// switch (label) {
  //       // 		case LabelType.Low:
  //       //   			return "<b>min" + value;
  //       // 		case LabelType.High:
  //       //   			return "<b>max$" + value;
  //       // 		default:
  //       //   			return "$" + value;
  //     		// }
	 //    }
  // 	};

  // 	userChangeStart(e){
  // 		console.log(e);
  // 	}

  // 		userChange(e){
  // 			console.log(e);
  // 	}

  // 		userChangeEnd(e){
  // 			console.log(e);

  // 	}

  // 		valueChange(e){
  // 			console.log(e);

  // 	}

  // 		highValueChange(e){
  // 			console.log(e);

  // 	}

							  
   
}
