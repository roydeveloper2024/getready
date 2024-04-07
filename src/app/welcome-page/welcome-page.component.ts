import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data/data.service';
import { AuthService } from '../services/auth/auth.service';
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

	public isMenuCollapsed: boolean = true;
	authenticated: boolean = false;

  userInfo: any = {};

	constructor(private _dataServe: DataService, private _authServ: AuthService,) {
		if (this._authServ.getUser()) {

			this.authenticated = true;
      this.userInfo = this._authServ.getUser()?.user_info;

      console.log(this.userInfo);

		} else {
			this.authenticated = false;
		}

	}

	ngOnInit(): void {
	}

	displayTermsModal: boolean = false;

	openTermsModal() {
		this.displayTermsModal = true;
	}

	openCart() {
		this._dataServe.openSideCart();
	}

}