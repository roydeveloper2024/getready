import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor() { }


	// timeList = [{
	// 	"id": "id1",
	// 	"from": "00:00",
	// 	"to": "00:30",
	// 	"slot": 1
	// },{
	// 	"id": "id2",
	// 	"from": "00:30",
	// 	"to": "01:00",
	// 	"slot": 2
	// },{
	// 	"id": "id3",
	// 	"from": "01:00",
	// 	"to": "01:30",
	// 	"slot": 3
	// },{
	// 	"id": "id4",
	// 	"from": "01:30",
	// 	"to": "02:00",
	// 	"slot": 4
	// }];


	timeList = [];

	getmyData(){
		return this.timeList;
	}

	setMyData(data){
		this.timeList = [...data];
	}

	clearData(){
		this.timeList = [];

		return this.timeList;
	}
}
