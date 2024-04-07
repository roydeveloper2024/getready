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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  contactForm: FormGroup;

  signUpForm: FormGroup;

  get cf() { return this.contactForm.controls; }
  get sf() { return this.signUpForm.controls; }

  genderOpt: any = [];

  passwordRegex: RegExp = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/;

  constructor(private _router: Router, private _formBuilder: FormBuilder, private _dataServe: DataService, private _msgServe: MessageService, private _authServ: AuthService, ) { }

  ngOnInit(): void {

    this.genderOpt = [{
			"label": "Select Gender",
			"value": null
		},{
			"label": "Male",
			"value": "Male"
		},{
			"label": "Female",
			"value": "Female"
		},{
			"label": "LGBT",
			"value": "LGBT"
		}];

    this.contactForm = this._formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      message: ['', Validators.compose([Validators.required, Validators.email])],
    });

    this.signUpForm = this._formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],

      name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      contact: ['', Validators.compose([Validators.required, Validators.minLength(5)])],

      address: [''],

      gender: ['', Validators.compose([Validators.required])],

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

  }


  submit = new SubmitRespon();

  submitSignUpForm(e) {



    if (!this.signUpForm.valid || this.submit.load) return false;
    this.submit.reset();
    this.submit.load = true;


    let value = this.signUpForm.value;

    this._dataServe.userRegister(this.signUpForm.value).subscribe((event: HttpEvent<any>) => {

      if (event.type === HttpEventType.Response) {

        if (event.status == 200) {

          let body = event.body;
          let { error, message } = body;

          console.log(body);

          if (!error) {
            this._msgServe.add({ severity: 'success', summary: message });



            this._authServ.token = body.data.token;
            this._authServ.login(body.data);
            this._router.navigate(['/welcome']);
            // this._router.navigateByUrl(this.returnUrl);

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
