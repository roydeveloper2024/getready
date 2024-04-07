import { Injectable} from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, share, shareReplay, tap, } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class RolePermiService {

	private _roleListBS = new BehaviorSubject<any>([]);
	_roleList$ = this._roleListBS.asObservable();

	private _permiListBS = new BehaviorSubject<any>([]);
	_permiList$ = this._permiListBS.asObservable();

	constructor(private _httpClient: HttpClient) { 

	}

	setRoleAndPermi(data){	
		let { roles, permission } = data;

		this.roleList = roles;
		this.permiList = permission;
	}

	set roleList(data){
		this._roleListBS.next(data);
	}

	get roleList(){
		return this._roleListBS;
	}

	set permiList(data){
		this._permiListBS.next(data);
	}

	get permiList(){
		return this._permiListBS;
	}

	//ROLES API =========================================
	destroy(name){
		let body = { "name": name };

		return this._httpClient.post(env.host+'api/'+env.apiVersion+'/role/destroy', body, { observe: 'response', reportProgress: true });			
	}
	update(name, id){
		let body = { "name": name, "id": id };

		return this._httpClient.post(env.host+'api/'+env.apiVersion+'/role/update', body, { observe: 'response', reportProgress: true });			
	}
	store(formVal){
		let body = { "name": formVal.name };

		return this._httpClient.post(env.host+'api/'+env.apiVersion+'/role/store', body, { observe: 'response', reportProgress: true });			
	}
	createUserRole(roles, uuid){
		let body = { "roles": JSON.stringify(roles), "uuid": uuid };

		return this._httpClient.post(env.host+'api/'+env.apiVersion+'/role/createUserRole', body, { observe: 'response', reportProgress: true });			
	}

	//END ROLES API ======================================================================



	getAllPermission(){
		return this._httpClient.get(env.host+'api/'+env.apiVersion+'/permission/getAllPermission', { observe: 'response', reportProgress: true });		
	}
	destroyPermi(name){
		let body = { "name": name };

		return this._httpClient.post(env.host+'api/'+env.apiVersion+'/permission/destroy', body, { observe: 'response', reportProgress: true });			
	}
	updatePermi(name, id){
		let body = { "name": name, "id": id };

		return this._httpClient.post(env.host+'api/'+env.apiVersion+'/permission/update', body, { observe: 'response', reportProgress: true });			
	}
	storePermi(formVal){
		let body = { "name": formVal.name };

		return this._httpClient.post(env.host+'api/'+env.apiVersion+'/permission/store', body, { observe: 'response', reportProgress: true });			
	}
	createUserPermission(permission, uuid){
		let body = { "permission": JSON.stringify(permission), "uuid": uuid };

		return this._httpClient.post(env.host+'api/'+env.apiVersion+'/permission/createUserPermission', body, { observe: 'response', reportProgress: true });			
	}

}
