import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
// import { AuthService } from '../services/auth/auth.service';
// import { WarningService } from '../services/warning/warning.service';
// import { WebsocketService } from "../services/websocket/websocket.service";
// import { SoundService } from '../services/sound/sound.service';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent implements OnInit {

	public isMenuCollapsed:boolean = true;
	
	userProf: 	any = {};
	userInfo: 	any = {};
	permiList: 	any = [];
	roleList: 	any = [];
	orgInfo: 	any = {};

	isHandset: Observable<BreakpointState> = this._breakpointObserver.observe(Breakpoints.Handset);
	
	listenTo: string;

	@ViewChild('snav', { static: true }) public snav: any;

	constructor(private _breakpointObserver: BreakpointObserver, 
		// private _spinner: NgxSpinnerService,
		// private _webSockServ: WebsocketService,
		// private _authServ: AuthService, 
		// private _warnServ: WarningService, 
		// private _sound: SoundService,

		// private _nodeServe: NodesService
		){

		// MUST use this code to check internet connection
	}

	serverStat: any;

	ngOnInit() {

		// this.userInfo 	= this._authServ.getUser();	
		// this.userProf 	= this.userInfo.user_info;
		// this.permiList 	= this.userInfo.permission;
		// this.roleList 	= this.userInfo.roles;
		// this.orgInfo 	= this.userInfo.orgs;

		// if (this.orgInfo) {
		// 	this.listenTo = this.orgInfo.org_id;
		// }else{
		// 	this.listenTo = this.roleList[0];
		// }

		
	
		// this._webSockServ.setUrl(env.socketServer, env.socketPort);

		// this._webSockServ.socketStat().subscribe((data: any) => {
			
		// 	this.serverStat = data;

		// 	if (this.serverStat ==  "connected") {
		// 		console.log("connected to socket");
		// 		// code...

		// 		this._webSockServ.serverStat = true;

		// 		this.listenToNewWarnnig();
		// 	}else{
		// 		this._webSockServ.serverStat = false;
		// 	}

		// });

	}


	// ngAfterViewInit(){
	// 	this._authServ._menuBS$.subscribe(res => {
	// 		if(res){
	// 			this.snav.toggle();
	// 		}
	// 	});
	// }

	// listenToNewWarnnig(){
	// 	this._webSockServ.listen(this.listenTo+"-warning").subscribe((data: any) => {

	// 		//PUSH TO WARNING TABLE
	// 		let newWarn = data[0];

	// 		this._sound.playSound('alarm.mp3');

	// 		this._webSockServ.newWarn = newWarn;

	// 		this.listenToFinalInten(0, newWarn.event_unique_id, newWarn.bldg_id);

	// 	});
	// }


	// listenToFinalInten(index, event_unique_id, bldg_id){


	// 	// console.log(index, event_unique_id, bldg_id);

	// 	// console.log("event_max-"+event_unique_id);
		
	// 	let id = bldg_id;
	// 	let i = index;

	// 	this._webSockServ.listen("event_max-"+event_unique_id).subscribe((data: any) => {
		
	// 		let dataInfo = {
	// 			"index": i,
	// 			"bldg_id": id,
	// 			"data": data[0],
	// 		}

	// 		this._webSockServ.finalIntent = dataInfo;
	// 		// this.warnTbl.tblVal[index]['intensity_max'] = data[0];

	// 	});
	// }


}
