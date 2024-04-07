import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService as AuthServe} from '../../services/auth/auth.service';
import { RolePermiService } from '../../services/role-permi/role-permi.service';
import { Location } from '@angular/common';
import { HttpEventType, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthGuardService {


	constructor(private _loc: Location, private _authServ: AuthServe, private _router: Router, private _rolePermi: RolePermiService) { }

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable <boolean> | Promise <boolean> | boolean{
		return this._authServ.checkSession().pipe(map ((event : HttpEvent<any>) =>{

			if (event.type === HttpEventType.Response) {

				if (event.status == 200) {

					let body  = event.body;
					let error = body.error;
					let msg   = body.message;

					if (!error) {

						this._authServ.login(body.data);

						this._rolePermi.setRoleAndPermi(body.data);

						return true;
		    		}else{
		    			this._authServ.logout();
		    			this._router.navigate(['/'], { queryParams: { returnUrl: state.url }});
		    			return false;
		    		}

				}else{
					console.log(event.status);
					alert(event.status);
				}
			}
		}));
	}

	roleList: any = [];

	canActivateChild(next: ActivatedRouteSnapshot, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    	const expectedRole = next.data.expectedRole;

		this._rolePermi.roleList.subscribe(res => {
			this.roleList = res;
		});

		if(this.ifHas(this.roleList, expectedRole)){
			return true;
		}else{
			this._router.navigate(['access-denied']);
			return false;
		}

	}

	ifHas(value, data): boolean{

		if (!data) {
			return true;
		}

		//IF USER ROLE LIST IS INCLUDS ON expectedRole
		return this.roleList.some(r => data.indexOf(r) >= 0);

	}
}
