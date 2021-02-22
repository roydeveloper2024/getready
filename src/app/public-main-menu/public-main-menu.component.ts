import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-public-main-menu',
	templateUrl: './public-main-menu.component.html',
	styleUrls: ['./public-main-menu.component.scss']
})
export class PublicMainMenuComponent implements OnInit {

	public isMenuCollapsed:boolean = true;
	
	constructor() { }

	ngOnInit(): void {
	}

}
