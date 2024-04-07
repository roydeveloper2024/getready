import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { HttpEventType, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { CustomValidators } from '../classes/custom-validators';
import { DataService } from '../services/data/data.service';
import { MessageService } from 'primeng/api';
import { SubmitRespon } from '../classes/submit-respon';
import { AuthService } from '../services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  contactForm: FormGroup;

  signUpForm: FormGroup;

  get cf() { return this.contactForm.controls; }
  get sf() { return this.signUpForm.controls; }

  genderOpt: any = [];

  passwordRegex: RegExp = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/;

  token: any;

  constructor(private _actvRoute: ActivatedRoute, private _router: Router, private _formBuilder: FormBuilder, private _dataServe: DataService, private _msgServe: MessageService, private _authServ: AuthService,) {

    this._actvRoute.params.subscribe(params => {
      this.token = params['token'];

      console.log(this.token);
    });
  }

  passwordToken: boolean = false;
  loadPasswordToken: boolean = false;

  ngOnInit(): void {

    this.genderOpt = [{
      "label": "Select Gender",
      "value": null
    }, {
      "label": "Male",
      "value": "Male"
    }, {
      "label": "Female",
      "value": "Female"
    }, {
      "label": "LGBT",
      "value": "LGBT"
    }];

    this.contactForm = this._formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      message: ['', Validators.compose([Validators.required, Validators.email])],
    });



    this.signUpForm = this._formBuilder.group({
      password: ['',
        Validators.compose([
          Validators.minLength(6),
          Validators.required,
          // 2. check whether the entered password has a number
          // CustomValidators.patternValidator(/\d/, { hasNumber: true }),
          // 3. check whether the entered password has upper case letter
          // CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
          // 4. check whether the entered password has a lower-case letter
          // CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
          // 5. check whether the entered password has a special character
          // CustomValidators.patternValidator(this.passwordRegex, { hasSpecialChar: true })
        ])
      ],
      c_password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    }, {
      validator: CustomValidators.MustMatch('password', 'c_password')
    });

    this.checkForgotPassToken();

  }


  checkForgotPassToken() {
    this._dataServe.checkForgotPassToken(this.token).subscribe((event: HttpEvent<any>) => {
      if (event.type === HttpEventType.Response) {

        if (event.status == 200) {

          let body = event.body;
          let error = body.error;
          let msg = body.message;

          console.log(body);
          if (!error) {
            this.passwordToken = false;

          } else {
            //this.productType = [];

            this.passwordToken = true;
          }

          this.loadPasswordToken = true;

        } else {
          alert(event.status);
        }

      }
    });

  }





  submit = new SubmitRespon();

  submitSignUpForm(e) {



    if (!this.signUpForm.valid || this.submit.load) return false;
    this.submit.reset();
    this.submit.load = true;


    let value = this.signUpForm.value;

    this._dataServe.newPassword(this.signUpForm.value, this.token).subscribe((event: HttpEvent<any>) => {

      if (event.type === HttpEventType.Response) {

        if (event.status == 200) {

          let body = event.body;
          let { error, message } = body;

          console.log(body);

          if (!error) {
            this._msgServe.add({ severity: 'success', summary: message });


            setTimeout(() => {
              this._router.navigate(['/signin']);
            }, 4000);




          } else {

            this._msgServe.add({ severity: 'error', summary: message });
          }

          this.signUpForm.reset();
          this.signUpForm.enable();
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
