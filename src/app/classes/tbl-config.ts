import { Subscription } from 'rxjs';

export class TblConfig {
	tblHeader: any; 				//Column of table
	selectedCol: any;           //Selected toggle column

	tblRow: number;            //Number of row

	subscribe: Subscription;    //Subscribe http get list

	tblVal: any;               //Value list fetched
	tblLoad: boolean;          //loading while request
	listTotal: number;          //list total number
	currPage: number;           //current page default 1
	paging: boolean;            //paging true or false

	listFilter: any;            //paging filter

	rowChecked: any[];         //selected row checkbox

	trashed: number;

	deleteType: string;

	forceDelDialog: boolean; 

	row: any [];

	displayAddDial: boolean;

	constructor(tblHeader: any = []) { 
		this.tblHeader 	= tblHeader;
		this.tblLoad 	= true;
		this.tblRow 	= 20;
		this.currPage 	= 1;
		this.paging 	= false;

		this.tblVal 	= [];
		this.listFilter = {
			"globalFilter": null,
			"multiSortMeta": []
		};

		this.rowChecked = [];

		this.trashed = 0; 

		this.deleteType = 'soft';

		this.forceDelDialog = false;

		this.row = [
            { value: 3, label: '3' },
            { value: 6, label: '6' },
            { value: 9, label: '9' },
            { value: 0, label: 'All' }
        ];

        this.displayAddDial = false;

	}

	showDialogToAdd(){
		this.displayAddDial = true;
	}

	getSelectedCol(){
		return this.selectedCol = this.tblHeader;
	}
}
