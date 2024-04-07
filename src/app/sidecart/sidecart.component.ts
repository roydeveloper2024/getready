import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'app-sidecart',
  templateUrl: './sidecart.component.html',
  styleUrls: ['./sidecart.component.scss']
})
export class SidecartComponent implements OnInit {

  displaySideCart: boolean = false;

  total: string = "0.00";

  cartList: any = [];

  host: string;

  constructor(private _dataServe: DataService) {
    this.host = env.dirProject;

  }

  ngOnInit(): void {
    this._dataServe._openCartBS$.subscribe(res => {
      console.log(res);
      if(res){
        this.displaySideCart = true;
      }
    });


    this.cartList = this._dataServe.getProductFromCart ? this._dataServe.getProductFromCart : [];

    this.sumTotal();

    this._dataServe._newCartItemBS$.subscribe(res => {


      if(res){
        // Already displayed on cartList
        this.cartList = res;
        this.sumTotal();
      }
    })


	}

  sumTotal(){
    this.total = this.cartList.reduce((acc, cur) => {


      return acc + (cur['prod_var_price'] * cur['prod_qty']);
    }, 0);
  }

  removeCartItem(data){

    this._dataServe.removeCartItem(data);
  }



  findWithAttr(array, attr, value) {
		for(var i = 0; i < array.length; i += 1) {
			if(array[i][attr] === value) {
				return i;
			}
		}
		return -1;
	}



}
