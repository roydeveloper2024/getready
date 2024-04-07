import { Injectable } from '@angular/core';
import {
	HttpInterceptor,
	HttpRequest,
	HttpResponse,
	HttpHandler,
	HttpEvent,
	HttpErrorResponse,
	HttpEventType
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';


import { Router } from '@angular/router';


@Injectable({
	providedIn: 'root'
})
export class TokenInterceptorService {

	constructor(private _authServ: AuthService,
    private _router: Router) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = this._authServ.token ? this._authServ.token : "";

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        // if (!request.headers.has('Content-Type')) {
        //     request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        // }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {

                    let body  = event.body;
                    let error = body.error;
                    let msg   = body.message;

                    if (error && body.error_code == 401) {


                        if (this._router.url !== '/') {
                            alert("Session Loging out");
                            location.reload();

                        }
                    }

                }
                return event;
            })
        );
    }
}
