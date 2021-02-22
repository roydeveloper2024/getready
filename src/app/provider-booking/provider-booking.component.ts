import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular'; // useful for typechecking

import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
// import * as moment from 'moment/moment';

import { DataService } from '../services/data/data.service';
import { CustomValidators } from '../classes/custom-validators';

@Component({
	selector: 'app-provider-booking',
	templateUrl: './provider-booking.component.html',
	styleUrls: ['./provider-booking.component.scss']
})
export class ProviderBookingComponent implements OnInit {



	displayAddSched: boolean = true;
	selectedDates: Date[];
	minDate: Date;


	calendarOptions: CalendarOptions = {
		customButtons: {
			addNewSched: {
				text: 'new',
				click: () => {
					this.displayAddSched = true;
				}
			}
		},

		allDaySlot: false,
		initialView: 'dayGridMonth',
		headerToolbar: {
			start: 'title', // will normally be on the left. if RTL, will be on the right
			center: 'addNewSched',
			end: 'today,prev,next,dayGridMonth,timeGridWeek,timeGridDay' // will normally be on the right. if RTL, will be on the left
		},

		dateClick: this.handleDateClick.bind(this), // bind is important!
		eventClick: this.handleEventClick.bind(this), // bind is important!
		events: []

	};



	prio = [0,1,2];

	timeListForm: FormGroup;

	constructor(private _formBuilder: FormBuilder, private _dataServ: DataService){

	}


	handleDateClick(arg) {
		alert('date click! ' + arg.dateStr)
	}

	handleEventClick(arg){
		console.log(arg.event.title);
	}

	timeOpt: any = [];


	get itemC() { return (this.timeListForm.get('items') as FormArray); }

	get tlf() { return this.timeListForm.controls; }




	value4: number = 20;

	add(){
		this.itemC.push(this._formBuilder.group({
				from: [null,  Validators.compose([Validators.required])],
				to: [null,  Validators.compose([Validators.required])],
				slot: [1,  Validators.compose([Validators.required, Validators.min(1)])]
			},{
            	validator: CustomValidators.gtToFrom('from', 'to'),
        	}
      	));
		
	}

	submit(){

		console.log(this.timeListForm.value);
		this._dataServ.setMyData(this.timeListForm.value.items);
	}

	clearData(){
		this._dataServ.clearData();
		this.getMyData();
	}

	getMyData(){


		this.itemC.clear();

		// if(this.itemC.length > 0){
		// 	for(let x = 0; x < this.itemC.length; x++){
				
		// 		this.itemC.removeAt(x);
		// 	}
		// }

		let dat = this._dataServ.getmyData();

		if(dat.length > 0){
			for(let x in dat)
			{
				this.itemC.push(this._formBuilder.group({
					id: [dat[x].id,  Validators.compose([Validators.required])],
					from: [dat[x].from,  Validators.compose([Validators.required])],
					to: [dat[x].to,  Validators.compose([Validators.required])],
					slot: [dat[x].slot,  Validators.compose([Validators.required, Validators.min(1)])]
				},{
            		validator: CustomValidators.gtToFrom('from', 'to')
        		}))
			}
		}
	}

	deleteItem(i:number){

		this.itemC.removeAt(i);
	}

	track(item:any,index:number){
		return index;
	}

	ngOnInit(){
		this.timeListForm = this._formBuilder.group({
			items: new FormArray([], [Validators.required])
		},{
    		validator: CustomValidators.checkArrayVal('items')
		})
		
		this.getMyData();


		this.timeOpt = [
			{ "value": null, "label": "Select" },
			{ "value": "00:00", "label": "12.00 AM" },
			{ "value": "00:30", "label": "12.30 AM" },
			{ "value": "01:00", "label": "01.00 AM" },
			{ "value": "01:30", "label": "01.30 AM" },
			{ "value": "02:00", "label": "02.00 AM" },
			{ "value": "02:30", "label": "02.30 AM" },
			{ "value": "03:00", "label": "03.00 AM" },
			{ "value": "03:30", "label": "03.30 AM" },
			{ "value": "04:00", "label": "04.00 AM" },
			{ "value": "04:30", "label": "04.30 AM" },
			{ "value": "05:00", "label": "05.00 AM" },
			{ "value": "05:30", "label": "05.30 AM" },
			{ "value": "06:00", "label": "06.00 AM" },
			{ "value": "06:30", "label": "06.30 AM" },
			{ "value": "07:00", "label": "07.00 AM" },
			{ "value": "07:30", "label": "07.30 AM" },
			{ "value": "08:00", "label": "08.00 AM" },
			{ "value": "08:30", "label": "08.30 AM" },
			{ "value": "09:00", "label": "09.00 AM" },
			{ "value": "09:30", "label": "09.30 AM" },
			{ "value": "10:00", "label": "10.00 AM" },
			{ "value": "10:30", "label": "10.30 AM" },
			{ "value": "11:00", "label": "11.00 AM" },
			{ "value": "11:30", "label": "11.30 AM" },
			{ "value": "12:00", "label": "12.00 PM" },
			{ "value": "12:30", "label": "12.30 PM" },
			{ "value": "13:00", "label": "01.00 PM" },
			{ "value": "13:30", "label": "01.30 PM" },
			{ "value": "14:00", "label": "02.00 PM" },
			{ "value": "14:30", "label": "02.30 PM" },
			{ "value": "15:00", "label": "03.00 PM" },
			{ "value": "15:30", "label": "03.30 PM" },
			{ "value": "16:00", "label": "04.00 PM" },
			{ "value": "16:30", "label": "04.30 PM" },
			{ "value": "17:00", "label": "05.00 PM" },
			{ "value": "17:30", "label": "05.30 PM" },
			{ "value": "18:00", "label": "06.00 PM" },
			{ "value": "18:30", "label": "06.30 PM" },
			{ "value": "19:00", "label": "07.00 PM" },
			{ "value": "19:30", "label": "07.30 PM" },
			{ "value": "20:00", "label": "08.00 PM" },
			{ "value": "20:30", "label": "08.30 PM" },
			{ "value": "21:00", "label": "09.00 PM" },
			{ "value": "21:30", "label": "09.30 PM" },
			{ "value": "22:00", "label": "10.00 PM" },
			{ "value": "22:30", "label": "10.30 PM" },
			{ "value": "23:00", "label": "11.00 PM" },
			{ "value": "23:30", "label": "11.30 PM" },
			{ "value": "23:59", "label": "11.59 PM" }
		];


		this.minDate = new Date();

	}

	arrayItems: any = [];

	date1: Date;
	testVal: any;


	date8: Date;
	rangeDates: Date[];

	test(){
		console.log(this.selectedDates);
	}

	selectCalendarDates(event){
		console.log(event);
	}

	ngAfterViewInit(){
		this.calendarOptions.events = [
			{ title: 'event 1', date: '2020-12-27' },
			{ title: 'event 2', date: '2020-12-28' }
		];
	}


}