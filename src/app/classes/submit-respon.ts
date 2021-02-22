export class SubmitRespon {
	private _load: boolean = false;
	private _done: boolean = false;
	private _status: number = 1;
	private _msg: string = "";

	constructor(){
		this._load = false;
		this._done = false;
		this._status = 1;
		this._msg = "";
	}

	reset(){
		this._load = false;
		this._done = false;
		this._status = 1;
		this._msg = "";
	}

	get load(){
		return this._load;
	}
	set load(val: boolean){
		this._load = val;
	}

	get done(){
		return this._done;
	}
	set done(val: boolean){
		this._done = val;
	}

	get status(){
		return this._status;
	}
	set status(val: number){
		this._status = val;
	}

	get msg(){
		return this._msg;
	}

	set msg(msg: string){
		this._msg = msg;
	}
}
