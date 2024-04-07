import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { Observable, throwError, BehaviorSubject} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


// import { AngularFireAuth } from  "@angular/fire/auth";
// import { auth } from  'firebase/app';



@Injectable({
	providedIn: 'root'
})
export class AuthService {

	//private loggedIn = new BehaviorSubject<boolean>(false);

	private _menuBS = new BehaviorSubject<any>(null);
	_menuBS$ = this._menuBS.asObservable();


	private _loggedInBS = new BehaviorSubject<any>(false);
	_loggedInBS$ = this._loggedInBS.asObservable();

	constructor(
		// public  afAuth:  AngularFireAuth,
		private _httpClient: HttpClient, private _router: Router) {
		// this.afAuth.authState.subscribe(user => {
		// 	if (user){

		// 		//alert(JSON.stringify(user));
		// 		// /this.user = user;
		// 		//localStorage.setItem('user', JSON.stringify(this.user));
		// 	} else {
		// 		localStorage.setItem('user', null);
		// 	}
		// })

	}



	toggleMenu(){
		this._menuBS.next(true);
	}



	set token(token){
		localStorage.setItem('token', JSON.stringify(token));
	}

	get token(){
		return JSON.parse(localStorage.getItem('token'));
	}

	login(userInfo): void {

		localStorage.setItem('user', JSON.stringify(userInfo));
		this._loggedInBS.next(true);
	}

	async logout(){
		this._loggedInBS.next(false);
		return await localStorage.clear();
	}

	get isLoggedIn() {
		return;
		//return this.loggedIn.asObservable(); // {2}
	}

	getUser(){
		return JSON.parse(localStorage.getItem('user'));
	}

	signIn(formVal) {

		let body = new FormData();
		body.append('email', formVal.email);
		body.append('password', formVal.password);

		return this._httpClient.post(env.host + 'api/'+env.apiVersion+'/userLogin', body, { observe: 'response', reportProgress: true });
	}


	checkUserAdmin(formVal) {

		let body = new FormData();
		body.append('email', formVal.email);
		body.append('password', formVal.password);

		return this._httpClient.post(env.host + 'api/'+env.apiVersion+'/checkUserAdmin', body, { observe: 'response', reportProgress: true });
	}



	checkSession() {
		return this._httpClient.get(env.host + 'api/'+env.apiVersion+'/checkSession', { observe: 'response', reportProgress: true });
	}

	// async  loginWithGoogle(){
	// 	await  this.afAuth.signInWithRedirect(new auth.GoogleAuthProvider()).then(response => {
	// 		console.log(response);
	// 	});
	// }



}