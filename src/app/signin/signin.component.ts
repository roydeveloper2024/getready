
import { Component, OnInit, ErrorHandler } from '@angular/core';

import { HttpEventType, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../services/auth/auth.service';
import { SubmitRespon } from '../classes/submit-respon';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;

  constructor(private _actvRoute: ActivatedRoute, private _router: Router,
    private _formBuilder: FormBuilder,
    private _authServ: AuthService,
    private _msgServe: MessageService,

  ) {


    if (this._authServ.getUser()) {


      this._router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });

    this.returnUrl = this._actvRoute.snapshot.queryParams['returnUrl'] || '/';

  }

  signInWithGoogle(): void {

  }

  signInWithFB(): void {

  }

  submit = new SubmitRespon();

  submitLoginForm(e) {

    if (!this.loginForm.valid || this.submit.load) return false;
    this.submit.reset();
    this.submit.load = true;


    let value = this.loginForm.value;

    this._authServ.signIn(this.loginForm.value).subscribe((event: HttpEvent<any>) => {

      if (event.type === HttpEventType.Response) {

        if (event.status == 200) {

          let body = event.body;
          let { error, message } = body;

          if (!error) {
            this._msgServe.add({ severity: 'success', summary: message });

            this._authServ.token = body.data.token;
            this._authServ.login(body.data);

            //location.reload();
            // this._router.navigateByUrl(this.returnUrl);
            this._router.navigate(['/']);

          } else {

            this._msgServe.add({ severity: 'error', summary: message });
          }


          this.loginForm.reset();
          this.loginForm.enable();
          this.submit.load = false;

        } else {
          alert(event.status);
        }

      }

    }, (err: HttpErrorResponse) => {

      console.log(err);
    });
  }

}
