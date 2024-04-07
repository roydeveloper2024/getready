import { Component, OnInit, ErrorHandler, ChangeDetectorRef } from '@angular/core';
import { Subscription, Observable, Subject } from 'rxjs';
import { HttpEventType, HttpProgressEvent, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
//import { TOCComponent } from '../component/toc/toc.component';
import { SubmitRespon } from '../classes/submit-respon';
import { TblConfig } from '../classes/tbl-config';

import { AuthService } from '../services/auth/auth.service';

import { DataService } from '../services/data/data.service';

import { environment as env } from '../../environments/environment';
// import { NgxSpinnerService } from "ngx-spinner";
import * as moment from 'moment/moment';

import { MessageService } from 'primeng/api';

import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  host: string;

  dev: string;

  constructor(private _actvRoute: ActivatedRoute, private _router: Router,
    private _formBuilder: FormBuilder,
    private _authServ: AuthService,
    private _confServe: ConfirmationService,
    private messageService: MessageService,
    private _dataServe: DataService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {

    this.host = env.dirProject;
  }

  ngOnInit(): void {

    this.benTbl.tblLoad = true;
    this.getAllOrder();

    this.getAllMyBeneficiaries();
  }


  benTbl = new TblConfig([
    // { field: "order_ref", header: 'Reference Number' },
    // { field: "customer_name", header: 'Customer' },
    // { field: "payment_status", header: 'Payment Status' },
    // { field: "total", header: 'Total' },

    // { field: "created_at", header: 'Checkout date' },
    // { field: "action", header: 'Action' }
  ]);





  orderTbl = new TblConfig([
    { field: "order_ref", header: 'Reference Number' },
    { field: "customer_name", header: 'Customer' },
    { field: "payment_status", header: 'Payment Status' },
    { field: "total", header: 'Total' },

    { field: "created_at", header: 'Checkout date' },
    { field: "action", header: 'Action' }
  ]);


  server_date: any;

  orderProductTbl = new TblConfig([
    { field: "prod_img_filename", header: '' },
    { field: "prod_var_title", header: 'Product' },
    { field: "prod_var_qty", header: 'Quantity' },
    { field: "prod_var_sku", header: 'SKU' },
    { field: "prod_var_price", header: 'Price' },
  ]);


  getAllOrder() {
    this.orderTbl.tblLoad = true;

    this._dataServe.getAllMyOrder().subscribe((event: HttpEvent<any>) => {
      if (event.type === HttpEventType.Response) {

        if (event.status == 200) {

          let body = event.body;
          let error = body.error;
          let msg = body.message;

          console.log(body);

          if (!error) {
            this.orderTbl.tblVal = body.data.order;

          } else {
            this.orderTbl.tblVal = [];

          }

          this.orderTbl.tblLoad = false;

        } else {
          alert(event.status);
        }

      }
    });

  }


  getAllMyBeneficiaries() {
    this.benTbl.tblLoad = true;

    this._dataServe.getAllMyBeneficiaries().subscribe((event: HttpEvent<any>) => {
      if (event.type === HttpEventType.Response) {

        if (event.status == 200) {

          let body = event.body;
          let error = body.error;
          let msg = body.message;

          console.log(body);

          if (!error) {
            this.benTbl.tblVal = body.data.beneficiary;

          } else {
            this.benTbl.tblVal = [];

          }

          this.benTbl.tblLoad = false;

        } else {
          alert(event.status);
        }

      }
    });

  }

  viewOrder(data) {
    this._router.navigate(['/dashboard/order/' + data.order_id]);
  }

  formatDate(data) {
    return new Date(data).toISOString().slice(0, 10);

  }
}
